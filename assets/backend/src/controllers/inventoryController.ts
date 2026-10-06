import { Request, Response } from 'express';
import { prisma } from '../config/database';

export class InventoryController {
  public static async listAll(req: Request, res: Response) {
    try {
      const { status, productId } = req.query;
      const where: any = {};
      if (status) where.status = String(status);
      if (productId) where.productId = String(productId);

      const items = await prisma.inventoryItem.findMany({
        where,
        include: {
          product: { select: { name: true, model: true } },
          inspection: true,
        },
        orderBy: { createdAt: 'desc' },
      });

      return res.status(200).json({ success: true, count: items.length, data: items });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao listar itens do estoque.' });
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      const {
        productId,
        imei,
        serialNumber,
        batteryHealth,
        batteryCycles,
        color,
        storage,
        costPrice,
        salePrice,
        status,
      } = req.body;

      if (!productId || !imei || !salePrice) {
        return res.status(400).json({ success: false, message: 'Produto, IMEI e Preço de venda são obrigatórios.' });
      }

      // Validação de IMEI duplicado
      const existing = await prisma.inventoryItem.findUnique({ where: { imei: String(imei).trim() } });
      if (existing) {
        return res.status(400).json({ success: false, message: 'Já existe um aparelho cadastrado com este IMEI.' });
      }

      const item = await prisma.inventoryItem.create({
        data: {
          productId,
          imei: String(imei).trim(),
          serialNumber: serialNumber ? String(serialNumber).trim() : null,
          batteryHealth: batteryHealth ? Number(batteryHealth) : 100,
          batteryCycles: batteryCycles ? Number(batteryCycles) : 0,
          color: color || 'Padrão',
          storage: storage || '128GB',
          costPrice: costPrice ? Number(costPrice) : null,
          salePrice: Number(salePrice),
          status: status || 'available',
        },
      });

      return res.status(201).json({ success: true, message: 'Aparelho inserido no estoque com sucesso!', data: item });
    } catch (error) {
      console.error('Erro no cadastro de IMEI:', error);
      return res.status(500).json({ success: false, message: 'Erro ao cadastrar aparelho.' });
    }
  }

  public static async updateStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const updated = await prisma.inventoryItem.update({
        where: { id },
        data: {
          status,
          soldAt: status === 'sold' ? new Date() : null,
        },
      });

      return res.status(200).json({ success: true, message: 'Status do estoque atualizado!', data: updated });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao atualizar status do item.' });
    }
  }

  public static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.inventoryItem.delete({
        where: { id },
      });
      return res.status(200).json({ success: true, message: 'Item removido do estoque com sucesso!' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao remover item do estoque.' });
    }
  }

  public static async verifyByImei(req: Request, res: Response) {
    try {
      const { imei } = req.params;
      const item = await prisma.inventoryItem.findUnique({
        where: { imei },
        include: {
          product: true,
          inspection: true,
        },
      });

      if (!item) {
        return res.status(404).json({ success: false, message: 'IMEI não localizado na base Mazala Phone.' });
      }

      return res.status(200).json({
        success: true,
        message: 'Aparelho autêntico e verificado pela Mazala Phone.',
        data: item,
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro na verificação de IMEI.' });
    }
  }
}
