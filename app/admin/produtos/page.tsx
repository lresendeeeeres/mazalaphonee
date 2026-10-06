import React from "react";
import Image from "next/image";
import { PRODUCTS } from "@/lib/data/catalog";
import { formatPrice } from "@/lib/utils";
import { Package, ShieldCheck, CheckCircle2, Image as ImageIcon } from "lucide-react";

export default function AdminProdutosPage() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs uppercase font-semibold text-mazala-gold tracking-widest block">
          Catálogo Cadastrado
        </span>
        <h1 className="font-heading text-3xl text-white font-light uppercase tracking-wide">
          Produtos & Variantes
        </h1>
        <p className="text-xs text-mazala-muted mt-1">
          Lista de modelos Apple, variantes de cores, capacidades e fotos cadastradas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="p-5 rounded-2xl bg-mazala-surface border border-mazala-border flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="relative w-full aspect-[4/3] rounded-xl bg-black/40 p-2 mb-3">
                <Image
                  src={product.variants[0].image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-mazala-gold uppercase font-semibold">
                  {product.categoryName}
                </span>
                <span className="text-gray-400">
                  {product.condition === "seminovo" ? "Seminovo (1 Ano Garantia)" : "Lacrado"}
                </span>
              </div>

              <h3 className="text-base font-semibold text-white">{product.name}</h3>
              <p className="text-xs text-mazala-muted mt-1 line-clamp-2">
                {product.short_description}
              </p>
            </div>

            <div className="pt-3 border-t border-mazala-border/60 text-xs flex items-center justify-between">
              <span className="text-mazala-muted">
                {product.variants.length} variantes
              </span>
              <span className="text-white font-bold">
                A partir de {formatPrice(product.variants[0].price_cents)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
