"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CUSTOMER_REVIEWS } from "@/lib/data/reviews-dataset";
import { Star, ShieldCheck, MapPin, CheckCircle2, Search } from "lucide-react";

export function CustomerReviewsWall() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cityFilter, setCityFilter] = useState("all");
  const [deviceFilter, setDeviceFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);

  const realPhotoReviews = CUSTOMER_REVIEWS.filter((r) => r.photo_url !== null);

  const filtered = CUSTOMER_REVIEWS.filter((r) => {
    const matchesSearch =
      r.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.device_purchased.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCity = cityFilter === "all" || r.location.includes(cityFilter);
    const matchesDevice = deviceFilter === "all" || r.device_purchased.includes(deviceFilter);
    return matchesSearch && matchesCity && matchesDevice;
  });

  return (
    <section className="py-16 bg-mazala-bg relative overflow-hidden" id="clientes-mazala">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[11px] font-semibold tracking-apple-widest uppercase text-mazala-gold mb-2 block">
            Prova Social & Procedência
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-white font-light tracking-wide uppercase">
            Clientes <span className="text-mazala-red font-normal">Mazala</span> Phone
          </h2>
          <p className="text-xs sm:text-sm text-mazala-muted mt-3">
            Mais de <strong className="text-white">250 clientes atendidos</strong> em Cataguases e região.
            Confira quem já está com a sua sacola preta Mazala e aproveitando 1 ano de garantia total.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs text-gray-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> +260 Pedidos Entregues
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-mazala-gold fill-mazala-gold" /> Nota 5.0 no Atendimento
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-mazala-gold" /> 1 Ano de Garantia Verificada
            </span>
          </div>
        </div>

        <div className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-mazala-gold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-mazala-red" /> Entregas Reais com a Sacola Mazala
            </h3>
            <span className="text-[11px] text-mazala-muted">Cataguases - MG</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {realPhotoReviews.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden bg-mazala-surface border border-mazala-border hover:border-mazala-gold/60 transition-all duration-300 shadow-card-luxury flex flex-col"
              >
                <div className="h-[2px] w-full bg-mazala-red" />

                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                  <Image
                    src={item.photo_url || "/brand/logo.webp"}
                    alt={`Cliente ${item.customer_name} com sacola Mazala Phone`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mazala-bg via-transparent to-black/20" />
                  
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Compra Verificada
                  </div>

                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] text-mazala-gold uppercase tracking-wider font-semibold">
                      {item.device_purchased}
                    </span>
                    <h4 className="text-base font-semibold text-white leading-tight">
                      {item.customer_name}
                    </h4>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between bg-mazala-surface">
                  <div className="flex gap-1 text-mazala-gold mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 italic">
                    "{item.comment}"
                  </p>
                  <div className="mt-3 pt-3 border-t border-mazala-border flex items-center justify-between text-[10px] text-mazala-muted">
                    <span>📍 {item.location}</span>
                    <span className="text-mazala-gold font-medium">1 Ano de Garantia</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-mazala-surface rounded-2xl border border-mazala-border p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg font-light font-heading text-white tracking-wide uppercase">
                Mural de Clientes ({filtered.length} Registros)
              </h3>
              <p className="text-xs text-mazala-muted">
                Pesquise depoimentos de clientes da sua cidade ou que compraram o mesmo modelo.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 sm:w-60">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Buscar por nome, cidade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-mazala-bg border border-mazala-border rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-mazala-gold"
                />
              </div>

              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-mazala-gold"
              >
                <option value="all">Todas as Cidades</option>
                <option value="Cataguases">Cataguases - MG</option>
                <option value="Leopoldina">Leopoldina - MG</option>
                <option value="Ubá">Ubá - MG</option>
                <option value="Juiz de Fora">Juiz de Fora - MG</option>
                <option value="Muriaé">Muriaé - MG</option>
                <option value="Belo Horizonte">Belo Horizonte - MG</option>
              </select>

              <select
                value={deviceFilter}
                onChange={(e) => setDeviceFilter(e.target.value)}
                className="bg-mazala-bg border border-mazala-border rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-mazala-gold"
              >
                <option value="all">Todos os Aparelhos</option>
                <option value="iPhone 16">iPhone 16</option>
                <option value="iPhone 17">iPhone 17</option>
                <option value="Seminovo">Seminovos (Garantia)</option>
                <option value="MacBook">MacBooks</option>
                <option value="iPad">iPads</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.slice(0, visibleCount).map((review) => (
              <div
                key={review.id}
                className="p-4 rounded-xl bg-mazala-bg border border-mazala-border/80 hover:border-mazala-gold/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-mazala-gold">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verificado
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-mazala-border/40 flex items-center justify-between text-[11px]">
                  <div>
                    <h5 className="font-semibold text-white">{review.customer_name}</h5>
                    <span className="text-[10px] text-mazala-gold font-medium">
                      {review.device_purchased}
                    </span>
                  </div>
                  <span className="text-[10px] text-mazala-muted">{review.location}</span>
                </div>
              </div>
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 18)}
                className="px-6 py-2.5 rounded-full border border-mazala-gold/40 text-mazala-gold hover:bg-mazala-gold hover:text-black transition-all text-xs font-semibold tracking-wider uppercase"
              >
                Carregar Mais Clientes ({filtered.length - visibleCount} restantes)
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
