import { Request, Response } from 'express';
import { prisma } from '../config/database';

export class ProductController {
  public static async listPublic(req: Request, res: Response) {
    try {
      const { category, generation, search, condition } = req.query;
      const where: any = { isActive: true };

      if (category && category !== 'all') {
        where.category = String(category);
      }
      if (generation) {
        where.generation = String(generation);
      }
      if (condition) {
        where.condition = String(condition);
      }
      if (search) {
        where.OR = [
          { name: { contains: String(search) } },
          { model: { contains: String(search) } },
          { description: { contains: String(search) } },
        ];
      }

      const products = await prisma.product.findMany({
        where,
        orderBy: { price: 'desc' },
      });

      const formatted = products.map((p) => ({
        ...p,
        specs: JSON.parse(p.specs || '[]'),
        storages: JSON.parse(p.storages || '{}'),
        colors: JSON.parse(p.colors || '[]'),
      }));

      return res.status(200).json({
        success: true,
        count: formatted.length,
        data: formatted,
      });
    } catch (error) {
      console.error('Erro ao listar produtos:', error);
      return res.status(500).json({
        success: false,
        message: 'Erro interno ao consultar catálogo de produtos.',
      });
    }
  }

  public static async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await prisma.product.findUnique({ where: { id } });

      if (!product) {
        return res.status(404).json({ success: false, message: 'Produto não encontrado.' });
      }

      return res.status(200).json({
        success: true,
        data: {
          ...product,
          specs: JSON.parse(product.specs || '[]'),
          storages: JSON.parse(product.storages || '{}'),
          colors: JSON.parse(product.colors || '[]'),
        },
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao buscar detalhes do produto.' });
    }
  }
}
