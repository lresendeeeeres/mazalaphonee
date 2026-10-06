import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, PhoneCall, FileText } from "lucide-react";

export default function GarantiaPage() {
  return (
    <div className="py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full space-y-10">
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block">
          Compromisso Mazala Phone ®
        </span>
        <h1 className="font-heading text-3xl sm:text-5xl text-white font-light uppercase tracking-wide">
          1 Ano de Garantia Total
        </h1>
        <p className="text-sm text-mazala-muted max-w-xl mx-auto">
          O padrão de confiança que nos tornou referência em Cataguases e toda a Zona da Mata mineira.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-mazala-surface border border-mazala-border space-y-6">
        <div className="flex items-center gap-3 text-mazala-gold border-b border-mazala-border pb-4">
          <ShieldCheck className="w-8 h-8 text-mazala-gold" />
          <div>
            <h2 className="text-lg font-semibold text-white">Como Funciona a Garantia de 365 Dias</h2>
            <span className="text-xs text-mazala-muted">Cobertura válida para todos os seminovos</span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
          <p>
            Diferente de outras revendas que oferecem apenas 90 dias, a <strong className="text-white">Mazala Phone ®</strong> garante cada aparelho seminovo por <strong className="text-mazala-gold">12 meses completos</strong> a contar da data de retirada ou entrega.
          </p>

          <h3 className="text-white font-semibold text-sm pt-2">O que está 100% coberto:</h3>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Placa-mãe, processador e memória interna</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Face ID, Touch ID e sensores biométricos originais</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Câmeras frontal e traseiras, foco e gravação de áudio</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Conexão Wi-Fi, Bluetooth, sinal 5G e alto-falantes</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Saúde e retenção de carga da bateria (garantia contra vícios ocultos)</span>
            </li>
          </ul>

          <h3 className="text-white font-semibold text-sm pt-2">Atendimento Direto e Descomplicado:</h3>
          <p>
            Se seu aparelho apresentar qualquer inconformidade, você não precisa ligar para centrais distantes. O suporte é feito diretamente no balcão da nossa loja em Cataguases (MG) ou via WhatsApp com nossos especialistas.
          </p>
        </div>

        <div className="pt-4 border-t border-mazala-border flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-mazala-muted">
            Dúvidas sobre o certificado? Fale conosco:
          </span>
          <a
            href="https://wa.me/5532988547377?text=Ol%C3%A1%20Mazala%20Phone!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20a%20garantia%20de%201%20ano."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors"
          >
            <PhoneCall className="w-4 h-4" /> (32) 98854-7377
          </a>
        </div>
      </div>
    </div>
  );
}
