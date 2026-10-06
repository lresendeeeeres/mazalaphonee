import { Request, Response } from 'express';
import { prisma } from '../config/database';

export class AnalyticsController {
  // Rastrear evento de conversão
  public static async trackEvent(req: Request, res: Response) {
    try {
      const { eventType, targetId, targetName, metadata } = req.body;

      if (!eventType) {
        return res.status(400).json({ success: false, message: 'eventType é obrigatório.' });
      }

      const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
      const userAgent = req.headers['user-agent'];

      const event = await prisma.analyticsEvent.create({
        data: {
          eventType,
          targetId: targetId || null,
          targetName: targetName || null,
          metadata: typeof metadata === 'string' ? metadata : JSON.stringify(metadata || {}),
          ipAddress: Array.isArray(ip) ? ip[0] : (ip ? String(ip) : null),
          userAgent: userAgent ? String(userAgent) : null,
        },
      });

      return res.status(201).json({ success: true, eventId: event.id });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao registrar evento analítico.' });
    }
  }

  // Relatório de Desempenho para o Painel do Lojista
  public static async getConversionReport(req: Request, res: Response) {
    try {
      // 1. Modelos de iPhone mais simulados no Trade-In
      const tradeInEvents = await prisma.analyticsEvent.findMany({
        where: { eventType: 'trade_in_simulation' },
        select: { targetName: true, createdAt: true },
      });

      const tradeInCounts: { [model: string]: number } = {};
      tradeInEvents.forEach(e => {
        const name = e.targetName || 'Outro Modelo';
        tradeInCounts[name] = (tradeInCounts[name] || 0) + 1;
      });

      const topSimulatedModels = Object.entries(tradeInCounts)
        .map(([model, count]) => ({ model, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 7);

      // 2. Total de Cliques no WhatsApp
      const whatsappClicksCount = await prisma.analyticsEvent.count({
        where: { eventType: 'whatsapp_click' },
      });

      // 3. Cliques por Produto / Botão
      const whatsappProductClicks = await prisma.analyticsEvent.groupBy({
        by: ['targetName'],
        where: { eventType: 'whatsapp_click' },
        _count: { targetName: true },
        orderBy: { _count: { targetName: 'desc' } },
        take: 5,
      });

      // 4. Volume de Leads Gerados por Dia (Últimos 7 dias)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const recentLeads = await prisma.orderLead.findMany({
        where: { createdAt: { gte: sevenDaysAgo } },
        select: { createdAt: true, calculatedDifference: true },
      });

      const dailyLeadsMap: { [dateStr: string]: { count: number; volume: number } } = {};
      for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
        dailyLeadsMap[key] = { count: 0, volume: 0 };
      }

      recentLeads.forEach(lead => {
        const key = new Date(lead.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
        if (dailyLeadsMap[key]) {
          dailyLeadsMap[key].count += 1;
          dailyLeadsMap[key].volume += lead.calculatedDifference || 0;
        }
      });

      const dailyTrends = Object.entries(dailyLeadsMap).map(([date, data]) => ({
        date,
        leadsCount: data.count,
        volume: data.volume,
      })).reverse();

      return res.status(200).json({
        success: true,
        data: {
          whatsappTotalClicks: whatsappClicksCount,
          topSimulatedTradeInModels: topSimulatedModels,
          topClickedProducts: whatsappProductClicks.map(w => ({ name: w.targetName || 'Geral', clicks: w._count.targetName })),
          dailyLeadVolume: dailyTrends,
        },
      });
    } catch (error) {
      console.error('Erro no relatório de analytics:', error);
      return res.status(500).json({ success: false, message: 'Erro ao gerar métricas de conversão.' });
    }
  }
}
