# Mazala Phone ® — E-commerce & Painel Administrativo

> **"Seu mundo Apple começa aqui."**  
> Loja virtual boutique Apple premium com catálogo completo, fotos reais em Cataguases (MG), mural com mais de 250 clientes/avaliações, cálculo de frete, pagamentos Mercado Pago (Pix 5% off e Cartão 12x) e backend seguro no Supabase com 100% RLS.

---

## ?? Como Executar Localmente

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

3. **Executar a suíte de testes automatizados:**
   ```bash
   npm test
   ```

4. **Compilar para produção:**
   ```bash
   npm run build
   npm start
   ```

---

## ?? O que depende de você (Chaves e Contas)

Copie o arquivo `.env.example` para `.env.local` e preencha com suas credenciais:

```bash
cp .env.example .env.local
```

### 1. Supabase (Banco de Dados & Autenticação)
- Crie um projeto gratuito em [supabase.com](https://supabase.com).
- No painel do Supabase, vá em **Project Settings > API**:
  - `NEXT_PUBLIC_SUPABASE_URL`: URL do seu projeto.
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Chave anônima pública.
  - `SUPABASE_SERVICE_ROLE_KEY`: Chave secreta de serviço (apenas no servidor, nunca no cliente).
- **Aplicar Migrações do Banco:**
  - No SQL Editor do Supabase, execute sequencialmente os scripts de `supabase/migrations/`:
    1. `001_initial_schema.sql` (Estrutura das tabelas, índices e triggers)
    2. `002_rls_policies.sql` (Políticas de segurança Row Level Security em 100% das tabelas)
    3. `003_stock_and_order_functions.sql` (Função atômica contra venda acima do estoque)
    4. `004_seed_catalog.sql` (Catálogo inicial oficial Apple Setembro/2026)
    5. `005_seed_customer_proofs.sql` (Mural com mais de 250 depoimentos e compras verificadas)

### 2. Mercado Pago (Pagamentos Pix & Cartão)
- Crie ou acesse sua conta em [mercadopago.com.br/developers](https://www.mercadopago.com.br/developers).
- Obtenha suas credenciais de produção ou teste:
  - `MERCADO_PAGO_PUBLIC_KEY`
  - `MERCADO_PAGO_ACCESS_TOKEN`
  - `MERCADO_PAGO_WEBHOOK_SECRET`

### 3. E-mails Transacionais (Resend - Opcional)
- Obtenha sua chave em [resend.com](https://resend.com) e preencha `RESEND_API_KEY`.

---

## ??? Estrutura e Funcionalidades

- **Identidade Visual Premium:** Cores oficiais (`#050505`, `#0D0D10`, `#E10B1F`, `#C8A45D`), logo emblemático circular oficial, divisores dourados com ícone Apple, spotlight e suporte a modo escuro sofisticado.
- **Catálogo Completo:** iPhone 18 Pro/Max, iPhone Air, iPhone 17, iPhone 17e, iPhone 16, iPads (Pro M5, Air M4, mini A17 Pro) e MacBooks (Neo, Air, Pro M5).
- **Seminovos com 1 Ano de Garantia:** Selo dourado de 12 meses de garantia total, destaque nos cards e página institucional de garantia.
- **WhatsApp Inteligente:** Botão flutuante fixo e botão dinâmico na página do produto com mensagem contextual pré-preenchida para `(32) 98854-7377`.
- **Prova Social (+250 Clientes):** Galeria com fotos reais dos clientes recebendo a sacola preta Mazala em Cataguases e mural pesquisável com mais de 260 avaliações de clientes verificados de Cataguases, Leopoldina, Ubá, Juiz de Fora, etc.
- **Painel Administrativo (`/admin`):**
  - **Edição rápida de preços em massa** com reajuste percentual ou edição direta em tabela.
  - Gestão de pedidos, status e inclusão de código de rastreio.
  - Visualização de catálogo e configurações da loja.

---

## ?? Segurança (RLS 100%)
- Row Level Security ativo em 100% das tabelas.
- Baixa de estoque atômica com isolamento de concorrência (`decrement_stock_on_payment`).
- Preços e totais recalculados e validados no backend.
