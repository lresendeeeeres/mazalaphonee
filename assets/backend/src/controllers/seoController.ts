import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { SeoService } from '../services/seoService';

export class SeoController {
  public static async getProductSeo(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const product = await prisma.product.findUnique({ where: { id } });

      if (!product) {
        return res.status(404).json({ success: false, message: 'Produto não encontrado.' });
      }

      const colorsArr = JSON.parse(product.colors || '[]');
      const mainImg = colorsArr[0]?.img || 'assets/hero-hd-backdrop.jpg';

      const jsonLdProduct = SeoService.generateProductJsonLd({
        id: product.id,
        name: product.name,
        description: product.description || '',
        price: product.price,
        image: mainImg,
        category: product.category,
        condition: product.condition,
      });

      const jsonLdBreadcrumb = SeoService.generateBreadcrumbJsonLd(product.name);
      const jsonLdStore = SeoService.generateLocalStoreJsonLd();

      return res.status(200).json({
        success: true,
        data: {
          meta: {
            title: `${product.name} com 1 Ano de Garantia | MΛZΛLΛ PHONE`,
            description: product.description || `Compre seu ${product.name} em até 18x com 1 ano de garantia real na Mazala Phone em Cataguases e Região.`,
            openGraph: {
              type: 'product',
              title: `${product.name} | Mazala Phone`,
              description: product.description,
              image: mainImg,
              price: product.price,
              currency: 'BRL',
            },
          },
          structuredData: {
            product: jsonLdProduct,
            breadcrumb: jsonLdBreadcrumb,
            localBusiness: jsonLdStore,
          },
        },
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao gerar metadados de SEO.' });
    }
  }

  public static async getAllCatalogSeo(req: Request, res: Response) {
    try {
      const products = await prisma.product.findMany({
        where: { isActive: true },
        take: 30,
      });

      const schemas = products.map(p => {
        const colorsArr = JSON.parse(p.colors || '[]');
        const mainImg = colorsArr[0]?.img || 'assets/hero-hd-backdrop.jpg';
        return SeoService.generateProductJsonLd({
          id: p.id,
          name: p.name,
          description: p.description || '',
          price: p.price,
          image: mainImg,
          category: p.category,
          condition: p.condition,
        });
      });

      return res.status(200).json({
        success: true,
        data: {
          store: SeoService.generateLocalStoreJsonLd(),
          products: schemas,
        },
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Erro ao compilar SEO do catálogo.' });
    }
  }
}
