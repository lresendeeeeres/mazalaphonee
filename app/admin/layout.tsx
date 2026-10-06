import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import {
  LayoutDashboard,
  DollarSign,
  Package,
  ShoppingBag,
  Settings,
  ShieldAlert,
  ArrowLeft,
  Users,
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-mazala-bg text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-mazala-surface border-r border-mazala-border p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-8">
          <div>
            <Logo size="sm" />
            <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-mazala-red/20 text-mazala-red border border-mazala-red/40">
              <ShieldAlert className="w-3 h-3" /> Painel Restrito
            </div>
          </div>

          <nav className="space-y-1.5 text-xs">
            <Link
              href="/admin"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-mazala-surface-2 text-gray-300 hover:text-white transition-colors"
            >
              <LayoutDashboard className="w-4 h-4 text-mazala-gold" />
              <span>Dashboard Geral</span>
            </Link>

            <Link
              href="/admin/precos"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-mazala-gold/10 text-mazala-gold font-medium border border-mazala-gold/30 hover:bg-mazala-gold/20 transition-colors"
            >
              <DollarSign className="w-4 h-4 text-mazala-gold" />
              <span>Edição Rápida de Preços</span>
            </Link>

            <Link
              href="/admin/produtos"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-mazala-surface-2 text-gray-300 hover:text-white transition-colors"
            >
              <Package className="w-4 h-4 text-gray-400" />
              <span>Produtos & Estoque</span>
            </Link>

            <Link
              href="/admin/pedidos"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-mazala-surface-2 text-gray-300 hover:text-white transition-colors"
            >
              <ShoppingBag className="w-4 h-4 text-gray-400" />
              <span>Pedidos & Rastreio</span>
            </Link>

            <Link
              href="/admin/configuracoes"
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-mazala-surface-2 text-gray-300 hover:text-white transition-colors"
            >
              <Settings className="w-4 h-4 text-gray-400" />
              <span>Configurações & LGPD</span>
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-mazala-border/60">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-mazala-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Voltar para a Loja
          </Link>
        </div>
      </aside>

      {/* Main Content View */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto max-w-7xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
