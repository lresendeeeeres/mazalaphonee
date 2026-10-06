import { Router } from 'express';
import { ProductController } from '../controllers/productController';
import { TradeInController } from '../controllers/tradeInController';
import { LeadController } from '../controllers/leadController';
import { AdminAuthController } from '../controllers/adminAuthController';
import { AdminProductController } from '../controllers/adminProductController';
import { AdminTradeInController } from '../controllers/adminTradeInController';
import { AdminLeadController } from '../controllers/adminLeadController';
import { AdminDashboardController } from '../controllers/adminDashboardController';
import { ReviewController } from '../controllers/reviewController';
import { SeoController } from '../controllers/seoController';
import { InventoryController } from '../controllers/inventoryController';
import { InspectionController } from '../controllers/inspectionController';
import { AnalyticsController } from '../controllers/analyticsController';
import { authenticateAdmin } from '../middlewares/authMiddleware';

const router = Router();

// ==========================================
// 1. ROTAS PÚBLICAS & SEO
// ==========================================
router.get('/products', ProductController.listPublic);
router.get('/products/:id', ProductController.getById);

// Metadados SEO Dinâmicos & JSON-LD
router.get('/seo/product/:id', SeoController.getProductSeo);
router.get('/seo/catalog', SeoController.getAllCatalogSeo);

// Simulador de Troca (Trade-in)
router.get('/trade-in/models', TradeInController.listEvaluations);
router.post('/trade-in/calculate', TradeInController.calculate);

// Conversão e Leads WhatsApp
router.post('/leads/whatsapp', LeadController.createWhatsAppLead);

// Rastreamento de Analytics Público
router.post('/analytics/track', AnalyticsController.trackEvent);

// Consulta Pública de Autenticidade por IMEI / Laudo
router.get('/inventory/verify/:imei', InventoryController.verifyByImei);
router.get('/inspection/report/:inventoryItemId', InspectionController.getReportByInventoryId);

// Avaliações e Depoimentos
router.get('/reviews', ReviewController.listApproved);
router.post('/reviews', ReviewController.create);

// ==========================================
// 2. AUTENTICAÇÃO DO LOJISTA
// ==========================================
router.post('/admin/auth', AdminAuthController.login);
router.post('/admin/auth/login', AdminAuthController.login);
router.get('/admin/auth/me', authenticateAdmin as any, AdminAuthController.verifyToken);

// ==========================================
// 3. ROTAS ADMINISTRATIVAS PROTEGIDAS (PAINEL LOJISTA)
// ==========================================
// Dashboard Geral e Analytics Avançado de Conversão
router.get('/admin/dashboard/stats', authenticateAdmin as any, AdminDashboardController.getStats);
router.get('/admin/analytics/conversion', authenticateAdmin as any, AnalyticsController.getConversionReport);

// Gestão de Produtos e Preços Rápidos
router.get('/admin/products', authenticateAdmin as any, AdminProductController.listAll);
router.post('/admin/products', authenticateAdmin as any, AdminProductController.create);
router.put('/admin/products/:id', authenticateAdmin as any, AdminProductController.update);
router.patch('/admin/products/:id/price', authenticateAdmin as any, AdminProductController.quickUpdatePrice);
router.patch('/admin/products/:id/toggle', authenticateAdmin as any, AdminProductController.toggleActive);
router.delete('/admin/products/:id', authenticateAdmin as any, AdminProductController.delete);

// Controle de Estoque Unitário por Serial / IMEI
router.get('/admin/inventory', authenticateAdmin as any, InventoryController.listAll);
router.post('/admin/inventory', authenticateAdmin as any, InventoryController.create);
router.patch('/admin/inventory/:id/status', authenticateAdmin as any, InventoryController.updateStatus);
router.delete('/admin/inventory/:id', authenticateAdmin as any, InventoryController.delete);

// Emissão e Gestão de Laudo Técnico do Seminovo
router.post('/admin/inspection/report', authenticateAdmin as any, InspectionController.saveReport);

// Gestão de Avaliações de Trade-in
router.get('/admin/trade-in', authenticateAdmin as any, AdminTradeInController.list);
router.post('/admin/trade-in', authenticateAdmin as any, AdminTradeInController.create);
router.put('/admin/trade-in/:id', authenticateAdmin as any, AdminTradeInController.update);
router.delete('/admin/trade-in/:id', authenticateAdmin as any, AdminTradeInController.delete);

// Gestão de Leads
router.get('/admin/leads', authenticateAdmin as any, AdminLeadController.list);
router.patch('/admin/leads/:id/status', authenticateAdmin as any, AdminLeadController.updateStatus);

// Moderação de Depoimentos
router.get('/admin/reviews', authenticateAdmin as any, ReviewController.listAllAdmin);
router.patch('/admin/reviews/:id/status', authenticateAdmin as any, ReviewController.updateStatus);

export default router;
