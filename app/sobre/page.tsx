import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { BrandDivider } from "@/components/brand/BrandDivider";
import { ShieldCheck, MapPin, Instagram, Sparkles, HeartHandshake } from "lucide-react";

export default function SobrePage() {
  return (
    <div className="py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full space-y-12">
      <div className="text-center space-y-4">
        <Logo size="xl" showText={false} className="mx-auto" />
        <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block">
          História & Essência
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl text-white font-light uppercase tracking-wide">
          Sobre a <span className="text-mazala-red font-normal">Mazala</span> Phone ®
        </h1>
        <p className="text-sm text-mazala-muted max-w-xl mx-auto">
          "Seu mundo Apple começa aqui." Criada para redefinir o conceito de compra e pós-venda Apple em Cataguases e região.
        </p>
      </div>

      <div className="p-8 sm:p-10 rounded-3xl bg-mazala-surface border border-mazala-border space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <h2 className="text-lg font-semibold text-white font-heading uppercase tracking-wide border-b border-mazala-border pb-3">
          Uma Experiência Boutique
        </h2>
        <p>
          A <strong className="text-white">Mazala Phone ®</strong> nasceu em Cataguases (Minas Gerais) com um propósito claro: entregar a experiência dos sonhos para quem busca produtos Apple, com atendimento acolhedor, honestidade absoluta e acabamento impecável.
        </p>
        <p>
          Nossa identidade é marcada pelo contraste elegante do preto fosco profundo, do vermelho vibrante e do dourado sofisticado. A sacola preta Mazala com borda interna vermelha se tornou um símbolo de conquista e realização para centenas de clientes em Cataguases, Leopoldina, Ubá, Juiz de Fora e dezenas de cidades mineiras.
        </p>

        <h3 className="text-white font-semibold text-sm pt-4">Nossos Pilares:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-mazala-bg border border-mazala-border space-y-2">
            <ShieldCheck className="w-5 h-5 text-mazala-gold" />
            <h4 className="font-semibold text-white text-xs">1 Ano de Garantia</h4>
            <p className="text-[11px] text-mazala-muted">
              Pioneirismo na região em oferecer 12 meses de garantia total em todos os seminovos.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-mazala-bg border border-mazala-border space-y-2">
            <Sparkles className="w-5 h-5 text-mazala-red" />
            <h4 className="font-semibold text-white text-xs">Aparelhos Impecáveis</h4>
            <p className="text-[11px] text-mazala-muted">
              Inspeção em mais de 35 itens com saúde de bateria certificada e procedência 100% lícita.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-mazala-bg border border-mazala-border space-y-2">
            <HeartHandshake className="w-5 h-5 text-emerald-400" />
            <h4 className="font-semibold text-white text-xs">Atendimento Humanizado</h4>
            <p className="text-[11px] text-mazala-muted">
              Fale diretamente com quem entende do ecossistema Apple e te apoia antes, durante e após a compra.
            </p>
          </div>
        </div>

        <BrandDivider />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 text-xs text-white">
            <MapPin className="w-4 h-4 text-mazala-red" />
            <span>Cataguases - MG • Atendimento presencial e online</span>
          </div>
          <a
            href="https://instagram.com/mazala_phone"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-mazala-gold hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" /> Acompanhe no Instagram @mazala_phone
          </a>
        </div>
      </div>
    </div>
  );
}
