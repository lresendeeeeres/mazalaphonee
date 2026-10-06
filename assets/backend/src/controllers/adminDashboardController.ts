import { Request, Response } from 'express';
import { prisma } from '../config/database';

export class AdminDashboardController {
  public static async getStats(req: Request, res: Response) {
    try {
      const [
        totalProducts,
        activeProducts,
        totalLeads,
        newLeads,
        closedLeads,
        tradeInEvaluationsCount,
        recentLeads,
      ] = await Promise.all([
        prisma.product.count(),
        prisma.product.count({ where: { isActive: true } }),
        prisma.orderLead.count(),
        prisma.orderLead.count({ where: { status: 'Novo' } }),
        prisma.orderLead.count({ where: { status: 'Fechado' } }),
        prisma.tradeInEvaluation.count({ where: { isActive: true } }),
        prisma.orderLead.findMany({
          take: 8,
          orderBy: { createdAt: 'desc' },
          include: { desiredProduct: true },
        }),
      ]);

      const pipelineSum = await prisma.orderLead.aggregate({
        _sum: { calculatedDifference: true },
      });

      return res.status(200).json({
        success: true,
        data: {
          totalProducts,
          activeProducts,
          totalLeads,
          newLeads,
          closedLeads,
          tradeInEvaluationsCount,
          totalPipelineValue: pipelineSum._sum.calculatedDifference || 0,
          recentLeads,
        },
      });
    } catch (error) {
      console.error('Erro ao gerar estatísticas do dashboard:', error);
      return res.status(500).json({ success: false, message: 'Erro ao carregar métricas do painel.' });
    }
  }
}
