"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Product, ProductVariant } from "@/lib/data/catalog";

export interface CartItem {
  id: string; // sku
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeItem: (sku: string) => void;
  updateQuantity: (sku: string, delta: number) => void;
  clearCart: () => void;
  subtotalCents: number;
  totalItems: number;
  coupon: string | null;
  discountCents: number;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [discountCents, setDiscountCents] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("mazala_cart");
      if (saved) setItems(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("mazala_cart", JSON.stringify(items));
    } catch (e) {
      console.error(e);
    }
  }, [items]);

  const subtotalCents = items.reduce(
    (acc, item) => acc + item.variant.price_cents * item.quantity,
    0
  );
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const addItem = (product: Product, variant: ProductVariant, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === variant.sku);
      if (existing) {
        return prev.map((i) =>
          i.id === variant.sku
            ? { ...i, quantity: Math.min(i.quantity + quantity, variant.stock) }
            : i
        );
      }
      return [...prev, { id: variant.sku, product, variant, quantity }];
    });
    setIsOpen(true);
  };

  const removeItem = (sku: string) => {
    setItems((prev) => prev.filter((i) => i.id !== sku));
  };

  const updateQuantity = (sku: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.id === sku) {
            const nextQty = i.quantity + delta;
            return nextQty > 0 ? { ...i, quantity: Math.min(nextQty, i.variant.stock) } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
    setCoupon(null);
    setDiscountCents(0);
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "MAZALA5" || clean === "CATAGUASES") {
      setCoupon(clean);
      setDiscountCents(Math.round(subtotalCents * 0.05));
      return { success: true, message: "Cupom de 5% de desconto aplicado com sucesso!" };
    }
    return { success: false, message: "Cupom inválido ou expirado." };
  };

  const removeCoupon = () => {
    setCoupon(null);
    setDiscountCents(0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        subtotalCents,
        totalItems,
        coupon,
        discountCents,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
