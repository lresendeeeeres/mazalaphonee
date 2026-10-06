import { Request, Response } from 'express';
import { prisma } from '../config/database';

export class TradeInController {
  public static async listEvaluations(req: Request, res: Response) {
    try {
      const evaluations = await prisma.tradeInEvaluation.findMany({
        where: { isActive: true },
        orderBy: { evaluationValue: 'desc' },
      });

      return res.status(200).json({ success: true, data: evaluations });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao carregar tabela de Trade-in.' });
    }
  }

  public static async calculate(req: Request, res: Response) {
    try {
      const { usedModel, batteryCondition, desiredProductId, desiredStorage } = req.body;

      if (!usedModel || !desiredProductId) {
        return res.status(400).json({
          success: false,
          message: 'Modelo usado e produto desejado são obrigatórios.',
        });
      }

      const evalEntry = await prisma.tradeInEvaluation.findFirst({
        where: {
          usedModel: { equals: String(usedModel) },
          isActive: true,
        },
      });

      let baseEvaluation = evalEntry ? evalEntry.evaluationValue : 1200;
      let conditionMultiplier = 1.0;
      let conditionText = 'Impecável (85%+ / Sem riscos)';

      if (batteryCondition === '0.9' || batteryCondition === 'bom') {
        conditionMultiplier = 0.9;
        conditionText = 'Bom estado (Marcas normais)';
      } else if (batteryCondition === '0.8' || batteryCondition === 'desgaste') {
        conditionMultiplier = 0.8;
        conditionText = 'Bateria abaixo de 80% / Marcas acentuadas';
      }

      const finalEvaluation = Math.round(baseEvaluation * conditionMultiplier);

      const desiredProduct = await prisma.product.findUnique({
        where: { id: desiredProductId },
      });

      if (!desiredProduct) {
        return res.status(404).json({ success: false, message: 'Produto desejado não encontrado.' });
      }

      const storagesObj = JSON.parse(desiredProduct.storages || '{}');
      const targetPrice = (desiredStorage && storagesObj[desiredStorage])
        ? storagesObj[desiredStorage]
        : desiredProduct.price;

      const differenceToPay = Math.max(0, targetPrice - finalEvaluation);

      return res.status(200).json({
        success: true,
        data: {
          desiredProduct: {
            id: desiredProduct.id,
            name: desiredProduct.name,
            storage: desiredStorage || desiredProduct.storage,
            price: targetPrice,
          },
          usedDevice: {
            model: usedModel,
            condition: conditionText,
            evaluatedValue: finalEvaluation,
          },
          calculatedDifference: differenceToPay,
          installments12x: Math.round((differenceToPay * 1.15) / 12),
          installments18x: Math.round((differenceToPay * 1.22) / 18),
        },
      });
    } catch (error) {
      console.error('Erro no cálculo de Trade-in:', error);
      return res.status(500).json({ success: false, message: 'Erro interno ao realizar cálculo de troca.' });
    }
  }
}
