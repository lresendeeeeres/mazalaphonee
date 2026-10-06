import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);
}

export function calculatePixPrice(cents: number, discountPercentage = 5): number {
  return Math.round(cents * (1 - discountPercentage / 100));
}

export function calculateInstallment(cents: number, installments = 12): {
  count: number;
  value: number;
  total: number;
} {
  const value = Math.round(cents / installments);
  return {
    count: installments,
    value,
    total: cents,
  };
}
