import { Request, Response } from 'express';
import { prisma } from '../config/database';

export class AdminTradeInController {
  public static async list(req: Request, res: Response) {
    try {
      const items = await prisma.tradeInEvaluation.findMany({ orderBy: { evaluationValue: 'desc' } });
      return res.status(200).json({ success: true, data: items });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao listar avaliações de Trade-in.' });
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      const { usedModel, batteryHealthRange, conditionLabel, evaluationValue, isActive } = req.body;

      const item = await prisma.tradeInEvaluation.create({
        data: {
          usedModel,
          batteryHealthRange: batteryHealthRange || '1.0',
          conditionLabel: conditionLabel || 'Impecável',
          evaluationValue: Number(evaluationValue),
          isActive: isActive !== undefined ? Boolean(isActive) : true,
        },
      });

      return res.status(201).json({ success: true, message: 'Modelo de Trade-in cadastrado!', data: item });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao criar avaliação de Trade-in.' });
    }
  }

  public static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { usedModel, batteryHealthRange, conditionLabel, evaluationValue, isActive } = req.body;

      const item = await prisma.tradeInEvaluation.update({
        where: { id },
        data: {
          ...(usedModel && { usedModel }),
          ...(batteryHealthRange && { batteryHealthRange }),
          ...(conditionLabel && { conditionLabel }),
          ...(evaluationValue !== undefined && { evaluationValue: Number(evaluationValue) }),
          ...(isActive !== undefined && { isActive: Boolean(isActive) }),
        },
      });

      return res.status(200).json({ success: true, message: 'Avaliação atualizada!', data: item });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao atualizar Trade-in.' });
    }
  }

  public static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.tradeInEvaluation.delete({ where: { id } });
      return res.status(200).json({ success: true, message: 'Modelo de Trade-in removido.' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao excluir Trade-in.' });
    }
  }
}
