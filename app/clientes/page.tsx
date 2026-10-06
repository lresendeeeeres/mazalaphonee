import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CustomerReviewsWall } from "@/components/store/CustomerReviewsWall";
import { Instagram, ShieldCheck, HeartHandshake, MapPin, Award, ArrowLeft } from "lucide-react";

export default function ClientesPage() {
  return (
    <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      {/* Header Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-mazala-surface via-mazala-surface-2 to-mazala-surface border border-mazala-border relative overflow-hidden mb-12 shadow-card-luxury">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mazala-gold/10 text-mazala-gold border border-mazala-gold/30 text-xs font-semibold tracking-wider uppercase">
            <Award className="w-4 h-4" /> Prova Social Oficial
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl text-white font-light uppercase tracking-wide">
            Mais de 250 Clientes na <span className="text-mazala-red font-normal">Mazala</span> Phone
          </h1>

          <p className="text-xs sm:text-sm text-mazala-muted leading-relaxed">
            Nossa maior conquista é a confiança da nossa região. De Cataguases para Leopoldina, Ubá, Juiz de Fora e todo o Brasil, entregamos aparelhos lacrados e seminovos com 1 ano de garantia total e a inconfundível sacola preta Mazala.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs">
            <a
              href="https://instagram.com/mazala_phone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-mazala-bg border border-mazala-border hover:border-mazala-gold text-white transition-colors"
            >
              <Instagram className="w-4 h-4 text-mazala-red" />
              <span>@mazala_phone (9.6k seguidores)</span>
            </a>
            <div className="flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>100% de Satisfação & Garantia Verificada</span>
            </div>
          </div>
        </div>

        {/* Decorative corner glow */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-mazala-gold/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Reviews Component */}
      <CustomerReviewsWall />

      {/* LGPD Image Consent Notice */}
      <div className="mt-12 p-6 rounded-2xl bg-mazala-surface border border-mazala-border/80 text-xs text-mazala-muted flex items-start gap-4">
        <HeartHandshake className="w-5 h-5 text-mazala-gold shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="text-white font-semibold">Compromisso com a Privacidade (LGPD)</h4>
          <p>
            Todas as fotos de entrega e depoimentos de clientes Mazala Phone são exibidos com autorização expressa dos clientes retratados. Se você é cliente e deseja alterar ou remover sua imagem da nossa galeria, basta solicitar ao nosso suporte no WhatsApp (32) 98854-7377.
          </p>
        </div>
      </div>
    </div>
  );
}
