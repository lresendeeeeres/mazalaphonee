import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { WhatsAppService } from '../services/whatsappService';

export class LeadController {
  public static async createWhatsAppLead(req: Request, res: Response) {
    try {
      const {
        clientPhone,
        clientName,
        desiredProductId,
        desiredProductName,
        desiredStorage,
        desiredColor,
        desiredPrice,
        usedModelName,
        batteryHealth,
        usedEvaluationValue,
        calculatedDifference,
        couponApplied,
      } = req.body;

      if (!desiredProductName) {
        return res.status(400).json({ success: false, message: 'Nome do produto desejado é obrigatório.' });
      }

      const lead = await prisma.orderLead.create({
        data: {
          clientPhone: clientPhone || 'Não informado',
          clientName: clientName || 'Cliente WhatsApp',
          desiredProductId: desiredProductId || null,
          desiredProductName,
          desiredStorage: desiredStorage || '128GB',
          desiredColor: desiredColor || null,
          usedModelName: usedModelName || null,
          usedEvaluationValue: usedEvaluationValue ? Number(usedEvaluationValue) : 0,
          calculatedDifference: calculatedDifference ? Number(calculatedDifference) : (desiredPrice || 0),
          couponApplied: couponApplied || null,
          status: 'Novo',
        },
      });

      const whatsappUrl = WhatsAppService.generateLeadUrl({
        desiredProduct: desiredProductName,
        storage: desiredStorage || '128GB',
        color: desiredColor,
        price: Number(desiredPrice || calculatedDifference || 0),
        usedModel: usedModelName,
        batteryHealth: batteryHealth,
        evaluationValue: usedEvaluationValue ? Number(usedEvaluationValue) : undefined,
        differenceToPay: calculatedDifference ? Number(calculatedDifference) : undefined,
        coupon: couponApplied,
      });

      return res.status(201).json({
        success: true,
        message: 'Lead registrado com sucesso.',
        data: { leadId: lead.id, whatsappUrl },
      });
    } catch (error) {
      console.error('Erro ao gerar lead de WhatsApp:', error);
      return res.status(500).json({ success: false, message: 'Erro interno ao gerar lead.' });
    }
  }
}
