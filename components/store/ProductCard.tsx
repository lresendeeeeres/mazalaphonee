"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data/catalog";
import { formatPrice, calculatePixPrice } from "@/lib/utils";
import { ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/context/cart";

export function ProductCard({ product }: { product: Product }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const { addItem } = useCart();
  const currentVariant = product.variants[selectedVariantIndex] || product.variants[0];

  const pixPrice = calculatePixPrice(currentVariant.price_cents);
  const installmentValue = Math.round(currentVariant.price_cents / 12);

  return (
    <div className="group relative bg-mazala-surface rounded-2xl border border-mazala-border hover:border-mazala-gold/40 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-card-luxury">
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-mazala-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
        {product.condition === "seminovo" ? (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/10 text-amber-300 border border-amber-500/30 backdrop-blur-md">
            <ShieldCheck className="w-3 h-3 text-mazala-gold" /> 1 Ano de Garantia
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/5 text-gray-200 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-mazala-gold" /> Lacrado Oficial
          </span>
        )}
      </div>

      <Link
        href={`/produto/${product.slug}`}
        className="relative w-full aspect-[4/3] flex items-center justify-center p-6 bg-gradient-to-b from-black/40 to-mazala-surface overflow-hidden"
      >
        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
          <Image
            src={currentVariant.image}
            alt={`${product.name} - ${currentVariant.color}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Link>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 mb-3">
            {product.variants.slice(0, 5).map((v, idx) => (
              <button
                key={v.sku}
                onClick={() => setSelectedVariantIndex(idx)}
                className={`w-4 h-4 rounded-full border transition-all ${
                  selectedVariantIndex === idx
                    ? "ring-2 ring-mazala-gold scale-110 border-white"
                    : "border-white/20 hover:scale-105"
                }`}
                style={{ backgroundColor: v.color_hex }}
                title={`${v.color} - ${v.storage}`}
                aria-label={`Selecionar cor ${v.color}`}
              />
            ))}
            {product.variants.length > 5 && (
              <span className="text-[10px] text-mazala-muted ml-1">
                +{product.variants.length - 5}
              </span>
            )}
          </div>

          <Link href={`/produto/${product.slug}`} className="block group-hover:text-mazala-gold-soft transition-colors">
            <h3 className="font-heading text-lg font-light tracking-wide text-mazala-text">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-mazala-muted line-clamp-2 mt-1">
            {product.short_description}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-mazala-border/60">
          <div className="flex flex-col">
            <span className="text-[11px] text-mazala-muted">À vista no Pix com 5% off:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-white tracking-tight">
                {formatPrice(pixPrice)}
              </span>
              {currentVariant.compare_at_cents && (
                <span className="text-xs text-mazala-muted line-through">
                  {formatPrice(currentVariant.compare_at_cents)}
                </span>
              )}
            </div>
            <span className="text-[11px] text-gray-400 mt-0.5">
              ou em até 12x de <strong className="text-white">{formatPrice(installmentValue)}</strong> sem juros
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={() => addItem(product, currentVariant, 1)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-mazala-surface-2 to-mazala-surface hover:from-white/10 hover:to-white/5 border border-mazala-border hover:border-mazala-gold/50 text-xs font-semibold text-white tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
            >
              Comprar
            </button>
            <Link
              href={`/produto/${product.slug}`}
              className="p-2.5 rounded-xl border border-mazala-border hover:border-white/30 text-mazala-muted hover:text-white transition-colors"
              title="Ver detalhes"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
