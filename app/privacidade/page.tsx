import React from "react";
import Link from "next/link";
import { Lock, ShieldCheck, Mail } from "lucide-react";

export default function PrivacidadePage() {
  return (
    <div className="py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block">
          Segurança & LGPD
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl text-white font-light uppercase tracking-wide">
          Política de Privacidade e Cookies
        </h1>
        <p className="text-xs text-mazala-muted">
          Última atualização: Setembro de 2026 • Em total conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-mazala-surface border border-mazala-border space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <h2 className="text-base font-semibold text-white">1. Coleta e Finalidade dos Dados</h2>
        <p>
          A Mazala Phone ® coleta exclusivamente as informações necessárias para a emissão de nota fiscal, faturamento seguro via Mercado Pago, geração do termo de garantia de 1 ano e entrega do produto no seu endereço ou balcão de retirada em Cataguases (MG).
        </p>

        <h2 className="text-base font-semibold text-white">2. Segurança e Supabase RLS</h2>
        <p>
          Nosso banco de dados utiliza criptografia de ponta a ponta e a tecnologia Row Level Security (RLS) do Supabase, garantindo que nenhum usuário tenha acesso aos dados de terceiros. Informações sensíveis como CPF são criptografadas.
        </p>

        <h2 className="text-base font-semibold text-white">3. Imagens de Clientes e Prova Social</h2>
        <p>
          Todas as fotos de clientes exibidas em nosso site e redes sociais contam com consentimento do cliente no momento da entrega. Se desejar revogar seu consentimento ou remover sua foto, basta enviar uma mensagem para nosso canal de atendimento.
        </p>

        <h2 className="text-base font-semibold text-white">4. Seus Direitos como Titular</h2>
        <p>
          Você pode, a qualquer momento, solicitar a exportação ou exclusão definitiva de seus dados cadastrais enviando solicitação para nosso WhatsApp oficial ou e-mail de suporte.
        </p>

        <div className="pt-4 border-t border-mazala-border text-xs text-mazala-muted">
          Dúvidas sobre privacidade? Contate nosso encarregado de dados em: <strong className="text-white">contato@mazalaphone.com.br</strong> ou pelo WhatsApp <strong className="text-white">(32) 98854-7377</strong>.
        </div>
      </div>
    </div>
  );
}
