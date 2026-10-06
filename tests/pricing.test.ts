import { describe, it, expect } from "vitest";
import { formatPrice, calculatePixPrice, calculateInstallment } from "../lib/utils";

describe("Mazala Phone — Business & Pricing Calculations", () => {
  it("calculates 5% Pix discount correctly", () => {
    // iPhone 18 Pro 256GB = R$ 11.999,00 (1199900 cents)
    const baseCents = 1199900;
    const pixCents = calculatePixPrice(baseCents, 5);

    // 11.999 * 0.95 = 11.399,05 -> rounded to 1139905 cents
    expect(pixCents).toBe(1139905);
    expect(formatPrice(pixCents)).toContain("11.399,05");
  });

  it("calculates 12 interest-free installments accurately", () => {
    const baseCents = 1199900;
    const { count, value, total } = calculateInstallment(baseCents, 12);

    expect(count).toBe(12);
    expect(value).toBe(Math.round(1199900 / 12));
    expect(total).toBe(baseCents);
  });

  it("formats BRL currency string properly with Brazilian locale", () => {
    const formatted = formatPrice(699900); // R$ 6.999,00
    expect(formatted).toContain("6.999,00");
  });
});
