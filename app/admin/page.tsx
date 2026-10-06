import React from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import {
  DollarSign,
  ShoppingBag,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { label: "Faturamento no Mês", value: "R$ 184.950,00", icon: DollarSign, change: "+18.4% vs mês anterior" },
    { label: "Pedidos Entregues", value: "38 pedidos", icon: ShoppingBag, change: "Cataguases & Região" },
    { label: "Ticket Médio", value: "R$ 4.867,00", icon: TrendingUp, change: "Maioria no Pix (-5%)" },
    { label: "Seminovos com Garantia", value: "100%", icon: ShieldCheck, change: "12 meses certificados" },
  ];

  const recentOrders = [
    { id: "MZ-8104", client: "Camila Guimarães", city: "Cataguases - MG", device: "iPhone 15 128GB", total: 479900, status: "Entregue" },
    { id: "MZ-8105", client: "Mariana Alvarenga", city: "Cataguases - MG", device: "iPhone 16 128GB", total: 664900, status: "Entregue" },
    { id: "MZ-8106", client: "Gabriel Rezende", city: "Cataguases - MG", device: "iPhone 16 Pro Max", total: 829900, status: "Entregue" },
    { id: "MZ-8107", client: "Rodrigo Ferreira", city: "Leopoldina - MG", device: "iPhone 17 Pro Seminovo", total: 749900, status: "Pago (Em Separação)" },
    { id: "MZ-8108", client: "Lucas Souza", city: "Juiz de Fora - MG", device: "MacBook Air 13\" M5", total: 1519900, status: "Pendente Pix" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block">
          Visão Executiva
        </span>
        <h1 className="font-heading text-3xl text-white font-light uppercase tracking-wide">
          Dashboard Administrativo
        </h1>
        <p className="text-xs text-mazala-muted mt-1">
          Monitoramento de vendas, status de entrega e controle de estoque Mazala Phone.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="p-5 rounded-2xl bg-mazala-surface border border-mazala-border space-y-3">
              <div className="flex items-center justify-between text-mazala-gold">
                <span className="text-xs text-mazala-muted font-medium">{s.label}</span>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">{s.value}</div>
              <div className="text-[11px] text-emerald-400 font-medium">{s.change}</div>
            </div>
          );
        })}
      </div>

      {/* Quick Action Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-mazala-surface via-mazala-surface-2 to-mazala-surface border border-mazala-gold/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-white">Reajuste de Preços do Catálogo</h3>
          <p className="text-xs text-mazala-muted mt-0.5">
            Os preços da Apple sofreram alteração? Ajuste toda a tabela ou aplique percentuais em massa.
          </p>
        </div>
        <Link
          href="/admin/precos"
          className="px-5 py-2.5 rounded-xl bg-mazala-gold text-black font-semibold text-xs tracking-wider uppercase hover:bg-mazala-gold-soft transition-colors flex items-center gap-2 shrink-0"
        >
          Editar Preços em Massa <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Recent Orders Table */}
      <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-4">
        <div className="flex items-center justify-between border-b border-mazala-border pb-3">
          <h3 className="text-sm font-semibold text-white uppercase font-heading tracking-wide">
            Pedidos Recentes
          </h3>
          <Link href="/admin/pedidos" className="text-xs text-mazala-gold hover:underline">
            Ver Todos
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-mazala-border/60 text-mazala-muted">
                <th className="py-2.5">Pedido</th>
                <th>Cliente</th>
                <th>Cidade</th>
                <th>Aparelho</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mazala-border/40">
              {recentOrders.map((o) => (
                <tr key={o.id} className="hover:bg-mazala-surface-2/60 transition-colors">
                  <td className="py-3 font-mono text-mazala-gold font-bold">{o.id}</td>
                  <td className="text-white font-medium">{o.client}</td>
                  <td className="text-mazala-muted">{o.city}</td>
                  <td className="text-gray-300">{o.device}</td>
                  <td className="text-white font-semibold">{formatPrice(o.total)}</td>
                  <td>
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        o.status === "Entregue"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : o.status.includes("Pago")
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/30"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                      }`}
                    >
                      {o.status}
                    </span>
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
