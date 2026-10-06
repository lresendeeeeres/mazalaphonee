import { Request, Response } from 'express';
import { prisma } from '../config/database';

export class AdminLeadController {
  public static async list(req: Request, res: Response) {
    try {
      const { status } = req.query;
      const where = status ? { status: String(status) } : {};

      const leads = await prisma.orderLead.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        include: { desiredProduct: true },
      });

      return res.status(200).json({ success: true, count: leads.length, data: leads });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar orçamentos e leads.' });
    }
  }

  public static async updateStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status, notes } = req.body;

      const updated = await prisma.orderLead.update({
        where: { id },
        data: {
          ...(status && { status }),
          ...(notes !== undefined && { notes }),
        },
      });

      return res.status(200).json({ success: true, message: 'Status do orçamento atualizado!', data: updated });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao atualizar status do lead.' });
    }
  }
}
