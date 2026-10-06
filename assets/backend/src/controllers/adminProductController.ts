import { Request, Response } from 'express';
import { prisma } from '../config/database';

export class AdminProductController {
  public static async listAll(req: Request, res: Response) {
    try {
      const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } });
      const formatted = products.map((p) => ({
        ...p,
        specs: JSON.parse(p.specs || '[]'),
        storages: JSON.parse(p.storages || '{}'),
        colors: JSON.parse(p.colors || '[]'),
      }));
      return res.status(200).json({ success: true, count: formatted.length, data: formatted });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao listar produtos no painel.' });
    }
  }

  public static async create(req: Request, res: Response) {
    try {
      const {
        name, model, generation, condition, category, tag, tagBg,
        description, specs, storage, storages, colors, price, isActive,
      } = req.body;

      const product = await prisma.product.create({
        data: {
          name, model,
          generation: generation || 'Apple',
          condition: condition || 'Seminovo',
          category: category || 'padrao',
          tag: tag || '1 Ano Garantia',
          tagBg: tagBg || 'bg-neutral-900',
          description: description || '',
          specs: typeof specs === 'string' ? specs : JSON.stringify(specs || []),
          storage: storage || '128GB',
          storages: typeof storages === 'string' ? storages : JSON.stringify(storages || {}),
          colors: typeof colors === 'string' ? colors : JSON.stringify(colors || []),
          price: Number(price),
          isActive: isActive !== undefined ? Boolean(isActive) : true,
        },
      });

      return res.status(201).json({ success: true, message: 'Produto cadastrado com sucesso!', data: product });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao cadastrar produto.' });
    }
  }

  public static async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatePayload: any = {};
      if (data.name !== undefined) updatePayload.name = data.name;
      if (data.model !== undefined) updatePayload.model = data.model;
      if (data.generation !== undefined) updatePayload.generation = data.generation;
      if (data.condition !== undefined) updatePayload.condition = data.condition;
      if (data.category !== undefined) updatePayload.category = data.category;
      if (data.tag !== undefined) updatePayload.tag = data.tag;
      if (data.tagBg !== undefined) updatePayload.tagBg = data.tagBg;
      if (data.description !== undefined) updatePayload.description = data.description;
      if (data.price !== undefined) updatePayload.price = Number(data.price);
      if (data.storage !== undefined) updatePayload.storage = data.storage;
      if (data.isActive !== undefined) updatePayload.isActive = Boolean(data.isActive);

      if (data.specs !== undefined) {
        updatePayload.specs = typeof data.specs === 'string' ? data.specs : JSON.stringify(data.specs);
      }
      if (data.storages !== undefined) {
        updatePayload.storages = typeof data.storages === 'string' ? data.storages : JSON.stringify(data.storages);
      }
      if (data.colors !== undefined) {
        updatePayload.colors = typeof data.colors === 'string' ? data.colors : JSON.stringify(data.colors);
      }

      const updated = await prisma.product.update({ where: { id }, data: updatePayload });
      return res.status(200).json({ success: true, message: 'Produto atualizado!', data: updated });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao atualizar produto.' });
    }
  }

  public static async quickUpdatePrice(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { price, storages } = req.body;

      const updateData: any = {};
      if (price !== undefined) updateData.price = Number(price);
      if (storages !== undefined) {
        updateData.storages = typeof storages === 'string' ? storages : JSON.stringify(storages);
      }

      const product = await prisma.product.update({ where: { id }, data: updateData });
      return res.status(200).json({ success: true, message: 'Preço atualizado instantaneamente!', data: product });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao atualizar preço.' });
    }
  }

  public static async toggleActive(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await prisma.product.findUnique({ where: { id } });

      if (!product) {
        return res.status(404).json({ success: false, message: 'Produto não encontrado.' });
      }

      const updated = await prisma.product.update({
        where: { id },
        data: { isActive: !product.isActive },
      });

      return res.status(200).json({
        success: true,
        message: `Produto ${updated.isActive ? 'ativado na vitrine' : 'desativado da vitrine'} com sucesso!`,
        data: updated,
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao alternar status do produto.' });
    }
  }

  public static async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await prisma.product.delete({ where: { id } });
      return res.status(200).json({ success: true, message: 'Produto removido com sucesso!' });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao deletar produto.' });
    }
  }
}
