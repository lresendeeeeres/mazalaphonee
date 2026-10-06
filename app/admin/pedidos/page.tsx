"use client";

import React, { useState } from "react";
import { formatPrice } from "@/lib/utils";
import { ShoppingBag, Truck, CheckCircle2, Clock, Send, Eye } from "lucide-react";

export default function AdminPedidosPage() {
  const [orders, setOrders] = useState([
    {
      id: "MZ-8104",
      customer: "Camila Guimarães",
      email: "camila@gmail.com",
      phone: "(32) 98822-1144",
      device: "iPhone 15 128GB Branco Estelar",
      method: "Retirada na Loja (Cataguases)",
      total: 479900,
      payment: "Pix",
      status: "delivered",
      tracking: "Entregue no Balcão",
      date: "24/09/2026",
    },
    {
      id: "MZ-8105",
      customer: "Mariana Alvarenga",
      email: "mariana.alva@gmail.com",
      phone: "(32) 99133-7722",
      device: "iPhone 16 128GB Branco",
      method: "Entrega Expressa Cataguases",
      total: 664900,
      payment: "Cartão 12x",
      status: "delivered",
      tracking: "Motoboy Entregue",
      date: "18/09/2026",
    },
    {
      id: "MZ-8106",
      customer: "Gabriel Rezende",
      email: "gabriel.rezende@gmail.com",
      phone: "(32) 98844-5566",
      device: "iPhone 16 Pro Max 256GB Titânio",
      method: "Retirada na Loja (Cataguases)",
      total: 829900,
      payment: "Pix",
      status: "delivered",
      tracking: "Entregue na Praça",
      date: "12/09/2026",
    },
    {
      id: "MZ-8107",
      customer: "Rodrigo Ferreira",
      email: "rodrigo.f@gmail.com",
      phone: "(32) 99911-3322",
      device: "iPhone 17 Pro Seminovo (1 Ano Garantia)",
      method: "Sedex com Seguro (Leopoldina - MG)",
      total: 749900,
      payment: "Pix",
      status: "preparing",
      tracking: "OG123456789BR",
      date: "29/09/2026",
    },
  ]);

  const [activeTab, setActiveTab] = useState("all");

  const updateStatus = (id: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
    );
  };

  const updateTracking = (id: string, code: string) => {
    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, tracking: code } : o))
    );
  };

  const filtered = orders.filter((o) => {
    if (activeTab === "all") return true;
    return o.status === activeTab;
  });

  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block">
          Logística & Pedidos
        </span>
        <h1 className="font-heading text-3xl text-white font-light uppercase tracking-wide">
          Gerenciamento de Pedidos
        </h1>
        <p className="text-xs text-mazala-muted mt-1">
          Acompanhe entregas em Cataguases e despachos com rastreamento para todo o Brasil.
        </p>
      </div>

      <div className="flex gap-2 border-b border-mazala-border pb-3 text-xs">
        <button
          onClick={() => setActiveTab("all")}
          className={`px-3 py-1.5 rounded-lg ${activeTab === "all" ? "bg-white text-black font-semibold" : "text-gray-400 hover:text-white"}`}
        >
          Todos ({orders.length})
        </button>
        <button
          onClick={() => setActiveTab("preparing")}
          className={`px-3 py-1.5 rounded-lg ${activeTab === "preparing" ? "bg-white text-black font-semibold" : "text-gray-400 hover:text-white"}`}
        >
          Em Separação
        </button>
        <button
          onClick={() => setActiveTab("delivered")}
          className={`px-3 py-1.5 rounded-lg ${activeTab === "delivered" ? "bg-white text-black font-semibold" : "text-gray-400 hover:text-white"}`}
        >
          Entregues
        </button>
      </div>

      <div className="space-y-4">
        {filtered.map((order) => (
          <div
            key={order.id}
            className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-mono text-base font-bold text-mazala-gold">{order.id}</span>
                <span className="text-xs text-mazala-muted">Data: {order.date}</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-white/5 border border-white/10 text-white">
                  {order.payment}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white">{order.customer}</h3>
              <p className="text-xs text-mazala-muted">
                {order.device} • <strong className="text-white">{formatPrice(order.total)}</strong>
              </p>
              <p className="text-[11px] text-gray-400 flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-mazala-gold" /> {order.method}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto">
              <div className="space-y-1">
                <label className="text-[10px] text-mazala-muted uppercase tracking-wider block">
                  Rastreio / Observação:
                </label>
                <input
                  type="text"
                  value={order.tracking}
                  onChange={(e) => updateTracking(order.id, e.target.value)}
                  className="bg-mazala-bg border border-mazala-border rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-mazala-gold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-mazala-muted uppercase tracking-wider block">
                  Status:
                </label>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                  className="bg-mazala-bg border border-mazala-border rounded-lg px-2.5 py-1 text-xs text-white focus:outline-none focus:border-mazala-gold font-medium"
                >
                  <option value="pending">Pendente</option>
                  <option value="paid">Pago</option>
                  <option value="preparing">Em Separação</option>
                  <option value="shipped">Enviado</option>
                  <option value="delivered">Entregue</option>
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
