import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  productName?: string;
  variantInfo?: string;
  className?: string;
}

export function WhatsAppButton({ productName, variantInfo, className = '' }: WhatsAppButtonProps) {
  let message = "Olá Mazala Phone! Gostaria de tirar dúvidas sobre os produtos Apple.";
  if (productName) {
    message = `Olá Mazala Phone! Tenho interesse no ${productName}${variantInfo ? ` (${variantInfo})` : ''}. Poderia me atender?`;
  }

  const encodedUrl = `https://wa.me/5532988547377?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={encodedUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white px-4 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border border-emerald-400/30 ${className}`}
      aria-label="Falar no WhatsApp com especialista Mazala Phone"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-mazala-red rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-mazala-red rounded-full" />
      </div>
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-xs font-semibold leading-tight">Fale Conosco</span>
        <span className="text-[10px] text-emerald-100 font-light">Online em Cataguases</span>
      </div>
    </a>
  );
}
