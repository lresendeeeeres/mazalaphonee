"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { PRODUCTS } from "@/lib/data/catalog";
import { formatPrice, calculatePixPrice } from "@/lib/utils";
import { useCart } from "@/lib/context/cart";
import {
  ShieldCheck,
  Sparkles,
  Truck,
  MessageCircle,
  ShoppingBag,
  CheckCircle2,
  MapPin,
  ChevronRight,
} from "lucide-react";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [cep, setCep] = useState("");
  const [shippingCalculated, setShippingCalculated] = useState(false);
  const { addItem } = useCart();

  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];
  const pixPrice = calculatePixPrice(currentVariant.price_cents);
  const installmentValue = Math.round(currentVariant.price_cents / 12);

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (cep.length >= 8) {
      setShippingCalculated(true);
    }
  };

  const whatsappMessage = `Olá Mazala Phone! Tenho interesse no ${product.name} (${currentVariant.color}, ${currentVariant.storage}, ${currentVariant.condition === 'seminovo' ? 'Seminovo 1 Ano Garantia' : 'Lacrado'}). Poderia me atender?`;
  const whatsappUrl = `https://wa.me/5532988547377?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2 text-xs text-mazala-muted mb-8">
        <Link href="/" className="hover:text-white transition-colors">
          Início
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/produtos" className="hover:text-white transition-colors">
          Produtos
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-white font-medium">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 bg-mazala-surface rounded-3xl border border-mazala-border p-8 relative overflow-hidden flex flex-col items-center">
          <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
            {product.condition === "seminovo" ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-mazala-gold" /> 1 Ano de Garantia Mazala
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-white/5 text-gray-200 border border-white/10 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-mazala-gold" /> Lacrado Oficial Apple
              </span>
            )}
          </div>

          <div className="relative w-full max-w-[420px] aspect-square my-8">
            <Image
              src={currentVariant.image}
              alt={`${product.name} - ${currentVariant.color}`}
              fill
              className="object-contain drop-shadow-2xl transition-all duration-500"
              priority
            />
          </div>

          <div className="w-full text-center border-t border-mazala-border/60 pt-4 flex items-center justify-between text-xs text-mazala-muted">
            <span>Cor Selecionada: <strong className="text-white">{currentVariant.color}</strong></span>
            <span>SKU: <code className="text-mazala-gold">{currentVariant.sku}</code></span>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block mb-1">
              {product.categoryName}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl text-white font-light uppercase tracking-wide">
              {product.name}
            </h1>
            <p className="text-xs text-mazala-muted mt-2 leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <label className="text-xs font-semibold text-white tracking-wider uppercase block">
              1. Selecione a Cor:
            </label>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v, idx) => (
                <button
                  key={v.sku}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={`px-3 py-2 rounded-xl border text-xs font-medium flex items-center gap-2 transition-all ${
                    selectedVariantIndex === idx
                      ? "border-mazala-gold bg-mazala-gold/10 text-white"
                      : "border-mazala-border bg-mazala-surface text-gray-400 hover:text-white"
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                    style={{ backgroundColor: v.color_hex }}
                  />
                  <span>{v.color}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-white tracking-wider uppercase block">
              2. Capacidade / Memória:
            </label>
            <div className="flex flex-wrap gap-2">
              {product.variants.map((v, idx) => (
                <button
                  key={v.sku + "-storage"}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all ${
                    selectedVariantIndex === idx
                      ? "border-mazala-gold bg-mazala-gold/15 text-mazala-gold shadow-gold-glow"
                      : "border-mazala-border bg-mazala-surface text-gray-300 hover:text-white"
                  }`}
                >
                  {v.storage}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-3">
            <span className="text-xs text-mazala-muted block">Preço à vista no Pix (5% off):</span>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-white tracking-tight">
                {formatPrice(pixPrice)}
              </span>
              {currentVariant.compare_at_cents && (
                <span className="text-sm text-mazala-muted line-through">
                  {formatPrice(currentVariant.compare_at_cents)}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-300">
              ou em até 12x de <strong className="text-white">{formatPrice(installmentValue)}</strong> sem juros no cartão
            </p>

            <div className="pt-2 text-[11px] text-emerald-400 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" /> Estoque disponível ({currentVariant.stock} unidades)
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => addItem(product, currentVariant, 1)}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-mazala-red to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-red-glow flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" /> Adicionar à Sacola
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-2xl border border-emerald-500/40 hover:border-emerald-500 bg-emerald-950/20 text-emerald-400 hover:text-emerald-300 font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> Falar com Especialista no WhatsApp
            </a>
          </div>

          <div className="p-5 rounded-2xl bg-mazala-surface border border-mazala-border space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <Truck className="w-4 h-4 text-mazala-gold" /> Simulação de Frete
            </h4>
            <form onSubmit={handleCalculateShipping} className="flex gap-2">
              <input
                type="text"
                placeholder="Digite seu CEP (ex: 36770-000)"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                maxLength={9}
                className="flex-1 bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-mazala-gold"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-mazala-surface-2 border border-mazala-border hover:border-mazala-gold text-xs font-semibold text-white transition-colors"
              >
                Calcular
              </button>
            </form>

            {shippingCalculated && (
              <div className="space-y-2 pt-2 text-xs border-t border-mazala-border/60">
                <div className="flex items-center justify-between p-2 rounded-lg bg-mazala-bg border border-mazala-border">
                  <span className="flex items-center gap-2 text-white">
                    <MapPin className="w-3.5 h-3.5 text-mazala-red" /> Retirada na Loja (Cataguases)
                  </span>
                  <span className="text-emerald-400 font-bold">Grátis (Imediato)</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-mazala-bg border border-mazala-border">
                  <span className="text-white">Entrega Local Expressa (Cataguases)</span>
                  <span className="text-emerald-400 font-bold">Grátis</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-mazala-bg border border-mazala-border">
                  <span className="text-white">Sedex com Seguro (Brasil)</span>
                  <span className="text-gray-300 font-medium">R$ 48,90 (2 a 4 dias)</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
