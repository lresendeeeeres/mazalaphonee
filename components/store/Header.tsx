"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { useCart } from "@/lib/context/cart";
import { ShoppingBag, Search, Menu, X, ShieldCheck } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "iPhones", href: "/produtos?categoria=iphone" },
    { label: "iPads", href: "/produtos?categoria=ipad" },
    { label: "MacBooks", href: "/produtos?categoria=macbook" },
    { label: "Seminovos (Garantia 1 Ano)", href: "/produtos?condicao=seminovo", highlight: true },
    { label: "Clientes Mazala (+250)", href: "/clientes" },
    { label: "Trade-in", href: "/trade-in" },
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-mazala-bg via-mazala-surface-2 to-mazala-bg border-b border-mazala-border text-[11px] py-1.5 px-4 text-center text-mazala-muted flex items-center justify-center gap-3">
        <span className="flex items-center gap-1 text-mazala-gold font-medium">
          <ShieldCheck className="w-3.5 h-3.5" /> 1 Ano de Garantia em todos os seminovos
        </span>
        <span className="hidden md:inline text-mazala-border">•</span>
        <span className="hidden md:inline text-gray-300">
          📍 Retirada em mãos em Cataguases - MG ou envio seguro Brasil
        </span>
      </div>

      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-mazala-bg/85 border-b border-mazala-border transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <Logo size="md" />

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs tracking-wider uppercase font-medium transition-colors duration-200 relative py-2 ${
                    link.highlight
                      ? "text-mazala-gold hover:text-mazala-gold-soft font-semibold"
                      : active
                      ? "text-white"
                      : "text-mazala-muted hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.highlight && (
                    <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-mazala-red rounded-full" />
                  )}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-mazala-red" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/produtos"
              className="p-2 text-mazala-muted hover:text-white transition-colors rounded-full hover:bg-mazala-surface"
              aria-label="Buscar produtos"
            >
              <Search className="w-5 h-5" />
            </Link>

            <button
              onClick={openCart}
              className="relative p-2.5 rounded-full text-white bg-mazala-surface hover:bg-mazala-surface-2 border border-mazala-border transition-all hover:border-mazala-gold/40 flex items-center gap-2"
              aria-label="Abrir sacola de compras"
            >
              <ShoppingBag className="w-5 h-5 text-mazala-gold" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-mazala-red text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-mazala-bg shadow-red-glow">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-mazala-muted hover:text-white rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-mazala-surface border-b border-mazala-border px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm tracking-wider uppercase font-medium py-2 ${
                  link.highlight ? "text-mazala-gold font-bold" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
