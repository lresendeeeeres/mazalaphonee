"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/data/catalog";
import { ProductCard } from "@/components/store/ProductCard";
import { Search, Filter, ShieldCheck } from "lucide-react";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") || "all";
  const initialCondition = searchParams.get("condicao") || "all";

  const [category, setCategory] = useState(initialCategory);
  const [condition, setCondition] = useState(initialCondition);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchCategory = category === "all" || p.category === category;
      const matchCondition = condition === "all" || p.condition === condition;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.short_description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchCondition && matchSearch;
    }).sort((a, b) => {
      const minPriceA = a.variants[0]?.price_cents || 0;
      const minPriceB = b.variants[0]?.price_cents || 0;
      if (sortBy === "price-asc") return minPriceA - minPriceB;
      if (sortBy === "price-desc") return minPriceB - minPriceA;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [category, condition, search, sortBy]);

  return (
    <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <div className="mb-10 text-center sm:text-left border-b border-mazala-border pb-8">
        <span className="text-[11px] font-semibold tracking-apple-widest uppercase text-mazala-gold block mb-1">
          Catálogo Oficial Apple
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl text-white font-light tracking-wide uppercase">
          Todos os Produtos
        </h1>
        <p className="text-xs sm:text-sm text-mazala-muted mt-2 max-w-2xl">
          Escolha seu modelo preferido. Todos os seminovos contam com nosso exclusivo certificado de{" "}
          <strong className="text-white">1 ano de garantia</strong>.
        </p>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-mazala-surface p-4 rounded-2xl border border-mazala-border">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Buscar por iPhone 18 Pro, MacBook, iPad..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-mazala-bg border border-mazala-border rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-mazala-gold"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-mazala-gold"
          >
            <option value="all">Todas as Categorias</option>
            <option value="iphone">iPhones</option>
            <option value="ipad">iPads</option>
            <option value="macbook">MacBooks</option>
          </select>

          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            className="bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-mazala-gold"
          >
            <option value="all">Todas as Condições</option>
            <option value="lacrado">Lacrados Oficiais</option>
            <option value="seminovo">Seminovos (1 Ano Garantia)</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-mazala-gold"
          >
            <option value="featured">Destaques</option>
            <option value="price-asc">Menor Preço</option>
            <option value="price-desc">Maior Preço</option>
          </select>
        </div>
      </div>

      {/* Active Filter Chips */}
      {condition === "seminovo" && (
        <div className="mb-6 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 text-xs text-amber-300">
          <ShieldCheck className="w-4 h-4 text-mazala-gold" />
          <span>Exibindo seminovos selecionados com 1 ano de garantia total da Mazala Phone.</span>
        </div>
      )}

      {/* Products Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center bg-mazala-surface rounded-2xl border border-mazala-border">
          <h3 className="text-base font-light text-white font-heading">Nenhum produto encontrado</h3>
          <p className="text-xs text-mazala-muted mt-1">Tente ajustar seus filtros ou termo de busca.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
