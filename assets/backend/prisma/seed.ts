import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando carga de dados com regras avançadas...');

  // 1. Admin
  const adminEmail = process.env.ADMIN_DEFAULT_EMAIL || 'mazalaphone@gmail.com';
  const adminRawPassword = process.env.ADMIN_DEFAULT_PASSWORD || 'leopopa046';
  const hashedPassword = await bcrypt.hash(adminRawPassword, 10);

  const admin = await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: { password: hashedPassword },
    create: {
      email: adminEmail,
      name: 'Mazala Phone Admin',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });
  console.log('✅ Administrador configurado: ' + admin.email);

  // 2. Produtos
  const p18ProMax = await prisma.product.create({
    data: {
      name: 'iPhone 18 Pro Max',
      model: '18 Pro Max',
      generation: '18 Series',
      condition: 'Lançamento',
      category: 'pro-max',
      tag: 'Titanium Fusion Max',
      tagBg: 'bg-gradient-to-r from-red-600 via-neutral-900 to-black',
      description: 'Estrutura em Titânio Fusion • Câmeras Quádruplas Tetraprisma 48MP • Chip A19 Pro Neural • 1 Ano Garantia',
      specs: JSON.stringify(['A19 Pro Bionic', 'Tetraprisma 48MP', 'Bateria 48h', 'Garantia 1 Ano']),
      storage: '256GB',
      price: 6999,
      storages: JSON.stringify({ '256GB': 6999, '512GB': 7899, '1TB': 8999 }),
      colors: JSON.stringify([
        { name: 'Titânio Preto Ônix', hex: '#1c1c1e', img: 'assets/iphone-18-showcase-black.jpg' },
        { name: 'Titânio Burgundy', hex: '#5b1d28', img: 'assets/iphone-18-burgundy.jpg' }
      ]),
    }
  });

  const p15Pro = await prisma.product.create({
    data: {
      name: 'iPhone 15 Pro Max',
      model: '15 Pro Max',
      generation: '15 Series',
      condition: 'Seminovo',
      category: 'pro-max',
      tag: 'Titânio Natural',
      tagBg: 'bg-stone-800',
      description: 'Estrutura em Titânio Aeroespacial • Zoom Óptico 5x • USB-C 3.0 • Chip A17 Pro • 1 Ano Garantia',
      specs: JSON.stringify(['Titânio Aeroespacial', 'Zoom Óptico 5x', 'USB-C 3.0', 'Garantia 1 Ano']),
      storage: '256GB',
      price: 4899,
      storages: JSON.stringify({ '256GB': 4899, '512GB': 5499 }),
      colors: JSON.stringify([
        { name: 'Titânio Natural', hex: '#9f9b93', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=940&hei=1112&fmt=png-alpha' }
      ]),
    }
  });

  const p13 = await prisma.product.create({
    data: {
      name: 'iPhone 13',
      model: '13',
      generation: '13 Series',
      condition: 'Seminovo',
      category: 'custo-beneficio',
      tag: 'Campeão de Vendas',
      tagBg: 'bg-emerald-700',
      description: 'Tela Super Retina XDR OLED • Modo Cinema em Vídeo • Bateria de Longa Duração • 1 Ano Garantia',
      specs: JSON.stringify(['Modo Cinema', 'Chip A15 Bionic', 'Super Retina XDR', 'Garantia 1 Ano']),
      storage: '128GB',
      price: 2199,
      storages: JSON.stringify({ '128GB': 2199, '256GB': 2599 }),
      colors: JSON.stringify([
        { name: 'Meia-noite', hex: '#232a31', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=940&hei=1112&fmt=png-alpha' }
      ]),
    }
  });

  // 3. Cadastrar Itens Únicos por Serial/IMEI
  const item1 = await prisma.inventoryItem.create({
    data: {
      productId: p15Pro.id,
      imei: '358921094812345',
      serialNumber: 'F2LZX890PK',
      batteryHealth: 96,
      batteryCycles: 142,
      color: 'Titânio Natural',
      storage: '256GB',
      salePrice: 4899,
      status: 'available',
    }
  });

  const item2 = await prisma.inventoryItem.create({
    data: {
      productId: p13.id,
      imei: '354890123987654',
      serialNumber: 'C7GYL123MN',
      batteryHealth: 89,
      batteryCycles: 280,
      color: 'Meia-noite',
      storage: '128GB',
      salePrice: 2199,
      status: 'available',
    }
  });
  console.log('✅ Estoque unitário por IMEI criado com sucesso.');

  // 4. Cadastrar Laudos Técnicos Periciais
  await prisma.inspectionReport.create({
    data: {
      inventoryItemId: item1.id,
      technicianName: 'Leonardo Mazala (Especialista Apple)',
      screenOriginal: true,
      trueToneActive: true,
      faceIdActive: true,
      camerasTested: true,
      audioMicrophoneOk: true,
      chargingWirelessOk: true,
      housingGrade: 'Grade A+ (Impecável)',
      batteryPercentage: 96,
      batteryOriginal: true,
      warrantyPeriodMonths: 12,
      notes: 'Aparelho aprovado em todos os 32 testes de bancada. Sem marcas de uso, 100% original e lacrado com selo de garantia de 1 ano Mazala Phone.',
    }
  });

  await prisma.inspectionReport.create({
    data: {
      inventoryItemId: item2.id,
      technicianName: 'Leonardo Mazala (Especialista Apple)',
      screenOriginal: true,
      trueToneActive: true,
      faceIdActive: true,
      camerasTested: true,
      audioMicrophoneOk: true,
      chargingWirelessOk: true,
      housingGrade: 'Grade A',
      batteryPercentage: 89,
      batteryOriginal: true,
      warrantyPeriodMonths: 12,
      notes: 'Testado rigorosamente. Bateria com excelente autonomia e componentes originais.',
    }
  });
  console.log('✅ Laudos técnicos periciais vinculados aos IMEIs.');

  // 5. Cadastrar Eventos de Analytics Iniciais
  const initialAnalytics = [
    { eventType: 'trade_in_simulation', targetName: 'iPhone 13 128GB' },
    { eventType: 'trade_in_simulation', targetName: 'iPhone 13 128GB' },
    { eventType: 'trade_in_simulation', targetName: 'iPhone 14 128GB' },
    { eventType: 'trade_in_simulation', targetName: 'iPhone 12 128GB' },
    { eventType: 'trade_in_simulation', targetName: 'iPhone 11 128GB' },
    { eventType: 'whatsapp_click', targetName: 'iPhone 18 Pro Max' },
    { eventType: 'whatsapp_click', targetName: 'iPhone 18 Pro Max' },
    { eventType: 'whatsapp_click', targetName: 'iPhone 15 Pro Max' },
    { eventType: 'whatsapp_click', targetName: 'Botão Flutuante VIP' },
  ];

  for (const a of initialAnalytics) {
    await prisma.analyticsEvent.create({ data: a });
  }
  console.log('✅ Eventos de Analytics registrados para métricas de conversão.');

  console.log('🎉 Seed completo com regras avançadas concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
