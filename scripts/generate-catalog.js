const fs = require('fs');
const path = require('path');

const catalog = [
  {
    id: "prod-iphone-18-pro",
    slug: "iphone-18-pro",
    name: "iPhone 18 Pro",
    category: "iphone",
    categoryName: "iPhones",
    short_description: "Titânio aeroespacial, chip A20 Pro e sistema Fusion de 48 MP.",
    description: "O ápice do poder Apple. Com tela Super Retina XDR de 6,3 polegadas ProMotion 120Hz e o novo chip A20 Pro.",
    release_year: 2026,
    featured: true,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IP18P-256-SIL", color: "Prateado", color_hex: "#E2E4E1", storage: "256 GB", price_cents: 1199900, stock: 12, condition: "lacrado", image: "/products/iphone-18-pro-silver.webp" },
      { sku: "IP18P-256-BLK", color: "Preto", color_hex: "#202022", storage: "256 GB", price_cents: 1199900, stock: 15, condition: "lacrado", image: "/products/iphone-18-pro-black.webp" },
      { sku: "IP18P-256-GLA", color: "Glacial", color_hex: "#D0DCE5", storage: "256 GB", price_cents: 1199900, stock: 8, condition: "lacrado", image: "/products/iphone-18-pro-glacial.webp" },
      { sku: "IP18P-256-BOR", color: "Bordô", color_hex: "#5C1D24", storage: "256 GB", price_cents: 1199900, stock: 10, condition: "lacrado", image: "/products/iphone-18-pro-bordeaux.webp" },
      { sku: "IP18P-512-BLK", color: "Preto", color_hex: "#202022", storage: "512 GB", price_cents: 1349900, stock: 9, condition: "lacrado", image: "/products/iphone-18-pro-black.webp" },
      { sku: "IP18P-1TB-BLK", color: "Preto", color_hex: "#202022", storage: "1 TB", price_cents: 1649900, stock: 5, condition: "lacrado", image: "/products/iphone-18-pro-black.webp" },
      { sku: "IP18P-2TB-BLK", color: "Preto", color_hex: "#202022", storage: "2 TB", price_cents: 2099900, stock: 3, condition: "lacrado", image: "/products/iphone-18-pro-black.webp" }
    ]
  },
  {
    id: "prod-iphone-18-pro-max",
    slug: "iphone-18-pro-max",
    name: "iPhone 18 Pro Max",
    category: "iphone",
    categoryName: "iPhones",
    short_description: "Tela de 6,9 polegadas, maior autonomia da história e zoom telefoto 5x.",
    description: "O maior e mais sofisticado iPhone de todos os tempos. Tela generosa com brilho impressionante e acabamento de joia.",
    release_year: 2026,
    featured: true,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IP18PM-256-SIL", color: "Prateado", color_hex: "#E2E4E1", storage: "256 GB", price_cents: 1299900, stock: 14, condition: "lacrado", image: "/products/iphone-18-pro-silver.webp" },
      { sku: "IP18PM-256-BLK", color: "Preto", color_hex: "#202022", storage: "256 GB", price_cents: 1299900, stock: 18, condition: "lacrado", image: "/products/iphone-18-pro-black.webp" },
      { sku: "IP18PM-256-GLA", color: "Glacial", color_hex: "#D0DCE5", storage: "256 GB", price_cents: 1299900, stock: 11, condition: "lacrado", image: "/products/iphone-18-pro-glacial.webp" },
      { sku: "IP18PM-256-BOR", color: "Bordô", color_hex: "#5C1D24", storage: "256 GB", price_cents: 1299900, stock: 12, condition: "lacrado", image: "/products/iphone-18-pro-bordeaux.webp" },
      { sku: "IP18PM-512-BLK", color: "Preto", color_hex: "#202022", storage: "512 GB", price_cents: 1449900, stock: 8, condition: "lacrado", image: "/products/iphone-18-pro-black.webp" },
      { sku: "IP18PM-1TB-BOR", color: "Bordô", color_hex: "#5C1D24", storage: "1 TB", price_cents: 1749900, stock: 6, condition: "lacrado", image: "/products/iphone-18-pro-bordeaux.webp" },
      { sku: "IP18PM-2TB-BLK", color: "Preto", color_hex: "#202022", storage: "2 TB", price_cents: 2199900, stock: 2, condition: "lacrado", image: "/products/iphone-18-pro-black.webp" }
    ]
  },
  {
    id: "prod-iphone-air",
    slug: "iphone-air",
    name: "iPhone Air",
    category: "iphone",
    categoryName: "iPhones",
    short_description: "Design ultrafino revolucionário, leveza extrema e a potência do chip A19 Pro.",
    description: "Redefinindo o design de smartphones. O iPhone mais fino e elegante já concebido pela Apple.",
    release_year: 2026,
    featured: true,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IPAIR-256-BLU", color: "Azul-céu", color_hex: "#A8C5DA", storage: "256 GB", price_cents: 1099900, stock: 10, condition: "lacrado", image: "/products/iphone-air-blue.webp" },
      { sku: "IPAIR-256-GLD", color: "Dourado-claro", color_hex: "#E8D5A3", storage: "256 GB", price_cents: 1099900, stock: 12, condition: "lacrado", image: "/products/iphone-air-gold.webp" },
      { sku: "IPAIR-256-WHT", color: "Branco-nuvem", color_hex: "#F5F5F7", storage: "256 GB", price_cents: 1099900, stock: 9, condition: "lacrado", image: "/products/iphone-air-white.webp" },
      { sku: "IPAIR-256-SPC", color: "Preto-espacial", color_hex: "#1E1E22", storage: "256 GB", price_cents: 1099900, stock: 14, condition: "lacrado", image: "/products/iphone-air-black.webp" }
    ]
  },
  {
    id: "prod-iphone-17",
    slug: "iphone-17",
    name: "iPhone 17",
    category: "iphone",
    categoryName: "iPhones",
    short_description: "Super Retina XDR ProMotion 120Hz e novas cores elegantes.",
    description: "A experiência definitiva para quem busca fluidez de tela, câmera dupla com gravação espacial e desempenho impecável.",
    release_year: 2025,
    featured: false,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IP17-256-BLU", color: "Azul-névoa", color_hex: "#8EA4B8", storage: "256 GB", price_cents: 829900, stock: 15, condition: "lacrado", image: "/products/iphone-17-blue.webp" },
      { sku: "IP17-256-LAV", color: "Lavanda", color_hex: "#C5B9CE", storage: "256 GB", price_cents: 829900, stock: 11, condition: "lacrado", image: "/products/iphone-17-lavender.webp" },
      { sku: "IP17-256-BLK", color: "Preto", color_hex: "#1C1C1E", storage: "256 GB", price_cents: 829900, stock: 20, condition: "lacrado", image: "/products/iphone-17-black.webp" },
      { sku: "IP17-256-WHT", color: "Branco", color_hex: "#F2F2F2", storage: "256 GB", price_cents: 829900, stock: 16, condition: "lacrado", image: "/products/iphone-17-white.webp" },
      { sku: "IP17-256-SAL", color: "Sálvia", color_hex: "#A3B5A2", storage: "256 GB", price_cents: 829900, stock: 8, condition: "lacrado", image: "/products/iphone-17-sage.webp" },
      { sku: "IP17-512-BLK", color: "Preto", color_hex: "#1C1C1E", storage: "512 GB", price_cents: 979900, stock: 6, condition: "lacrado", image: "/products/iphone-17-black.webp" }
    ]
  },
  {
    id: "prod-iphone-17e",
    slug: "iphone-17e",
    name: "iPhone 17e",
    category: "iphone",
    categoryName: "iPhones",
    short_description: "Compacto, rápido e com a melhor relação custo-benefício da linha Apple.",
    description: "Excelente performance com chip recente e toda a segurança do ecossistema iOS.",
    release_year: 2025,
    featured: false,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IP17E-256-BLK", color: "Preto", color_hex: "#1E1E22", storage: "256 GB", price_cents: 599900, stock: 18, condition: "lacrado", image: "/products/iphone-17e-black.webp" },
      { sku: "IP17E-256-WHT", color: "Branco", color_hex: "#F5F5F7", storage: "256 GB", price_cents: 599900, stock: 14, condition: "lacrado", image: "/products/iphone-17e-white.webp" }
    ]
  },
  {
    id: "prod-iphone-16",
    slug: "iphone-16",
    name: "iPhone 16",
    category: "iphone",
    categoryName: "iPhones",
    short_description: "Controle da Câmera, chip A18 ultraveloz e bateria de longa duração.",
    description: "Com o novo botão Controle da Câmera e suporte ao Apple Intelligence.",
    release_year: 2024,
    featured: false,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IP16-128-BLK", color: "Preto", color_hex: "#242528", storage: "128 GB", price_cents: 699900, stock: 22, condition: "lacrado", image: "/products/iphone-16-black.webp" },
      { sku: "IP16-128-WHT", color: "Branco", color_hex: "#F0F0F2", storage: "128 GB", price_cents: 699900, stock: 15, condition: "lacrado", image: "/products/iphone-16-white.webp" },
      { sku: "IP16-128-ULT", color: "Ultramarino", color_hex: "#4E6D99", storage: "128 GB", price_cents: 699900, stock: 12, condition: "lacrado", image: "/products/iphone-16-ultramarine.webp" }
    ]
  },
  {
    id: "prod-iphone-17-pro-seminovo",
    slug: "iphone-17-pro-seminovo",
    name: "iPhone 17 Pro — Seminovo Impecável",
    category: "iphone",
    categoryName: "iPhones",
    short_description: "Seminovo grau A+ com 1 ANO DE GARANTIA MAZALA. Bateria em alta saúde e procedência garantida.",
    description: "Oportunidade única. Aparelho inspecionado em 35 itens por técnicos especializados em Cataguases e selo exclusivo de 1 ANO DE GARANTIA.",
    release_year: 2025,
    featured: true,
    condition: "seminovo",
    warranty_months: 12,
    variants: [
      { sku: "IP17P-SEMI-128-TIT", color: "Titânio Natural", color_hex: "#8B8682", storage: "128 GB", price_cents: 689900, compare_at_cents: 1149900, stock: 8, condition: "seminovo", image: "/products/iphone-17-pro-natural.webp" },
      { sku: "IP17P-SEMI-256-BLK", color: "Titânio Preto", color_hex: "#2B2A29", storage: "256 GB", price_cents: 749900, compare_at_cents: 1249900, stock: 11, condition: "seminovo", image: "/products/iphone-17-pro-black.webp" }
    ]
  },
  {
    id: "prod-iphone-17-promax-seminovo",
    slug: "iphone-17-pro-max-seminovo",
    name: "iPhone 17 Pro Max — Seminovo Impecável",
    category: "iphone",
    categoryName: "iPhones",
    short_description: "Tela gigante, câmeras Pro e 1 ANO DE GARANTIA MAZALA. Acompanha sacola oficial Mazala.",
    description: "O mais desejado de Minas Gerais. Seminovo inspecionado com bateria de altíssima retenção e nota de garantia de 12 meses.",
    release_year: 2025,
    featured: true,
    condition: "seminovo",
    warranty_months: 12,
    variants: [
      { sku: "IP17PM-SEMI-256-TIT", color: "Titânio Natural", color_hex: "#8B8682", storage: "256 GB", price_cents: 829900, compare_at_cents: 1299900, stock: 9, condition: "seminovo", image: "/products/iphone-17-pro-natural.webp" },
      { sku: "IP17PM-SEMI-256-BLK", color: "Titânio Preto", color_hex: "#2B2A29", storage: "256 GB", price_cents: 829900, compare_at_cents: 1299900, stock: 7, condition: "seminovo", image: "/products/iphone-17-pro-black.webp" }
    ]
  },
  {
    id: "prod-ipad-a16-11",
    slug: "ipad-a16-11",
    name: "iPad (A16) 11\"",
    category: "ipad",
    categoryName: "iPads",
    short_description: "Tela Liquid Retina brilhante e desempenho rápido com chip A16.",
    description: "Versatilidade para estudar, trabalhar e criar. Suporte ao Apple Pencil.",
    release_year: 2025,
    featured: false,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IPAD-A16-BLU", color: "Azul", color_hex: "#7A98B3", storage: "128 GB", price_cents: 599900, stock: 10, condition: "lacrado", image: "/products/ipad-11-blue.webp" },
      { sku: "IPAD-A16-SLV", color: "Prateado", color_hex: "#E1E2E4", storage: "128 GB", price_cents: 599900, stock: 12, condition: "lacrado", image: "/products/ipad-11-silver.webp" }
    ]
  },
  {
    id: "prod-ipad-mini-a17-pro",
    slug: "ipad-mini-a17-pro",
    name: "iPad mini 8,3\" (A17 Pro)",
    category: "ipad",
    categoryName: "iPads",
    short_description: "Pequeno no tamanho, gigante no poder com A17 Pro.",
    description: "Cabe no bolso da jaqueta e roda os games mais pesados e apps profissionais com Apple Intelligence.",
    release_year: 2025,
    featured: false,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IPADMINI-GRY", color: "Cinza-espacial", color_hex: "#4D4E50", storage: "128 GB", price_cents: 799900, stock: 8, condition: "lacrado", image: "/products/ipad-mini-spacegray.webp" },
      { sku: "IPADMINI-STA", color: "Estelar", color_hex: "#E3DCB8", storage: "128 GB", price_cents: 799900, stock: 9, condition: "lacrado", image: "/products/ipad-mini-starlight.webp" }
    ]
  },
  {
    id: "prod-ipad-air-11-m4",
    slug: "ipad-air-11-m4",
    name: "iPad Air 11\" (M4)",
    category: "ipad",
    categoryName: "iPads",
    short_description: "Poder fenomenal do chip M4 em um design fino e portátil.",
    description: "Projetado para tarefas intensas de ilustração, edição de vídeo 4K e multitarefa fluida.",
    release_year: 2025,
    featured: false,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IPADAIR-11-BLU", color: "Azul", color_hex: "#879CB1", storage: "128 GB", price_cents: 999900, stock: 7, condition: "lacrado", image: "/products/ipad-air-blue.webp" },
      { sku: "IPADAIR-11-PUR", color: "Roxo", color_hex: "#C6B9D8", storage: "128 GB", price_cents: 999900, stock: 6, condition: "lacrado", image: "/products/ipad-air-purple.webp" }
    ]
  },
  {
    id: "prod-ipad-pro-11-m5",
    slug: "ipad-pro-11-m5",
    name: "iPad Pro 11\" (M5)",
    category: "ipad",
    categoryName: "iPads",
    short_description: "Tela Ultra Retina XDR Tandem OLED e chip M5 revolucionário.",
    description: "Pretos perfeitos com tecnologia OLED dupla e performance que supera computadores convencionais.",
    release_year: 2026,
    featured: true,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IPADPRO-11-256-BLK", color: "Preto-espacial", color_hex: "#232426", storage: "256 GB", price_cents: 1699900, stock: 5, condition: "lacrado", image: "/products/ipad-pro-spaceblack.webp" },
      { sku: "IPADPRO-11-512-BLK", color: "Preto-espacial", color_hex: "#232426", storage: "512 GB", price_cents: 1939900, stock: 4, condition: "lacrado", image: "/products/ipad-pro-spaceblack.webp" },
      { sku: "IPADPRO-11-1TB-BLK", color: "Preto-espacial", color_hex: "#232426", storage: "1 TB", price_cents: 2419900, stock: 2, condition: "lacrado", image: "/products/ipad-pro-spaceblack.webp" },
      { sku: "IPADPRO-11-2TB-BLK", color: "Preto-espacial", color_hex: "#232426", storage: "2 TB", price_cents: 3019900, stock: 2, condition: "lacrado", image: "/products/ipad-pro-spaceblack.webp" }
    ]
  },
  {
    id: "prod-ipad-pro-13-m5",
    slug: "ipad-pro-13-m5",
    name: "iPad Pro 13\" (M5)",
    category: "ipad",
    categoryName: "iPads",
    short_description: "Tela monumental de 13 polegadas Tandem OLED e chip M5.",
    description: "A tela definitiva para criadores de conteúdo, arquitetos e desenhistas profissionais.",
    release_year: 2026,
    featured: true,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "IPADPRO-13-256-BLK", color: "Preto-espacial", color_hex: "#232426", storage: "256 GB", price_cents: 1999900, stock: 4, condition: "lacrado", image: "/products/ipad-pro-spaceblack.webp" },
      { sku: "IPADPRO-13-512-BLK", color: "Preto-espacial", color_hex: "#232426", storage: "512 GB", price_cents: 2239900, stock: 4, condition: "lacrado", image: "/products/ipad-pro-spaceblack.webp" },
      { sku: "IPADPRO-13-1TB-BLK", color: "Preto-espacial", color_hex: "#232426", storage: "1 TB", price_cents: 2719900, stock: 2, condition: "lacrado", image: "/products/ipad-pro-spaceblack.webp" },
      { sku: "IPADPRO-13-2TB-BLK", color: "Preto-espacial", color_hex: "#232426", storage: "2 TB", price_cents: 3319900, stock: 1, condition: "lacrado", image: "/products/ipad-pro-spaceblack.webp" }
    ]
  },
  {
    id: "prod-macbook-neo-13",
    slug: "macbook-neo-13",
    name: "MacBook Neo 13\" (A18 Pro)",
    category: "macbook",
    categoryName: "MacBooks",
    short_description: "Design ultrafino, resfriamento silencioso e bateria para 18 horas.",
    description: "A nova categoria de Mac ultraleve. Elegante, veloz e pronto para qualquer jornada.",
    release_year: 2026,
    featured: true,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "MBNEO-13-256-SLV", color: "Prata", color_hex: "#DFE0E2", storage: "256 GB", price_cents: 849900, stock: 8, condition: "lacrado", image: "/products/macbook-neo-silver.webp" },
      { sku: "MBNEO-13-512-SLV", color: "Prata (Touch ID)", color_hex: "#DFE0E2", storage: "512 GB", price_cents: 969900, stock: 7, condition: "lacrado", image: "/products/macbook-neo-silver.webp" }
    ]
  },
  {
    id: "prod-macbook-air-13-m5",
    slug: "macbook-air-13-m5",
    name: "MacBook Air 13\" (M5)",
    category: "macbook",
    categoryName: "MacBooks",
    short_description: "O notebook favorito do mundo, agora turbinado com a arquitetura Apple M5.",
    description: "Autonomia de até 20 horas de bateria, tela Liquid Retina brilhante e construção sólida em alumínio unibody.",
    release_year: 2026,
    featured: true,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "MBA-13-M5-MID", color: "Meia-noite", color_hex: "#1E232B", storage: "16 GB / 512 GB", price_cents: 1599900, stock: 9, condition: "lacrado", image: "/products/macbook-air-midnight.webp" },
      { sku: "MBA-13-M5-STA", color: "Estelar", color_hex: "#E5DEC9", storage: "16 GB / 512 GB", price_cents: 1599900, stock: 6, condition: "lacrado", image: "/products/macbook-air-starlight.webp" }
    ]
  },
  {
    id: "prod-macbook-air-15-m5",
    slug: "macbook-air-15-m5",
    name: "MacBook Air 15\" (M5)",
    category: "macbook",
    categoryName: "MacBooks",
    short_description: "Tela imersiva de 15,3 polegadas e seis alto-falantes com chip M5.",
    description: "Multitarefa visual com muito mais espaço e design incrivelmente fino.",
    release_year: 2026,
    featured: false,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "MBA-15-M5-MID", color: "Meia-noite", color_hex: "#1E232B", storage: "16 GB / 512 GB", price_cents: 1799900, stock: 5, condition: "lacrado", image: "/products/macbook-air-midnight.webp" }
    ]
  },
  {
    id: "prod-macbook-pro-14-m5",
    slug: "macbook-pro-14-m5",
    name: "MacBook Pro 14\" (M5)",
    category: "macbook",
    categoryName: "MacBooks",
    short_description: "Tela Liquid Retina XDR de 120Hz e portas completas (HDMI, SDXC, MagSafe 3).",
    description: "A máquina definitiva para desenvolvimento e fluxo criativo pesado.",
    release_year: 2026,
    featured: true,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "MBP-14-M5-BLK", color: "Preto-espacial", color_hex: "#1C1D1F", storage: "512 GB", price_cents: 2499900, stock: 4, condition: "lacrado", image: "/products/macbook-pro-spaceblack.webp" },
      { sku: "MBP-14-M5PRO-BLK", color: "Preto-espacial (M5 Pro)", color_hex: "#1C1D1F", storage: "1 TB", price_cents: 3099900, stock: 3, condition: "lacrado", image: "/products/macbook-pro-spaceblack.webp" },
      { sku: "MBP-14-M5MAX-BLK", color: "Preto-espacial (M5 Max)", color_hex: "#1C1D1F", storage: "2 TB", price_cents: 4999900, stock: 2, condition: "lacrado", image: "/products/macbook-pro-spaceblack.webp" }
    ]
  },
  {
    id: "prod-macbook-pro-16-m5",
    slug: "macbook-pro-16-m5",
    name: "MacBook Pro 16\" (M5 Pro / Max)",
    category: "macbook",
    categoryName: "MacBooks",
    short_description: "Estação de trabalho móvel inigualável com tela Liquid Retina XDR de 16,2 polegadas.",
    description: "Renderize projetos 8K e rode modelos locais de IA sem esforço.",
    release_year: 2026,
    featured: true,
    condition: "lacrado",
    warranty_months: 12,
    variants: [
      { sku: "MBP-16-M5PRO-BLK", color: "Preto-espacial (M5 Pro)", color_hex: "#1C1D1F", storage: "1 TB", price_cents: 3799900, stock: 3, condition: "lacrado", image: "/products/macbook-pro-spaceblack.webp" },
      { sku: "MBP-16-M5MAX-BLK", color: "Preto-espacial (M5 Max)", color_hex: "#1C1D1F", storage: "2 TB", price_cents: 5399900, stock: 1, condition: "lacrado", image: "/products/macbook-pro-spaceblack.webp" }
    ]
  }
];

const catalogTs = `export interface ProductVariant {
  sku: string;
  color: string;
  color_hex: string;
  storage: string;
  price_cents: number;
  compare_at_cents?: number;
  stock: number;
  condition: 'lacrado' | 'seminovo';
  image: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: 'iphone' | 'ipad' | 'macbook';
  categoryName: string;
  short_description: string;
  description: string;
  release_year: number;
  featured: boolean;
  condition: 'lacrado' | 'seminovo';
  warranty_months: number;
  variants: ProductVariant[];
}

export const PRODUCTS: Product[] = ${JSON.stringify(catalog, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../lib/data/catalog.ts'), catalogTs, 'utf8');
console.log('Successfully written lib/data/catalog.ts');
