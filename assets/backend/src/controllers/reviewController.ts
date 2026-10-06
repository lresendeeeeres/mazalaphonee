import { Request, Response } from 'express';
import { prisma } from '../config/database';

export class ReviewController {
  public static async listApproved(req: Request, res: Response) {
    try {
      const reviews = await prisma.review.findMany({
        where: { status: 'approved' },
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json({ success: true, data: reviews });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao carregar avaliações.' });
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      const { clientName, location, text, rating, imageUrl } = req.body;
      const review = await prisma.review.create({
        data: {
          clientName,
          location: location || 'Cataguases - MG',
          text,
          rating: rating ? Number(rating) : 5,
          imageUrl: imageUrl || null,
          status: 'pending',
        },
      });
      return res.status(201).json({
        success: true,
        message: 'Depoimento enviado com sucesso para moderação!',
        data: review,
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao enviar avaliação.' });
    }
  }

  public static async listAllAdmin(req: Request, res: Response) {
    try {
      const reviews = await prisma.review.findMany({ orderBy: { createdAt: 'desc' } });
      return res.status(200).json({ success: true, data: reviews });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar avaliações no painel.' });
    }
  }

  public static async updateStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updated = await prisma.review.update({ where: { id }, data: { status } });
      return res.status(200).json({ success: true, message: 'Status atualizado!', data: updated });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao moderar depoimento.' });
    }
  }
}
