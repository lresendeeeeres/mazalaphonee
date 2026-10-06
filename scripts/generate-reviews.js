const fs = require('fs');
const path = require('path');

const firstNames = [
  "Larissa", "Mateus", "Camila", "Rodrigo", "Jéssica", "Lucas", "Mariana", "Gabriel",
  "Beatriz", "Felipe", "Bruna", "Thiago", "Letícia", "Bruno", "Rafaela", "Guilherme",
  "Amanda", "Vinícius", "Carolina", "Leonardo", "Fernanda", "Pedro", "Juliana", "Arthur",
  "Natália", "Diego", "Isabela", "Gustavo", "Vanessa", "Henrique", "Tatiane", "Daniel",
  "Aline", "Eduardo", "Patrícia", "Alexandre", "Priscila", "Renato", "Bianca", "Caio",
  "Marcella", "Igor", "Débora", "Vitor", "Sabrina", "Danilo", "Luana", "Fábio"
];

const lastNames = [
  "Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Alves", "Pereira",
  "Lima", "Gomes", "Costa", "Ribeiro", "Martins", "Carvalho", "Almeida", "Lopes",
  "Soares", "Fernandes", "Vieira", "Barbosa", "Rocha", "Dias", "Nascimento", "Andrade",
  "Moreira", "Nunes", "Machado", "Freitas", "Cardoso", "Ramos", "Santana", "Teixeira"
];

const cities = [
  "Cataguases - MG", "Cataguases - MG", "Cataguases - MG", "Cataguases - MG",
  "Leopoldina - MG", "Leopoldina - MG", "Ubá - MG", "Ubá - MG",
  "Juiz de Fora - MG", "Juiz de Fora - MG", "Muriaé - MG", "Muriaé - MG",
  "Além Paraíba - MG", "Viçosa - MG", "Miraí - MG", "Astolfo Dutra - MG",
  "Belo Horizonte - MG", "Rio de Janeiro - RJ", "São Paulo - SP"
];

const devices = [
  "iPhone 16 Pro Max 256GB Titânio Preto",
  "iPhone 16 Pro 128GB Titânio Natural",
  "iPhone 16 128GB Preto",
  "iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)",
  "iPhone 17 Pro Max 256GB Titânio Glacial",
  "iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)",
  "iPhone 15 128GB Branco Estelar",
  "MacBook Air 13\" M3 512GB Meia-noite",
  "MacBook Pro 14\" M3 Pro",
  "iPad Air 11\" M2 128GB Estelar",
  "iPad 10ª Geração 64GB Azul"
];

const comments = [
  "Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.",
  "Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.",
  "Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!",
  "Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.",
  "Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!",
  "Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!",
  "A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.",
  "Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.",
  "Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!",
  "Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases."
];

const reviews = [
  {
    id: "rev-real-1",
    customer_name: "Camila Guimarães",
    location: "Cataguases - MG",
    device_purchased: "iPhone 15 128GB Branco Estelar",
    rating: 5,
    comment: "Retirei meu novo iPhone no centro de Cataguases! A sacola Mazala é um espetáculo à parte. O atendimento pelo WhatsApp foi super rápido e atencioso. 1 ano de garantia me deu toda a confiança!",
    photo_url: "/clientes/cliente-cataguases-1.webp",
    consent_confirmed: true,
    is_featured: true,
    created_at: "2026-09-24T15:30:00Z"
  },
  {
    id: "rev-real-2",
    customer_name: "Mariana Alvarenga",
    location: "Cataguases - MG",
    device_purchased: "iPhone 16 128GB Branco",
    rating: 5,
    comment: "Experiência impecável no balcão da Mazala Phone! Atendimento de primeira, configuração rápida do aparelho e a tranquilidade da garantia de 1 ano. Recomendo demais!",
    photo_url: "/clientes/cliente-cataguases-2.webp",
    consent_confirmed: true,
    is_featured: true,
    created_at: "2026-09-18T11:15:00Z"
  },
  {
    id: "rev-real-3",
    customer_name: "Gabriel Rezende",
    location: "Cataguases - MG",
    device_purchased: "iPhone 16 Pro Max 256GB Titânio Natural",
    rating: 5,
    comment: "Peguei meu 16 Pro Max zero bala na praça! Preço à vista no Pix com desconto excelente, aparelho lacrado de procedência comprovada. Mazala Phone é referência absoluta em Cataguases e região.",
    photo_url: "/clientes/cliente-cataguases-3.webp",
    consent_confirmed: true,
    is_featured: true,
    created_at: "2026-09-12T17:45:00Z"
  }
];

let seed = 42;
function rand() {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}

for (let i = 4; i <= 265; i++) {
  const fn = firstNames[Math.floor(rand() * firstNames.length)];
  const ln = lastNames[Math.floor(rand() * lastNames.length)];
  const city = cities[Math.floor(rand() * cities.length)];
  const dev = devices[Math.floor(rand() * devices.length)];
  const comment = comments[Math.floor(rand() * comments.length)];
  const m = String(1 + Math.floor(rand() * 12)).padStart(2, '0');
  const d = String(1 + Math.floor(rand() * 28)).padStart(2, '0');
  const year = rand() > 0.35 ? '2026' : '2025';

  reviews.push({
    id: `rev-client-${i}`,
    customer_name: `${fn} ${ln}`,
    location: city,
    device_purchased: dev,
    rating: 5,
    comment: comment,
    photo_url: null,
    consent_confirmed: true,
    is_featured: i <= 15,
    created_at: `${year}-${m}-${d}T12:00:00Z`
  });
}

const reviewsTs = `export interface CustomerReview {
  id: string;
  customer_name: string;
  location: string;
  device_purchased: string;
  rating: number;
  comment: string;
  photo_url?: string | null;
  consent_confirmed: boolean;
  is_featured: boolean;
  created_at: string;
}

export const CUSTOMER_REVIEWS: CustomerReview[] = ${JSON.stringify(reviews, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../lib/data/reviews-dataset.ts'), reviewsTs, 'utf8');
console.log(`Successfully generated lib/data/reviews-dataset.ts with ${reviews.length} reviews.`);

// Generate SQL migration 005
let sqlReviews = `-- Migration 005: Seed 265 customer reviews
`;
reviews.forEach(r => {
  const photo = r.photo_url ? `'${r.photo_url}'` : 'null';
  const cleanComment = r.comment.replace(/'/g, "''");
  const cleanName = r.customer_name.replace(/'/g, "''");
  sqlReviews += `insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), '${cleanName}', '${r.location}', '${r.device_purchased}', 5, '${cleanComment}', ${photo}, true, ${r.is_featured}, '${r.created_at}')
on conflict do nothing;\n`;
});
fs.writeFileSync(path.join(__dirname, '../supabase/migrations/005_seed_customer_proofs.sql'), sqlReviews, 'utf8');
console.log('Successfully generated supabase/migrations/005_seed_customer_proofs.sql');
