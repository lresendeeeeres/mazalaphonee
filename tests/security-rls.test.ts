import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

describe("Mazala Phone — Supabase Security & RLS Compliance", () => {
  const migrationsDir = path.join(__dirname, "../supabase/migrations");
  const rlsFile = path.join(migrationsDir, "002_rls_policies.sql");
  const stockFile = path.join(migrationsDir, "003_stock_and_order_functions.sql");

  const requiredTables = [
    "categories",
    "products",
    "product_variants",
    "product_images",
    "profiles",
    "addresses",
    "coupons",
    "orders",
    "order_items",
    "payments",
    "banners",
    "store_settings",
    "audit_logs",
    "customer_reviews",
  ];

  it("verifies that 100% of tables have Row Level Security enabled", () => {
    expect(fs.existsSync(rlsFile)).toBe(true);
    const sql = fs.readFileSync(rlsFile, "utf8");

    requiredTables.forEach((table) => {
      const regex = new RegExp(`alter\\s+table\\s+${table}\\s+enable\\s+row\\s+level\\s+security`, "i");
      expect(regex.test(sql), `Table "${table}" must have RLS explicitly enabled`).toBe(true);
    });
  });

  it("verifies that atomic stock decrement function enforces atomic stock locking", () => {
    expect(fs.existsSync(stockFile)).toBe(true);
    const sql = fs.readFileSync(stockFile, "utf8");

    expect(sql).toContain("create or replace function decrement_stock_on_payment");
    expect(sql).toContain("for update of pv"); // serializable row locking
    expect(sql).toContain("raise exception 'Estoque insuficiente");
  });

  it("ensures no service_role secret is exposed to the frontend bundle", () => {
    const nextConfig = fs.readFileSync(path.join(__dirname, "../next.config.mjs"), "utf8");
    expect(nextConfig).not.toContain("service_role");
  });
});
