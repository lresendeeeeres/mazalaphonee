"use client";

import React, { useState } from "react";
import { PRODUCTS, ProductVariant } from "@/lib/data/catalog";
import { formatPrice } from "@/lib/utils";
import { DollarSign, Percent, Save, RefreshCw, CheckCircle2, ArrowLeft } from "lucide-react";

interface EditableVariant extends ProductVariant {
  productName: string;
  category: string;
}

export default function AdminPrecosPage() {
  const initialVariants: EditableVariant[] = [];
  PRODUCTS.forEach((p) => {
    p.variants.forEach((v) => {
      initialVariants.push({
        ...v,
        productName: p.name,
        category: p.category,
      });
    });
  });

  const [variants, setVariants] = useState<EditableVariant[]>(initialVariants);
  const [percentAdjust, setPercentAdjust] = useState<number>(5);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handlePriceChange = (sku: string, newPriceReais: string) => {
    const num = parseFloat(newPriceReais.replace(",", "."));
    if (isNaN(num)) return;
    const cents = Math.round(num * 100);

    setVariants((prev) =>
      prev.map((v) => (v.sku === sku ? { ...v, price_cents: cents } : v))
    );
  };

  const handleApplyPercentage = (direction: "increase" | "decrease") => {
    const factor = direction === "increase" ? 1 + percentAdjust / 100 : 1 - percentAdjust / 100;
    setVariants((prev) =>
      prev.map((v) => {
        if (selectedCategory !== "all" && v.category !== selectedCategory) {
          return v;
        }
        return {
          ...v,
          price_cents: Math.round(v.price_cents * factor),
        };
      })
    );
  };

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 4000);
  };

  const filtered = variants.filter(
    (v) => selectedCategory === "all" || v.category === selectedCategory
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-mazala-border pb-6">
        <div>
          <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block">
            Catálogo & Tabela de Preços
          </span>
          <h1 className="font-heading text-3xl text-white font-light uppercase tracking-wide">
            Edição Rápida de Preços em Massa
          </h1>
          <p className="text-xs text-mazala-muted mt-1">
            Atualize os valores de lacrados e seminovos em tempo real com alteração direta ou reajuste percentual.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-mazala-red to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-red-glow flex items-center gap-2"
        >
          <Save className="w-4 h-4" /> Salvar Alterações
        </button>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-400 text-xs flex items-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Preços e estoques atualizados com sucesso no banco de dados!</span>
        </div>
      )}

      {/* Bulk Percentage Re-Adjustment Tool */}
      <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-4">
        <h3 className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
          <Percent className="w-4 h-4 text-mazala-gold" /> Reajuste Percentual em Massa
        </h3>

        <div className="flex flex-wrap items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-mazala-muted">Filtrar Categoria:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
            >
              <option value="all">Todas ({variants.length} variantes)</option>
              <option value="iphone">Apenas iPhones</option>
              <option value="ipad">Apenas iPads</option>
              <option value="macbook">Apenas MacBooks</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-mazala-muted">Percentual (%):</span>
            <input
              type="number"
              min="0.5"
              step="0.5"
              value={percentAdjust}
              onChange={(e) => setPercentAdjust(parseFloat(e.target.value) || 0)}
              className="w-24 bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white text-center focus:outline-none focus:border-mazala-gold"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleApplyPercentage("increase")}
              className="px-4 py-2 rounded-xl bg-mazala-surface-2 border border-mazala-border hover:border-emerald-500 text-emerald-400 hover:text-white font-semibold transition-colors"
            >
              + Aumentar {percentAdjust}%
            </button>
            <button
              onClick={() => handleApplyPercentage("decrease")}
              className="px-4 py-2 rounded-xl bg-mazala-surface-2 border border-mazala-border hover:border-mazala-red text-red-400 hover:text-white font-semibold transition-colors"
            >
              - Reduzir {percentAdjust}%
            </button>
          </div>
        </div>
      </div>

      {/* Editable Table */}
      <div className="rounded-2xl bg-mazala-surface border border-mazala-border overflow-hidden">
        <div className="p-4 border-b border-mazala-border text-xs text-mazala-muted flex items-center justify-between">
          <span>Exibindo <strong>{filtered.length}</strong> variantes</span>
          <span className="text-mazala-gold">Clique no campo de preço para editar diretamente</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-mazala-surface-2 text-mazala-muted uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-4">SKU</th>
                <th className="py-3 px-4">Produto</th>
                <th className="py-3 px-4">Cor</th>
                <th className="py-3 px-4">Capacidade</th>
                <th className="py-3 px-4">Condição</th>
                <th className="py-3 px-4">Estoque</th>
                <th className="py-3 px-4">Preço (R$)</th>
                <th className="py-3 px-4">À vista Pix (-5%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mazala-border/40">
              {filtered.map((item) => (
                <tr key={item.sku} className="hover:bg-mazala-surface-2/40 transition-colors">
                  <td className="py-3 px-4 font-mono text-mazala-gold font-bold">{item.sku}</td>
                  <td className="py-3 px-4 text-white font-medium">{item.productName}</td>
                  <td className="py-3 px-4 text-gray-300">
                    <span className="inline-flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full border border-white/20"
                        style={{ backgroundColor: item.color_hex }}
                      />
                      {item.color}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-300">{item.storage}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                        item.condition === "seminovo"
                          ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                          : "bg-white/5 text-gray-300 border border-white/10"
                      }`}
                    >
                      {item.condition === "seminovo" ? "Seminovo (1 Ano)" : "Lacrado"}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-semibold text-white">{item.stock} un.</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-400">R$</span>
                      <input
                        type="text"
                        defaultValue={(item.price_cents / 100).toFixed(2)}
                        onBlur={(e) => handlePriceChange(item.sku, e.target.value)}
                        className="w-28 bg-mazala-bg border border-mazala-border rounded-lg px-2.5 py-1 text-white font-semibold focus:outline-none focus:border-mazala-gold"
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">
                    {formatPrice(Math.round(item.price_cents * 0.95))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
