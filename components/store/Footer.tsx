import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import { BrandDivider } from '@/components/brand/BrandDivider';
import { ShieldCheck, Instagram, MessageCircle, MapPin, Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-mazala-bg border-t border-mazala-border text-mazala-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-xs text-gray-400 leading-relaxed">
              MazalaPhone ® | Especialista em Apple.<br />
              <strong className="text-white">"Seu mundo Apple começa aqui."</strong><br />
              Referência em Cataguases e região em iPhones, iPads e MacBooks.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/mazala_phone"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-mazala-surface hover:bg-mazala-surface-2 border border-mazala-border text-mazala-gold hover:text-white transition-colors"
                aria-label="Instagram @mazala_phone"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5532988547377"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-mazala-surface hover:bg-mazala-surface-2 border border-mazala-border text-emerald-400 hover:text-white transition-colors"
                aria-label="WhatsApp Mazala Phone"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-semibold text-white tracking-widest font-heading">
              Catálogo Apple
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/produtos?categoria=iphone" className="hover:text-white transition-colors">
                  iPhones Lacrados & Lançamentos
                </Link>
              </li>
              <li>
                <Link href="/produtos?condicao=seminovo" className="text-mazala-gold hover:text-mazala-gold-soft transition-colors font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Seminovos (1 Ano de Garantia)
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=ipad" className="hover:text-white transition-colors">
                  iPads (Pro, Air, mini)
                </Link>
              </li>
              <li>
                <Link href="/produtos?categoria=macbook" className="hover:text-white transition-colors">
                  MacBooks (Neo, Air, Pro M5)
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-semibold text-white tracking-widest font-heading">
              Institucional & Garantia
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/garantia" className="hover:text-white transition-colors">
                  Termo de 1 Ano de Garantia
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="hover:text-white transition-colors">
                  Clientes & Prova Social (+250)
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre a Mazala Phone
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="hover:text-white transition-colors">
                  Política de Privacidade (LGPD)
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-gray-500 hover:text-gray-400">
                  Painel Administrativo
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase font-semibold text-white tracking-widest font-heading">
              Atendimento Cataguases
            </h4>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-mazala-red shrink-0 mt-0.5" />
              <span>
                Cataguases - MG e região.<br />
                Retirada imediata ou entrega expressa local.
              </span>
            </p>
            <p className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>(32) 98854-7377 (WhatsApp)</span>
            </p>
            <div className="pt-2 border-t border-mazala-border">
              <span className="text-[10px] text-gray-400 block mb-1">Pagamento Seguro:</span>
              <div className="flex flex-wrap gap-2 text-white text-[10px]">
                <span className="px-2 py-0.5 rounded bg-mazala-surface border border-mazala-border">Pix (-5%)</span>
                <span className="px-2 py-0.5 rounded bg-mazala-surface border border-mazala-border">12x Cartão</span>
                <span className="px-2 py-0.5 rounded bg-mazala-surface border border-mazala-border">Mercado Pago</span>
              </div>
            </div>
          </div>
        </div>

        <BrandDivider />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 pt-4">
          <p>© {new Date().getFullYear()} MazalaPhone ® — Todos os direitos reservados.</p>
          <p className="flex items-center gap-1 text-gray-400">
            <Lock className="w-3.5 h-3.5 text-mazala-gold" /> Supabase RLS 100% Protegido
          </p>
        </div>
      </div>
    </footer>
  );
}
