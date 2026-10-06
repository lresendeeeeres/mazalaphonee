"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/context/cart";
import { formatPrice, calculatePixPrice } from "@/lib/utils";
import confetti from "canvas-confetti";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  QrCode,
  CreditCard,
  Copy,
  MapPin,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";

export default function CheckoutPage() {
  const { items, subtotalCents, discountCents, clearCart } = useCart();

  const [step, setStep] = useState<"form" | "success">("form");
  const [shippingMethod, setShippingMethod] = useState<"pickup" | "local" | "sedex">("pickup");
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "credit_card">("pix");
  const [installments, setInstallments] = useState(1);
  const [copiedPix, setCopiedPix] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const shippingFees = {
    pickup: 0,
    local: subtotalCents >= 500000 ? 0 : 1500,
    sedex: 4890,
  };

  const currentShippingCents = shippingFees[shippingMethod];
  const totalBeforePix = Math.max(0, subtotalCents - discountCents) + currentShippingCents;
  const finalTotalCents =
    paymentMethod === "pix" ? calculatePixPrice(totalBeforePix) : totalBeforePix;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = `MZ-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderNumber(newOrderId);
    setStep("success");
    clearCart();

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C8A45D", "#E10B1F", "#FFFFFF"],
      });
    } catch (e) {
      console.error(e);
    }
  };

  const fakePixCode = `00020126580014br.gov.bcb.pix0136mazalaphone-cataguases-mg520400005303986540${(finalTotalCents / 100).toFixed(2)}5802BR5916MAZALA PHONE6010CATAGUASES62070503***6304D1A4`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fakePixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  if (step === "success") {
    const waText = `Olá Mazala Phone! Acabei de finalizar o pedido ${orderNumber} no site (${name}). Gostaria de confirmar a entrega/retirada.`;
    const waUrl = `https://wa.me/5532988547377?text=${encodeURIComponent(waText)}`;

    return (
      <div className="py-16 px-4 sm:px-6 max-w-3xl mx-auto w-full text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-emerald-400">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block mb-1">
            Pedido Registrado com Sucesso
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl text-white font-light uppercase tracking-wide">
            Obrigado, {name || "Cliente Mazala"}!
          </h1>
          <p className="text-sm text-mazala-muted mt-2">
            Número do Pedido: <strong className="text-white font-mono text-base">{orderNumber}</strong>
          </p>
        </div>

        {paymentMethod === "pix" && (
          <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border max-w-md mx-auto space-y-4 text-left">
            <div className="flex items-center gap-2 text-white text-sm font-semibold border-b border-mazala-border pb-3">
              <QrCode className="w-5 h-5 text-mazala-gold" /> Pagamento Instantâneo no Pix
            </div>
            <p className="text-xs text-mazala-muted">
              Pague agora para liberar a separação e retirada do seu aparelho:
            </p>
            <div className="p-3 bg-mazala-bg rounded-xl border border-mazala-border flex items-center justify-between gap-2">
              <input
                type="text"
                readOnly
                value={fakePixCode}
                className="bg-transparent text-xs font-mono text-gray-300 w-full truncate focus:outline-none"
              />
              <button
                onClick={copyToClipboard}
                className="px-3 py-1.5 rounded-lg bg-mazala-gold text-black text-xs font-semibold shrink-0 hover:bg-mazala-gold-soft transition-colors flex items-center gap-1"
              >
                <Copy className="w-3.5 h-3.5" /> {copiedPix ? "Copiado!" : "Copiar"}
              </button>
            </div>
            <div className="text-xs text-gray-400">
              Valor com desconto Pix: <strong className="text-white text-sm">{formatPrice(finalTotalCents)}</strong>
            </div>
          </div>
        )}

        <div className="p-6 rounded-2xl bg-mazala-surface-2 border border-mazala-border max-w-md mx-auto space-y-3">
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
            Próximos Passos
          </h4>
          <p className="text-xs text-mazala-muted leading-relaxed">
            {shippingMethod === "pickup"
              ? "Seu produto já está sendo preparado com a sacola Mazala para retirada na nossa loja em Cataguases."
              : "Seu produto será despachado com código de rastreamento enviado por e-mail e WhatsApp."}
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> Notificar Mazala no WhatsApp
          </a>
        </div>

        <div className="pt-4">
          <Link href="/" className="text-xs text-mazala-gold hover:underline">
            ? Voltar para a Página Inicial
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-20 px-4 text-center max-w-md mx-auto space-y-4">
        <ShoppingBag className="w-12 h-12 text-mazala-gold mx-auto opacity-60" />
        <h2 className="text-xl font-heading text-white">Sua sacola está vazia</h2>
        <p className="text-xs text-mazala-muted">
          Selecione produtos no catálogo antes de finalizar seu pedido.
        </p>
        <Link
          href="/produtos"
          className="inline-block px-6 py-2.5 rounded-full bg-mazala-gold text-black text-xs font-semibold uppercase tracking-wider"
        >
          Explorar Produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto w-full">
      <div className="mb-10 text-center sm:text-left border-b border-mazala-border pb-6">
        <h1 className="font-heading text-3xl text-white font-light uppercase tracking-wide">
          Finalizar Pedido Seguro
        </h1>
        <p className="text-xs text-mazala-muted mt-1 flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-mazala-gold" /> Conexão protegida SSL & Pagamento Seguro
        </p>
      </div>

      <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form: Data & Delivery */}
        <div className="lg:col-span-7 space-y-8">
          {/* Customer Info */}
          <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-4">
            <h3 className="text-xs uppercase font-semibold text-white tracking-widest font-heading border-b border-mazala-border pb-3">
              1. Dados do Cliente
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] text-mazala-muted block mb-1">Nome Completo *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-mazala-gold"
                />
              </div>
              <div>
                <label className="text-[11px] text-mazala-muted block mb-1">E-mail para Confirmação *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-mazala-gold"
                />
              </div>
              <div>
                <label className="text-[11px] text-mazala-muted block mb-1">WhatsApp / Telefone *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(32) 99999-9999"
                  className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-mazala-gold"
                />
              </div>
              <div>
                <label className="text-[11px] text-mazala-muted block mb-1">CPF (para Nota & Garantia) *</label>
                <input
                  type="text"
                  required
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="000.000.000-00"
                  className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-mazala-gold"
                />
              </div>
            </div>
          </div>

          {/* Delivery Option */}
          <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-4">
            <h3 className="text-xs uppercase font-semibold text-white tracking-widest font-heading border-b border-mazala-border pb-3">
              2. Forma de Entrega / Retirada
            </h3>
            <div className="space-y-3">
              <label
                onClick={() => setShippingMethod("pickup")}
                className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  shippingMethod === "pickup"
                    ? "border-mazala-gold bg-mazala-gold/10"
                    : "border-mazala-border bg-mazala-bg"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingMethod === "pickup"}
                    onChange={() => setShippingMethod("pickup")}
                    className="accent-mazala-gold"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      Retirar na Loja (Cataguases - MG)
                    </span>
                    <span className="text-[11px] text-mazala-muted">
                      Retirada imediata com sacola oficial Mazala Phone
                    </span>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-bold">Grátis</span>
              </label>

              <label
                onClick={() => setShippingMethod("local")}
                className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  shippingMethod === "local"
                    ? "border-mazala-gold bg-mazala-gold/10"
                    : "border-mazala-border bg-mazala-bg"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingMethod === "local"}
                    onChange={() => setShippingMethod("local")}
                    className="accent-mazala-gold"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      Entrega Expressa Local (Cataguases & Região)
                    </span>
                    <span className="text-[11px] text-mazala-muted">
                      Entrega via motoboy direto no seu endereço
                    </span>
                  </div>
                </div>
                <span className="text-xs text-white font-bold">
                  {subtotalCents >= 500000 ? "Grátis" : "R$ 15,00"}
                </span>
              </label>

              <label
                onClick={() => setShippingMethod("sedex")}
                className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                  shippingMethod === "sedex"
                    ? "border-mazala-gold bg-mazala-gold/10"
                    : "border-mazala-border bg-mazala-bg"
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="shipping"
                    checked={shippingMethod === "sedex"}
                    onChange={() => setShippingMethod("sedex")}
                    className="accent-mazala-gold"
                  />
                  <div>
                    <span className="text-xs font-semibold text-white block">
                      Sedex com Seguro Total (Todo o Brasil)
                    </span>
                    <span className="text-[11px] text-mazala-muted">
                      Embalagem blindada com rastreio Correios / Jadlog
                    </span>
                  </div>
                </div>
                <span className="text-xs text-white font-bold">R$ 48,90</span>
              </label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-4">
            <h3 className="text-xs uppercase font-semibold text-white tracking-widest font-heading border-b border-mazala-border pb-3">
              3. Forma de Pagamento
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setPaymentMethod("pix")}
                className={`p-4 rounded-xl border flex flex-col items-center text-center gap-2 transition-all ${
                  paymentMethod === "pix"
                    ? "border-mazala-gold bg-mazala-gold/10 text-white"
                    : "border-mazala-border bg-mazala-bg text-gray-400"
                }`}
              >
                <QrCode className="w-6 h-6 text-mazala-gold" />
                <span className="text-xs font-bold">Pix Instantâneo</span>
                <span className="text-[10px] text-emerald-400 font-semibold">
                  5% de desconto à vista
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("credit_card")}
                className={`p-4 rounded-xl border flex flex-col items-center text-center gap-2 transition-all ${
                  paymentMethod === "credit_card"
                    ? "border-mazala-gold bg-mazala-gold/10 text-white"
                    : "border-mazala-border bg-mazala-bg text-gray-400"
                }`}
              >
                <CreditCard className="w-6 h-6 text-mazala-gold" />
                <span className="text-xs font-bold">Cartão de Crédito</span>
                <span className="text-[10px] text-gray-300">Em até 12x sem juros</span>
              </button>
            </div>

            {paymentMethod === "credit_card" && (
              <div className="pt-3 space-y-3 border-t border-mazala-border/60">
                <label className="text-[11px] text-mazala-muted block">Número de Parcelas:</label>
                <select
                  value={installments}
                  onChange={(e) => setInstallments(Number(e.target.value))}
                  className="w-full bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-mazala-gold"
                >
                  {[...Array(12)].map((_, i) => {
                    const count = i + 1;
                    const val = Math.round(totalBeforePix / count);
                    return (
                      <option key={count} value={count}>
                        {count}x de {formatPrice(val)} sem juros
                      </option>
                    );
                  })}
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Right Summary */}
        <div className="lg:col-span-5 p-6 rounded-2xl bg-mazala-surface border border-mazala-border space-y-6">
          <h3 className="text-xs uppercase font-semibold text-white tracking-widest font-heading border-b border-mazala-border pb-3">
            Resumo da Sacola
          </h3>

          <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 text-xs">
                <div className="relative w-12 h-12 rounded-lg bg-black/40 p-1 shrink-0">
                  <Image src={item.variant.image} alt={item.product.name} fill className="object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-medium truncate">{item.product.name}</p>
                  <p className="text-[10px] text-mazala-muted">
                    {item.variant.color} • {item.variant.storage} (x{item.quantity})
                  </p>
                </div>
                <span className="text-white font-semibold">
                  {formatPrice(item.variant.price_cents * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-mazala-border/60 space-y-2 text-xs text-mazala-muted">
            <div className="flex justify-between">
              <span>Subtotal dos produtos:</span>
              <span className="text-white">{formatPrice(subtotalCents)}</span>
            </div>
            {discountCents > 0 && (
              <div className="flex justify-between text-emerald-400">
                <span>Cupom de desconto:</span>
                <span>-{formatPrice(discountCents)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span>Frete selecionado:</span>
              <span className="text-white">
                {currentShippingCents === 0 ? "Grátis" : formatPrice(currentShippingCents)}
              </span>
            </div>
            {paymentMethod === "pix" && (
              <div className="flex justify-between text-emerald-400 font-semibold">
                <span>Desconto Pix (-5%):</span>
                <span>-{formatPrice(totalBeforePix - finalTotalCents)}</span>
              </div>
            )}
            <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-mazala-border">
              <span>Total a pagar:</span>
              <span className="text-xl text-mazala-gold">{formatPrice(finalTotalCents)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-mazala-red to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-red-glow flex items-center justify-center gap-2"
          >
            Confirmar e Concluir Pedido <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </div>
  );
}
