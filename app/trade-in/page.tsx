"use client";

import React, { useState } from "react";
import { RotateCcw, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";

export default function TradeInPage() {
  const [model, setModel] = useState("iPhone 13");
  const [batteryHealth, setBatteryHealth] = useState("85%");
  const [condition, setCondition] = useState("Excelente (sem marcas)");
  const [storage, setStorage] = useState("128 GB");
  const [notes, setNotes] = useState("");

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá Mazala Phone! Gostaria de avaliar meu aparelho no Trade-in:\n- Modelo: ${model}\n- Capacidade: ${storage}\n- Saúde da bateria: ${batteryHealth}\n- Estado: ${condition}\n- Observações: ${notes || "Nenhuma"}`;
    const url = `https://wa.me/5532988547377?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="py-16 px-4 sm:px-6 max-w-3xl mx-auto w-full space-y-10">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block">
          Upgrade Inteligente
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl text-white font-light uppercase tracking-wide">
          Avaliar Meu Usado (Trade-in)
        </h1>
        <p className="text-sm text-mazala-muted max-w-lg mx-auto">
          Use seu iPhone ou iPad atual como entrada para conquistar seu novo aparelho com 1 ano de garantia.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-mazala-surface border border-mazala-border space-y-6">
        <div className="flex items-center gap-3 text-mazala-gold border-b border-mazala-border pb-4">
          <RotateCcw className="w-6 h-6" />
          <h2 className="text-base font-semibold text-white">Simulador de Trade-in Mazala</h2>
        </div>

        <form onSubmit={handleSimulate} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-mazala-muted block mb-1">Qual o modelo do seu aparelho?</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
              >
                <option value="iPhone 15 Pro Max">iPhone 15 Pro Max</option>
                <option value="iPhone 15 Pro">iPhone 15 Pro</option>
                <option value="iPhone 15">iPhone 15</option>
                <option value="iPhone 14 Pro Max">iPhone 14 Pro Max</option>
                <option value="iPhone 14 Pro">iPhone 14 Pro</option>
                <option value="iPhone 14">iPhone 14</option>
                <option value="iPhone 13 Pro Max">iPhone 13 Pro Max</option>
                <option value="iPhone 13">iPhone 13</option>
                <option value="iPhone 12 / 11">iPhone 12 / 11</option>
                <option value="Outro Modelo">Outro Modelo (Apple Watch / iPad)</option>
              </select>
            </div>

            <div>
              <label className="text-mazala-muted block mb-1">Capacidade de Armazenamento</label>
              <select
                value={storage}
                onChange={(e) => setStorage(e.target.value)}
                className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
              >
                <option value="64 GB">64 GB</option>
                <option value="128 GB">128 GB</option>
                <option value="256 GB">256 GB</option>
                <option value="512 GB ou mais">512 GB ou mais</option>
              </select>
            </div>

            <div>
              <label className="text-mazala-muted block mb-1">Saúde da Bateria (%)</label>
              <input
                type="text"
                value={batteryHealth}
                onChange={(e) => setBatteryHealth(e.target.value)}
                placeholder="Ex: 86%"
                className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
              />
            </div>

            <div>
              <label className="text-mazala-muted block mb-1">Condição Estética</label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
              >
                <option value="Excelente (sem marcas de uso)">Excelente (sem marcas de uso)</option>
                <option value="Bom (marcas leves de uso)">Bom (marcas leves de uso)</option>
                <option value="Regular (detalhes na tela ou carcaça)">Regular (detalhes)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-mazala-muted block mb-1">Possui caixa e acessórios originais?</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Tenho caixa e cabo original, tela nunca trocada."
              className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 py-3.5 px-6 rounded-xl bg-gradient-to-r from-mazala-gold to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-gold-glow flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> Enviar Avaliação Para o WhatsApp Mazala
          </button>
        </form>
      </div>
    </div>
  );
}
