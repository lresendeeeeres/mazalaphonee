"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/context/cart";
import { formatPrice, calculatePixPrice } from "@/lib/utils";
import { X, Trash2, Plus, Minus, Tag, ArrowRight, ShoppingBag } from "lucide-react";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotalCents,
    totalItems,
    coupon,
    discountCents,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const [couponInput, setCouponInput] = useState("");
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState("");

  if (!isOpen) return null;

  const totalCents = Math.max(0, subtotalCents - discountCents);
  const pixTotal = calculatePixPrice(totalCents);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError("");
    setCouponSuccess("");
    const res = applyCoupon(couponInput);
    if (res.success) {
      setCouponSuccess(res.message);
      setCouponInput("");
    } else {
      setCouponError(res.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-mazala-surface border-l border-mazala-border flex flex-col shadow-2xl">
          <div className="p-6 border-b border-mazala-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-mazala-gold" />
              <h2 className="text-base font-heading tracking-wider uppercase font-light text-white">
                Sua Sacola Mazala ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-mazala-muted hover:text-white rounded-full hover:bg-mazala-surface-2 transition-colors"
              aria-label="Fechar carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-mazala-surface-2 border border-mazala-border flex items-center justify-center text-mazala-gold mb-4">
                  <ShoppingBag className="w-8 h-8 opacity-70" />
                </div>
                <h3 className="text-base font-light text-white font-heading">
                  Sua sacola está vazia
                </h3>
                <p className="text-xs text-mazala-muted max-w-xs mt-1">
                  Explore os lançamentos Apple e seminovos com 1 ano de garantia.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-6 px-6 py-2.5 rounded-full bg-mazala-gold text-black text-xs font-semibold tracking-wider uppercase hover:bg-mazala-gold-soft transition-colors"
                >
                  Ver Produtos
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-mazala-surface-2 border border-mazala-border flex gap-4 items-center"
                >
                  <div className="relative w-16 h-16 flex-shrink-0 bg-black/40 rounded-lg p-1">
                    <Image
                      src={item.variant.image}
                      alt={item.product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-white truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-mazala-muted">
                      {item.variant.color} • {item.variant.storage} •{" "}
                      <span className="text-mazala-gold font-medium">
                        {item.variant.condition === "seminovo" ? "1 Ano Garantia" : "Lacrado"}
                      </span>
                    </p>
                    <p className="text-sm font-bold text-white mt-1">
                      {formatPrice(item.variant.price_cents * item.quantity)}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-mazala-red transition-colors p-1"
                      title="Remover"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="flex items-center border border-mazala-border rounded-lg bg-mazala-bg">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 text-gray-400 hover:text-white"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs px-2 font-medium text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 text-gray-400 hover:text-white"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-mazala-border bg-mazala-surface-2 space-y-4">
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Cupom (ex: MAZALA5)"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="flex-1 bg-mazala-bg border border-mazala-border rounded-lg px-3 py-2 text-xs text-white uppercase placeholder-gray-500 focus:outline-none focus:border-mazala-gold"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-mazala-surface border border-mazala-border hover:border-mazala-gold text-xs font-semibold text-white transition-colors"
                >
                  Aplicar
                </button>
              </form>
              {couponError && <p className="text-[10px] text-mazala-red">{couponError}</p>}
              {couponSuccess && <p className="text-[10px] text-emerald-400">{couponSuccess}</p>}
              {coupon && (
                <div className="flex items-center justify-between text-xs text-emerald-400 bg-emerald-950/30 p-2 rounded-lg border border-emerald-800/40">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" /> Cupom {coupon} ativo (-5%)
                  </span>
                  <button onClick={removeCoupon} className="text-gray-400 hover:text-white">
                    Remover
                  </button>
                </div>
              )}

              <div className="space-y-1.5 text-xs text-mazala-muted pt-2 border-t border-mazala-border/60">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-white">{formatPrice(subtotalCents)}</span>
                </div>
                {discountCents > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Desconto do Cupom:</span>
                    <span>-{formatPrice(discountCents)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-1">
                  <span>Total em até 12x:</span>
                  <span>{formatPrice(totalCents)}</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-400 font-semibold">
                  <span>À vista no Pix (-5%):</span>
                  <span>{formatPrice(pixTotal)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-mazala-red to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-red-glow flex items-center justify-center gap-2"
              >
                Finalizar Pedido <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
