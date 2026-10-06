import React from "react";
import Link from "next/link";
import { ShieldCheck, FileText } from "lucide-react";

export default function TermosPage() {
  return (
    <div className="py-16 px-4 sm:px-6 max-w-4xl mx-auto w-full space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block">
          Termos de Uso
        </span>
        <h1 className="font-heading text-3xl sm:text-4xl text-white font-light uppercase tracking-wide">
          Termos e Condições de Compra
        </h1>
        <p className="text-xs text-mazala-muted">Mazala Phone ® • Cataguases (MG)</p>
      </div>

      <div className="p-8 rounded-3xl bg-mazala-surface border border-mazala-border space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <h2 className="text-base font-semibold text-white">1. Identificação e Objeto</h2>
        <p>
          Este e-commerce é operado pela Mazala Phone ®, especializada na comercialização de produtos e acessórios Apple novos (lacrados) e seminovos selecionados com garantia de 12 meses.
        </p>

        <h2 className="text-base font-semibold text-white">2. Preços e Formas de Pagamento</h2>
        <p>
          Os valores apresentados na loja virtual são em reais (BRL). O desconto de 5% é aplicável exclusivamente para pagamentos à vista via Pix. O parcelamento no cartão de crédito em até 12x é processado com total segurança através do Mercado Pago.
        </p>

        <h2 className="text-base font-semibold text-white">3. Prazos de Envio e Retirada</h2>
        <p>
          Para compras com "Retirada na Loja", o pedido fica disponível imediatamente após a confirmação do pagamento em nosso balcão em Cataguases (MG). Para entregas expressas locais, o envio é realizado no mesmo dia útil. Envios nacionais via Sedex contam com seguro total contra extravio.
        </p>

        <h2 className="text-base font-semibold text-white">4. Garantia de 1 Ano em Seminovos</h2>
        <p>
          Todos os produtos de condição "Seminovo" contam com garantia legal e contratual totalizando 365 dias, conforme nosso <Link href="/garantia" className="text-mazala-gold hover:underline">Termo de Garantia</Link>.
        </p>
      </div>
    </div>
  );
}
