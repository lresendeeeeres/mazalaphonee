"use client";

import React, { useState } from "react";
import { Settings, Save, CheckCircle2, Lock, ShieldCheck } from "lucide-react";

export default function AdminConfiguracoesPage() {
  const [storeName, setStoreName] = useState("Mazala Phone ®");
  const [whatsapp, setWhatsapp] = useState("5532988547377");
  const [instagram, setInstagram] = useState("@mazala_phone");
  const [pixDiscount, setPixDiscount] = useState("5");
  const [freeShippingThreshold, setFreeShippingThreshold] = useState("5000");
  const [localDeliveryFee, setLocalDeliveryFee] = useState("15");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block">
          Parâmetros do Sistema
        </span>
        <h1 className="font-heading text-3xl text-white font-light uppercase tracking-wide">
          Configurações da Loja
        </h1>
        <p className="text-xs text-mazala-muted mt-1">
          Ajuste as regras de pagamento, canais de contato e parâmetros locais de entrega em Cataguases.
        </p>
      </div>

      {saved && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-400 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>Configurações salvas e sincronizadas com sucesso!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-4">
          <h3 className="text-xs font-semibold text-white uppercase tracking-wider border-b border-mazala-border pb-3">
            Dados de Contato & Redes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="text-mazala-muted block mb-1">Nome da Loja</label>
              <input
                type="text"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
              />
            </div>
            <div>
              <label className="text-mazala-muted block mb-1">WhatsApp de Vendas (DDI + DDD + Número)</label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
              />
            </div>
            <div>
              <label className="text-mazala-muted block mb-1">Instagram Oficial</label>
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
              />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-4">
          <h3 className="text-xs font-semibold text-white uppercase tracking-wider border-b border-mazala-border pb-3">
            Regras de Pagamento & Frete
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="text-mazala-muted block mb-1">Desconto no Pix (%)</label>
              <input
                type="number"
                value={pixDiscount}
                onChange={(e) => setPixDiscount(e.target.value)}
                className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
              />
            </div>
            <div>
              <label className="text-mazala-muted block mb-1">Taxa de Entrega Local (R$)</label>
              <input
                type="number"
                value={localDeliveryFee}
                onChange={(e) => setLocalDeliveryFee(e.target.value)}
                className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
              />
            </div>
            <div>
              <label className="text-mazala-muted block mb-1">Frete Grátis a partir de (R$)</label>
              <input
                type="number"
                value={freeShippingThreshold}
                onChange={(e) => setFreeShippingThreshold(e.target.value)}
                className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-white focus:outline-none focus:border-mazala-gold"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-mazala-red to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-red-glow flex items-center gap-2"
        >
          <Save className="w-4 h-4" /> Salvar Configurações
        </button>
      </form>
    </div>
  );
}
