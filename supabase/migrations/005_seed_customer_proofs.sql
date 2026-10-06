-- Migration 005: Seed 265 customer reviews
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Camila Guimarães', 'Cataguases - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Retirei meu novo iPhone no centro de Cataguases! A sacola Mazala é um espetáculo à parte. O atendimento pelo WhatsApp foi super rápido e atencioso. 1 ano de garantia me deu toda a confiança!', '/clientes/cliente-cataguases-1.webp', true, true, '2026-09-24T15:30:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mariana Alvarenga', 'Cataguases - MG', 'iPhone 16 128GB Branco', 5, 'Experiência impecável no balcão da Mazala Phone! Atendimento de primeira, configuração rápida do aparelho e a tranquilidade da garantia de 1 ano. Recomendo demais!', '/clientes/cliente-cataguases-2.webp', true, true, '2026-09-18T11:15:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Gabriel Rezende', 'Cataguases - MG', 'iPhone 16 Pro Max 256GB Titânio Natural', 5, 'Peguei meu 16 Pro Max zero bala na praça! Preço à vista no Pix com desconto excelente, aparelho lacrado de procedência comprovada. Mazala Phone é referência absoluta em Cataguases e região.', '/clientes/cliente-cataguases-3.webp', true, true, '2026-09-12T17:45:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Débora Machado', 'São Paulo - SP', 'MacBook Pro 14" M3 Pro', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, true, '2025-09-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Eduardo Moreira', 'Viçosa - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, true, '2026-12-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Beatriz Rodrigues', 'Além Paraíba - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, true, '2026-06-09T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Aline Santos', 'Muriaé - MG', 'MacBook Pro 14" M3 Pro', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, true, '2026-09-04T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Juliana Ferreira', 'Belo Horizonte - MG', 'iPhone 16 128GB Preto', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, true, '2025-10-08T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fábio Ferreira', 'Além Paraíba - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, true, '2025-08-03T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fernanda Nunes', 'Belo Horizonte - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, true, '2026-02-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Fernandes', 'Muriaé - MG', 'MacBook Pro 14" M3 Pro', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, true, '2026-10-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Tatiane Gomes', 'Além Paraíba - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, true, '2025-06-01T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Juliana Martins', 'Leopoldina - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, true, '2026-04-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Gustavo Alves', 'Cataguases - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, true, '2026-04-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Juliana Machado', 'Rio de Janeiro - RJ', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, true, '2026-04-14T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mariana Rodrigues', 'Cataguases - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-07-23T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Gustavo Lopes', 'Astolfo Dutra - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-08-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Caio Souza', 'Astolfo Dutra - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-05-23T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Renato Almeida', 'Além Paraíba - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2025-03-15T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Tatiane Andrade', 'Cataguases - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-03-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Larissa Almeida', 'Além Paraíba - MG', 'iPad 10ª Geração 64GB Azul', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-02-09T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Eduardo Barbosa', 'Leopoldina - MG', 'MacBook Pro 14" M3 Pro', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-07-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Lucas Lima', 'Cataguases - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-04-15T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Leonardo Alves', 'Astolfo Dutra - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-10-09T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Letícia Ramos', 'Leopoldina - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-01-05T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Almeida', 'Juiz de Fora - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-03-08T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Nascimento', 'Muriaé - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-10-06T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bianca Nunes', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-11-22T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Henrique Vieira', 'Leopoldina - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-04-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Rodrigo Lima', 'Ubá - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-06-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Henrique Lopes', 'Rio de Janeiro - RJ', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-07-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Silva', 'Belo Horizonte - MG', 'MacBook Pro 14" M3 Pro', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-12-08T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mateus Lima', 'Ubá - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2025-01-23T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Rodrigo Martins', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-03-06T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Priscila Oliveira', 'Viçosa - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-06-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Arthur Teixeira', 'Cataguases - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-11-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Arthur Nunes', 'Cataguases - MG', 'iPhone 16 128GB Preto', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2025-04-19T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruno Souza', 'Cataguases - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-02-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bianca Moreira', 'Viçosa - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2025-05-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Felipe Santos', 'Leopoldina - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-02-23T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Felipe Carvalho', 'Leopoldina - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-04-20T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Rafaela Santana', 'Muriaé - MG', 'MacBook Pro 14" M3 Pro', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-11-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Diego Lopes', 'Viçosa - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-01-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Igor Ribeiro', 'Além Paraíba - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2025-04-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Cardoso', 'Cataguases - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-08-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Almeida', 'Rio de Janeiro - RJ', 'iPhone 16 128GB Preto', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-04-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vanessa Gomes', 'Muriaé - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-07-14T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Felipe Ramos', 'Viçosa - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-01-04T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fernanda Lima', 'Leopoldina - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-05-08T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Alexandre Lopes', 'Ubá - MG', 'MacBook Pro 14" M3 Pro', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-04-23T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Thiago Costa', 'Muriaé - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-05-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Daniel Lima', 'Rio de Janeiro - RJ', 'MacBook Pro 14" M3 Pro', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-06-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Henrique Costa', 'Leopoldina - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2025-11-06T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Caio Lopes', 'São Paulo - SP', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2025-01-11T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Igor Nunes', 'Ubá - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2025-01-14T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Gustavo Rodrigues', 'Miraí - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2025-08-01T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Letícia Andrade', 'Ubá - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2025-04-03T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Amanda Ferreira', 'Belo Horizonte - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-04-11T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Danilo Pereira', 'Cataguases - MG', 'iPhone 16 128GB Preto', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-12-16T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Igor Ribeiro', 'Cataguases - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2025-07-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Juliana Andrade', 'Miraí - MG', 'iPhone 16 128GB Preto', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-08-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Camila Santana', 'Muriaé - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-02-06T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fábio Moreira', 'Juiz de Fora - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-02-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Isabela Nunes', 'Juiz de Fora - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-05-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruna Dias', 'Muriaé - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-06-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Luana Alves', 'Miraí - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-04-20T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Sabrina Andrade', 'Cataguases - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2025-11-06T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bianca Rocha', 'Juiz de Fora - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2025-04-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mariana Oliveira', 'Ubá - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2025-06-14T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Sabrina Machado', 'Ubá - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-06-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mariana Lima', 'Juiz de Fora - MG', 'MacBook Pro 14" M3 Pro', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-01-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Caio Dias', 'Muriaé - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-11-05T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vitor Almeida', 'Cataguases - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-06-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Diego Freitas', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2025-11-03T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vinícius Ribeiro', 'Miraí - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-11-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Gabriel Santana', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2025-02-19T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Amanda Andrade', 'Juiz de Fora - MG', 'iPhone 16 128GB Preto', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-04-03T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Jéssica Almeida', 'Leopoldina - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2025-12-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Camila Barbosa', 'Muriaé - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-12-09T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vitor Pereira', 'Cataguases - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-07-05T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Lima', 'Ubá - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-04-15T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Sabrina Nunes', 'Além Paraíba - MG', 'MacBook Pro 14" M3 Pro', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-02-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Diego Nascimento', 'Leopoldina - MG', 'iPhone 16 128GB Preto', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-01-18T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fernanda Ferreira', 'Juiz de Fora - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-03-26T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Rodrigo Machado', 'Astolfo Dutra - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2025-01-22T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Isabela Almeida', 'Leopoldina - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-12-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Eduardo Lopes', 'Astolfo Dutra - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-02-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Igor Santos', 'Ubá - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-02-09T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Freitas', 'Ubá - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-10-04T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Arthur Fernandes', 'Belo Horizonte - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-05-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Henrique Nunes', 'Viçosa - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-07-04T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Beatriz Pereira', 'Cataguases - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-10-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Gabriel Dias', 'Astolfo Dutra - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-03-16T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Daniel Martins', 'Cataguases - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-09-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fernanda Cardoso', 'Muriaé - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2025-04-08T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fábio Alves', 'Cataguases - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2025-12-01T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Ferreira', 'Rio de Janeiro - RJ', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-11-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fernanda Ferreira', 'Ubá - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2025-09-23T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Amanda Almeida', 'São Paulo - SP', 'MacBook Pro 14" M3 Pro', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-01-09T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Danilo Lopes', 'Juiz de Fora - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2025-07-20T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Arthur Carvalho', 'Muriaé - MG', 'MacBook Pro 14" M3 Pro', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-03-20T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Diego Nunes', 'Astolfo Dutra - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2025-10-23T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Débora Barbosa', 'Cataguases - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-12-02T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Luana Santana', 'Além Paraíba - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-04-11T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Sabrina Vieira', 'São Paulo - SP', 'iPad 10ª Geração 64GB Azul', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2025-07-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Pedro Santana', 'Cataguases - MG', 'iPhone 16 128GB Preto', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-05-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Beatriz Rodrigues', 'São Paulo - SP', 'iPad 10ª Geração 64GB Azul', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-03-03T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Santos', 'Miraí - MG', 'iPhone 16 128GB Preto', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2025-06-20T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Luana Nunes', 'Rio de Janeiro - RJ', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-04-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Juliana Lima', 'Miraí - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-05-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vanessa Rocha', 'Juiz de Fora - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-02-22T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bianca Soares', 'Miraí - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-11-05T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Beatriz Nascimento', 'Ubá - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-12-04T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Isabela Barbosa', 'Muriaé - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-09-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Letícia Martins', 'Cataguases - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-07-11T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Henrique Moreira', 'Leopoldina - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2025-06-03T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Larissa Costa', 'Leopoldina - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-07-22T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Daniel Nunes', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2025-08-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mariana Nunes', 'Muriaé - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-02-13T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Souza', 'Belo Horizonte - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-01-11T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Carolina Oliveira', 'Cataguases - MG', 'iPhone 16 128GB Preto', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-06-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Camila Souza', 'Astolfo Dutra - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2025-04-16T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Caio Gomes', 'Astolfo Dutra - MG', 'MacBook Pro 14" M3 Pro', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-07-15T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Patrícia Soares', 'Muriaé - MG', 'MacBook Pro 14" M3 Pro', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-05-02T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Eduardo Santos', 'Cataguases - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-05-21T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Lima', 'Ubá - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-04-14T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Larissa Lopes', 'Miraí - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-08-13T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Pedro Teixeira', 'Cataguases - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-07-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Patrícia Lima', 'Rio de Janeiro - RJ', 'iPad 10ª Geração 64GB Azul', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-09-19T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Henrique Gomes', 'Cataguases - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-09-13T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vanessa Ferreira', 'Belo Horizonte - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-04-19T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Priscila Dias', 'Viçosa - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-01-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Gomes', 'Miraí - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-11-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Juliana Silva', 'Astolfo Dutra - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-11-02T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Amanda Freitas', 'Cataguases - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-09-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mateus Nunes', 'Cataguases - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-05-19T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fernanda Machado', 'Leopoldina - MG', 'MacBook Pro 14" M3 Pro', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-09-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Priscila Oliveira', 'Muriaé - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-01-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Diego Ferreira', 'Viçosa - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-08-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Renato Ramos', 'Muriaé - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-12-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Carolina Andrade', 'Leopoldina - MG', 'iPhone 16 128GB Preto', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-04-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Daniel Andrade', 'Além Paraíba - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-12-13T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vitor Rocha', 'Cataguases - MG', 'MacBook Pro 14" M3 Pro', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-02-02T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Natália Souza', 'Além Paraíba - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2025-10-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Patrícia Machado', 'Leopoldina - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-09-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Rodrigo Ribeiro', 'Cataguases - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-06-02T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Arthur Vieira', 'Rio de Janeiro - RJ', 'iPhone 15 128GB Branco Estelar', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-12-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Lucas Andrade', 'Cataguases - MG', 'MacBook Pro 14" M3 Pro', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2025-03-11T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Daniel Costa', 'São Paulo - SP', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2025-04-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Daniel Carvalho', 'Muriaé - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-02-01T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Lucas Freitas', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-10-04T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fábio Santana', 'Cataguases - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-01-20T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Amanda Santos', 'Miraí - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-07-19T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Rodrigo Lopes', 'Cataguases - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-10-05T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Carolina Fernandes', 'Muriaé - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2025-11-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Débora Nascimento', 'São Paulo - SP', 'iPad 10ª Geração 64GB Azul', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2025-08-14T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Amanda Santana', 'Cataguases - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-06-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Felipe Carvalho', 'Cataguases - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-04-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Henrique Nunes', 'Juiz de Fora - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-08-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Thiago Rocha', 'Ubá - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-04-14T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Priscila Ramos', 'Além Paraíba - MG', 'iPhone 16 128GB Preto', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-07-01T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Rocha', 'Muriaé - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-12-02T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Jéssica Machado', 'Juiz de Fora - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-06-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Carolina Martins', 'Miraí - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2025-01-14T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Danilo Soares', 'Além Paraíba - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-11-13T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Letícia Freitas', 'Além Paraíba - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2025-06-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Leonardo Rodrigues', 'Miraí - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2025-12-20T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruna Machado', 'Cataguases - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2025-10-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Camila Oliveira', 'Leopoldina - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-06-14T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Beatriz Fernandes', 'Rio de Janeiro - RJ', 'iPad Air 11" M2 128GB Estelar', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-10-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Larissa Cardoso', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-01-04T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Renato Machado', 'Muriaé - MG', 'MacBook Pro 14" M3 Pro', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-11-09T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mateus Ramos', 'Muriaé - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-10-20T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Aline Silva', 'Cataguases - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-11-02T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Carvalho', 'São Paulo - SP', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-01-22T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruno Vieira', 'Cataguases - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-04-04T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Natália Fernandes', 'Leopoldina - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-09-15T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Natália Alves', 'Astolfo Dutra - MG', 'iPhone 16 128GB Preto', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-04-06T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruno Freitas', 'Belo Horizonte - MG', 'iPhone 16 128GB Preto', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-09-18T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Machado', 'Cataguases - MG', 'MacBook Pro 14" M3 Pro', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2025-10-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mariana Lopes', 'Ubá - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2025-11-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Amanda Souza', 'Cataguases - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-03-16T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Camila Ferreira', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-06-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Rodrigo Rocha', 'São Paulo - SP', 'iPhone 16 128GB Preto', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-04-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Caio Rocha', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2025-04-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Pedro Ramos', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-03-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Tatiane Teixeira', 'São Paulo - SP', 'iPad 10ª Geração 64GB Azul', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-09-15T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mateus Nunes', 'Juiz de Fora - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2025-04-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vinícius Carvalho', 'São Paulo - SP', 'iPhone 16 128GB Preto', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-03-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Gabriel Machado', 'Miraí - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-08-04T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Santana', 'Leopoldina - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2025-05-03T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Lucas Teixeira', 'Viçosa - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-10-08T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fábio Soares', 'Muriaé - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-03-11T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mateus Martins', 'Rio de Janeiro - RJ', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2025-12-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Camila Santana', 'Miraí - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-05-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Pedro Carvalho', 'Belo Horizonte - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-11-16T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Juliana Almeida', 'Miraí - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-06-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Diego Dias', 'Juiz de Fora - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2025-04-08T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Machado', 'Belo Horizonte - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2025-12-02T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Luana Lopes', 'Cataguases - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2025-02-09T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Almeida', 'Cataguases - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-10-26T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Gustavo Oliveira', 'Rio de Janeiro - RJ', 'iPad Air 11" M2 128GB Estelar', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-10-05T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vitor Nunes', 'Leopoldina - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-04-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Amanda Dias', 'São Paulo - SP', 'MacBook Pro 14" M3 Pro', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2025-03-01T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vitor Fernandes', 'Ubá - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-09-07T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Isabela Andrade', 'Viçosa - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-05-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vinícius Barbosa', 'Muriaé - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-12-01T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Felipe Lopes', 'Muriaé - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-01-18T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Rafaela Dias', 'Muriaé - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-08-05T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Thiago Barbosa', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-05-05T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bianca Gomes', 'Rio de Janeiro - RJ', 'MacBook Pro 14" M3 Pro', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-01-18T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Pedro Freitas', 'Ubá - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2025-04-15T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruno Santos', 'Rio de Janeiro - RJ', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2025-10-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mateus Gomes', 'Muriaé - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-03-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Nascimento', 'Ubá - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-12-26T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Igor Alves', 'Ubá - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-05-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruna Machado', 'Cataguases - MG', 'iPhone 16 128GB Preto', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2025-09-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruno Soares', 'Miraí - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-09-21T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruno Carvalho', 'Miraí - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-09-04T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Patrícia Alves', 'Muriaé - MG', 'iPhone 16 128GB Preto', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-12-22T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Tatiane Barbosa', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2025-12-08T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vitor Oliveira', 'Juiz de Fora - MG', 'iPhone 16 128GB Preto', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-12-11T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Moreira', 'Juiz de Fora - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-05-18T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Alexandre Costa', 'Muriaé - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-02-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mateus Almeida', 'Astolfo Dutra - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-06-13T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vitor Machado', 'Cataguases - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-02-22T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Sabrina Santos', 'Muriaé - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-06-26T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Larissa Ramos', 'Cataguases - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-08-21T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Rafaela Moreira', 'Belo Horizonte - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2025-08-16T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Natália Silva', 'Juiz de Fora - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-05-20T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Beatriz Nunes', 'Viçosa - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-10-15T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Rafaela Freitas', 'Cataguases - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-02-09T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Marcella Rocha', 'Muriaé - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2025-01-16T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Igor Martins', 'São Paulo - SP', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2025-03-06T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Letícia Soares', 'Rio de Janeiro - RJ', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-02-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Thiago Pereira', 'Cataguases - MG', 'MacBook Air 13" M3 512GB Meia-noite', 5, 'Comprei meu MacBook para trabalhar e chegou voando em Juiz de Fora. Atendimento nota 1000 pelo WhatsApp!', null, true, false, '2026-12-23T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Leonardo Oliveira', 'Cataguases - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-04-01T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Diego Teixeira', 'Belo Horizonte - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2025-11-01T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Camila Souza', 'Muriaé - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-05-23T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mariana Rodrigues', 'Além Paraíba - MG', 'iPhone 17 Pro 256GB Seminovo (1 Ano de Garantia)', 5, 'Entrega rápida para Leopoldina. Chegou muito bem embalado na sacola preta de luxo. Recomendo de olhos fechados!', null, true, false, '2026-04-11T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Fernanda Rocha', 'Leopoldina - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-08-19T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Henrique Barbosa', 'Cataguases - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2025-08-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vinícius Teixeira', 'Miraí - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2025-08-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruno Machado', 'Ubá - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-11-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Thiago Oliveira', 'Leopoldina - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-01-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Juliana Cardoso', 'Astolfo Dutra - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2025-08-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Pedro Cardoso', 'Juiz de Fora - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2025-10-05T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Letícia Machado', 'Leopoldina - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Estava com receio de seminovo, mas a garantia de 1 ano da Mazala Phone me convenceu. Aparelho sem nenhum detalhe, bateria impecável!', null, true, false, '2026-01-16T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Alexandre Alves', 'Leopoldina - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-07-25T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Bruna Souza', 'Cataguases - MG', 'MacBook Pro 14" M3 Pro', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-10-20T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mateus Pereira', 'Juiz de Fora - MG', 'iPhone 16 128GB Preto', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2025-10-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Diego Pereira', 'Leopoldina - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2025-09-18T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Luana Machado', 'Juiz de Fora - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-03-15T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Débora Vieira', 'Cataguases - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-10-16T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Beatriz Ribeiro', 'Cataguases - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2025-07-17T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Larissa Carvalho', 'Astolfo Dutra - MG', 'iPhone 16 Pro Max 256GB Titânio Preto', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2026-05-27T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mariana Pereira', 'Além Paraíba - MG', 'iPhone 15 Pro 128GB Seminovo (1 Ano de Garantia)', 5, 'Fiz a troca do meu iPhone usado pelo 16 Pro no WhatsApp. Avaliação super justa no meu trade-in e atendimento ágil.', null, true, false, '2026-05-28T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mateus Cardoso', 'Juiz de Fora - MG', 'iPhone 16 Pro 128GB Titânio Natural', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-05-02T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Eduardo Alves', 'Além Paraíba - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-08-11T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Mariana Fernandes', 'Ubá - MG', 'iPhone 15 128GB Branco Estelar', 5, 'Atendimento humanizado no WhatsApp da Mazala. Mandaram fotos e vídeos do aparelho antes da entrega. Parabéns!', null, true, false, '2026-09-14T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Vinícius Ferreira', 'Ubá - MG', 'MacBook Pro 14" M3 Pro', 5, 'Melhor experiência de compra Apple de Minas! Retirei em Cataguases e a sacola preta com borda vermelha é linda demais. 1 ano de garantia nos seminovos dá uma paz enorme.', null, true, false, '2026-06-10T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Guilherme Soares', 'Cataguases - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'A sacola Mazala Phone é um luxo! Peguei meu iPhone e todo mundo elogiou. Garantia de 1 ano sem enrolação.', null, true, false, '2025-04-03T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Felipe Moreira', 'Muriaé - MG', 'iPhone 17 Pro Max 256GB Titânio Glacial', 5, 'Comprei o iPad para estudos na faculdade e veio perfeito, lacrado e com entrega rápida em Cataguases.', null, true, false, '2026-04-12T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Gustavo Soares', 'Leopoldina - MG', 'iPad 10ª Geração 64GB Azul', 5, 'Comprei pelo WhatsApp e me entregaram no mesmo dia em Cataguases. Atendimento impecável, aparelho 100% lacrado e com nota.', null, true, false, '2026-03-24T12:00:00Z')
on conflict do nothing;
insert into customer_reviews (id, customer_name, location, device_purchased, rating, comment, photo_url, consent_confirmed, is_featured, created_at)
values (gen_random_uuid(), 'Letícia Dias', 'Astolfo Dutra - MG', 'iPad Air 11" M2 128GB Estelar', 5, 'Preço à vista no Pix com 5% de desconto imbatível e parcelamento justo. Já indiquei para amigos de Ubá.', null, true, false, '2026-08-12T12:00:00Z')
on conflict do nothing;
