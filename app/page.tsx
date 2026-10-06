import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data/catalog";
import { ProductCard } from "@/components/store/ProductCard";
import { CustomerReviewsWall } from "@/components/store/CustomerReviewsWall";
import { BrandDivider } from "@/components/brand/BrandDivider";
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Truck,
  RotateCcw,
  Smartphone,
  Laptop,
  Tablet,
  HelpCircle,
} from "lucide-react";

export default function HomePage() {
  const featuredProducts = PRODUCTS.filter((p) => p.featured);
  const seminovos = PRODUCTS.filter((p) => p.condition === "seminovo");
  const heroProduct = PRODUCTS.find((p) => p.slug === "iphone-18-pro") || PRODUCTS[0];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-mazala-bg via-mazala-surface to-mazala-bg py-20 px-4 sm:px-6">
        {/* Luxury radial gold and red aura */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mazala-gold/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[350px] h-[350px] bg-mazala-red/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-mazala-gold/40 bg-mazala-surface-2/80 text-mazala-gold text-xs tracking-wider uppercase backdrop-blur-md shadow-gold-glow">
              <Sparkles className="w-3.5 h-3.5 text-mazala-red" />
              <span>Seu mundo Apple começa aqui</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-wide leading-[1.08] uppercase">
              O Padrão <br />
              <span className="text-white font-normal">Máximo</span> Em{" "}
              <span className="text-mazala-red font-medium">Apple</span>.
            </h1>

            <p className="text-sm sm:text-base text-mazala-muted max-w-xl font-light leading-relaxed">
              Boutique Apple exclusiva em Cataguases e região. Linha completa de iPhones, iPads e
              MacBooks novos e <strong className="text-white font-semibold">seminovos selecionados com 1 ano de garantia total</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/produtos"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-mazala-red to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-red-glow flex items-center gap-2"
              >
                Explorar Catálogo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/produtos?condicao=seminovo"
                className="px-8 py-4 rounded-full border border-mazala-gold/40 hover:border-mazala-gold text-mazala-gold-soft hover:text-white bg-mazala-surface/60 backdrop-blur-md font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-mazala-gold" />
                Seminovos (1 Ano Garantia)
              </Link>
            </div>

            {/* Quick badges */}
            <div className="pt-6 border-t border-mazala-border/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-mazala-muted">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-mazala-gold" />
                <span>12 meses de garantia</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Retirada em Cataguases</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-mazala-gold-soft" />
                <span>Trade-in no seu usado</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Spotlight */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[380px] aspect-[4/5] p-4">
              <div className="absolute inset-0 bg-radial-gradient from-mazala-gold/20 via-transparent to-transparent rounded-full filter blur-xl opacity-70" />
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={heroProduct.variants[1]?.image || heroProduct.variants[0].image}
                  alt="iPhone 18 Pro Mazala Phone"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating feature badge */}
              <div className="absolute bottom-4 left-0 right-0 mx-auto w-max bg-mazala-surface/90 border border-mazala-border backdrop-blur-md px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-2xl">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="text-left text-xs">
                  <span className="text-white font-semibold block">{heroProduct.name}</span>
                  <span className="text-[10px] text-mazala-gold">Disponível para retirada imediata</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES ROW */}
      <section className="py-12 bg-mazala-surface border-y border-mazala-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/produtos?categoria=iphone"
              className="p-5 rounded-2xl bg-mazala-bg border border-mazala-border hover:border-mazala-gold/40 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-mazala-surface-2 flex items-center justify-center text-mazala-gold group-hover:scale-110 transition-transform mb-3">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
                iPhones
              </h3>
              <span className="text-[11px] text-mazala-muted mt-1">Lacrados & Seminovos</span>
            </Link>

            <Link
              href="/produtos?categoria=ipad"
              className="p-5 rounded-2xl bg-mazala-bg border border-mazala-border hover:border-mazala-gold/40 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-mazala-surface-2 flex items-center justify-center text-mazala-gold group-hover:scale-110 transition-transform mb-3">
                <Tablet className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
                iPads
              </h3>
              <span className="text-[11px] text-mazala-muted mt-1">Pro, Air e mini</span>
            </Link>

            <Link
              href="/produtos?categoria=macbook"
              className="p-5 rounded-2xl bg-mazala-bg border border-mazala-border hover:border-mazala-gold/40 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-mazala-surface-2 flex items-center justify-center text-mazala-gold group-hover:scale-110 transition-transform mb-3">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-heading">
                MacBooks
              </h3>
              <span className="text-[11px] text-mazala-muted mt-1">Neo, Air e Pro M5</span>
            </Link>

            <Link
              href="/produtos?condicao=seminovo"
              className="p-5 rounded-2xl bg-mazala-bg border border-mazala-gold/30 hover:border-mazala-gold transition-all group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-mazala-gold group-hover:scale-110 transition-transform mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-semibold text-mazala-gold uppercase tracking-wider font-heading">
                Seminovos VIP
              </h3>
              <span className="text-[11px] text-gray-300 mt-1">1 Ano de Garantia</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. VITRINE DE OFERTAS & LANÇAMENTOS */}
      <section className="py-20 bg-mazala-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-apple-widest uppercase text-mazala-gold mb-1 block">
                Catálogo Exclusivo
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-white font-light tracking-wide uppercase">
                Lançamentos & Mais Desejados
              </h2>
            </div>
            <Link
              href="/produtos"
              className="text-xs uppercase font-semibold text-mazala-gold hover:text-white flex items-center gap-1.5 transition-colors"
            >
              Ver Todos os Modelos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. BANNER SEMINOVOS COM 1 ANO DE GARANTIA (DIFERENCIAL MAZALA) */}
      <section className="py-16 bg-gradient-to-r from-mazala-surface via-mazala-surface-2 to-mazala-surface border-y border-mazala-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mazala-gold/10 text-mazala-gold border border-mazala-gold/30 text-[11px] font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Diferencial Exclusivo Mazala Phone
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-light uppercase tracking-wide">
              1 Ano de Garantia em <span className="text-mazala-gold font-normal">Todos os Seminovos</span>
            </h2>
            <p className="text-xs sm:text-sm text-mazala-muted max-w-2xl leading-relaxed">
              Comprar seminovo na Mazala Phone tem o mesmo nível de tranquilidade de um aparelho lacrado.
              Cada unidade passa por teste rigoroso de mais de 35 etapas com técnicos especializados:
              saúde de bateria garantida, peças 100% originais e suporte VIP na nossa loja em Cataguases.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/produtos?condicao=seminovo"
                className="px-6 py-3 rounded-full bg-mazala-gold text-black font-semibold text-xs tracking-wider uppercase hover:bg-mazala-gold-soft transition-colors"
              >
                Ver Seminovos Disponíveis
              </Link>
              <Link
                href="/garantia"
                className="px-6 py-3 rounded-full border border-mazala-border text-white hover:border-mazala-gold text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                Como Funciona a Garantia
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="p-8 rounded-2xl bg-black/60 border border-mazala-gold/40 text-center space-y-3 shadow-gold-glow">
              <div className="w-16 h-16 mx-auto rounded-full bg-mazala-gold/10 border border-mazala-gold flex items-center justify-center text-mazala-gold">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white uppercase font-heading tracking-wide">
                Certificado 365 Dias
              </h4>
              <p className="text-xs text-mazala-muted">
                Documento de garantia emitido com número de série e rastreabilidade total.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL (+250 CLIENTES COM AS FOTOS REAIS DE CATAGUASES) */}
      <CustomerReviewsWall />

      {/* 6. POR QUE A MAZALA PHONE */}
      <section className="py-20 bg-mazala-surface border-t border-mazala-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-semibold tracking-apple-widest uppercase text-mazala-gold mb-2 block">
              Excelência & Confiança
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-light tracking-wide uppercase">
              Por que escolher a <span className="text-mazala-red font-normal">Mazala</span> Phone?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-mazala-bg border border-mazala-border hover:border-mazala-gold/40 transition-all flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-xl bg-mazala-surface-2 flex items-center justify-center text-mazala-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-white font-heading uppercase tracking-wide">
                1 Ano de Garantia Real
              </h3>
              <p className="text-xs text-mazala-muted leading-relaxed">
                Única loja da região a oferecer garantia completa de 12 meses nos seminovos. Você compra sem surpresas e com respaldo de verdade.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-mazala-bg border border-mazala-border hover:border-mazala-gold/40 transition-all flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-xl bg-mazala-surface-2 flex items-center justify-center text-mazala-gold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-white font-heading uppercase tracking-wide">
                Procedência 100% Verificada
              </h3>
              <p className="text-xs text-mazala-muted leading-relaxed">
                Todos os aparelhos passam por checagem de IMEI, bateria original, câmeras e integridade do iOS antes de irem para a sacola preta Mazala.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-mazala-bg border border-mazala-border hover:border-mazala-gold/40 transition-all flex flex-col space-y-3">
              <div className="w-12 h-12 rounded-xl bg-mazala-surface-2 flex items-center justify-center text-mazala-gold">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-white font-heading uppercase tracking-wide">
                Atendimento VIP & Retirada Local
              </h3>
              <p className="text-xs text-mazala-muted leading-relaxed">
                Retire em mãos no centro de Cataguases ou receba no conforto da sua casa com motoboy local expresso ou Sedex seguro para todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ FREQUENTES */}
      <section className="py-20 bg-mazala-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold tracking-apple-widest uppercase text-mazala-gold mb-2 block">
              Dúvidas Frequentes
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl text-white font-light tracking-wide uppercase">
              Perguntas e Respostas
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-mazala-gold" />
                Como funciona o 1 ano de garantia nos seminovos?
              </h3>
              <p className="text-xs text-mazala-muted leading-relaxed pl-6">
                Todos os seminovos vendidos pela Mazala Phone acompanham nosso termo exclusivo de 12 meses de garantia para qualquer defeito técnico ou de funcionamento, com atendimento direto em nossa loja física em Cataguases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-mazala-gold" />
                Posso retirar meu pedido pessoalmente em Cataguases?
              </h3>
              <p className="text-xs text-mazala-muted leading-relaxed pl-6">
                Sim! Você pode fazer o pedido pelo site ou WhatsApp e escolher a opção &quot;Retirar na loja (Cataguases)&quot;. Seu produto fica reservado e pronto com a sacola Mazala Phone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-mazala-gold" />
                Quais as formas de pagamento aceitas?
              </h3>
              <p className="text-xs text-mazala-muted leading-relaxed pl-6">
                Aceitamos Pix com 5% de desconto à vista imediato, e parcelamento em até 12x no cartão de crédito via Mercado Pago de forma 100% segura.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-2">
              <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-mazala-gold" />
                Vocês aceitam meu iPhone usado na troca (Trade-in)?
              </h3>
              <p className="text-xs text-mazala-muted leading-relaxed pl-6">
                Com certeza! Avaliamos seu iPhone usado pelo WhatsApp ou em mãos em Cataguases e usamos o valor como desconto imediato na compra do seu novo aparelho.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
