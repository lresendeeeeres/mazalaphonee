-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. Categories
create table if not exists categories (
    id uuid primary key default gen_random_uuid(),
    slug text not null unique,
    name text not null,
    position int default 0,
    active boolean default true,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- 2. Products
create table if not exists products (
    id uuid primary key default gen_random_uuid(),
    category_id uuid references categories(id) on delete set null,
    slug text not null unique,
    name text not null,
    short_description text,
    description text,
    brand text default 'Apple',
    release_year int,
    active boolean default true,
    featured boolean default false,
    seo jsonb default '{}'::jsonb,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- 3. Product Variants
create table if not exists product_variants (
    id uuid primary key default gen_random_uuid(),
    product_id uuid not null references products(id) on delete cascade,
    sku text not null unique,
    color text not null,
    color_hex text not null,
    storage text not null,
    condition text not null check (condition in ('lacrado', 'seminovo')),
    price_cents int not null check (price_cents >= 0),
    compare_at_cents int,
    stock int not null default 0 check (stock >= 0),
    warranty_months int default 12,
    active boolean default true,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- 4. Product Images
create table if not exists product_images (
    id uuid primary key default gen_random_uuid(),
    product_id uuid not null references products(id) on delete cascade,
    variant_id uuid references product_variants(id) on delete set null,
    url text not null,
    alt text not null,
    position int default 0,
    is_primary boolean default false,
    created_at timestamptz default now()
);

-- 5. Profiles
create table if not exists profiles (
    id uuid primary key references auth.users on delete cascade,
    full_name text,
    phone text,
    cpf_encrypted text,
    marketing_consent boolean default false,
    role text not null default 'customer' check (role in ('customer', 'support', 'manager', 'owner')),
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- 6. Addresses
create table if not exists addresses (
    id uuid primary key default gen_random_uuid(),
    user_id uuid not null references profiles(id) on delete cascade,
    label text default 'Principal',
    zip text not null,
    street text not null,
    number text not null,
    complement text,
    district text not null,
    city text not null,
    state text not null,
    is_default boolean default false,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- 7. Coupons
create table if not exists coupons (
    id uuid primary key default gen_random_uuid(),
    code text not null unique,
    type text not null check (type in ('percentage', 'fixed_cents')),
    value int not null,
    min_order_cents int default 0,
    max_uses int,
    used_count int default 0,
    starts_at timestamptz,
    ends_at timestamptz,
    active boolean default true,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- 8. Orders
create table if not exists orders (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references profiles(id) on delete set null,
    guest_email text,
    status text not null default 'pending' check (status in ('pending', 'paid', 'preparing', 'shipped', 'delivered', 'canceled')),
    subtotal_cents int not null check (subtotal_cents >= 0),
    shipping_cents int not null default 0 check (shipping_cents >= 0),
    discount_cents int not null default 0 check (discount_cents >= 0),
    total_cents int not null check (total_cents >= 0),
    shipping_method text not null,
    shipping_address jsonb not null,
    tracking_code text,
    coupon_id uuid references coupons(id) on delete set null,
    notes text,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- 9. Order Items
create table if not exists order_items (
    id uuid primary key default gen_random_uuid(),
    order_id uuid not null references orders(id) on delete cascade,
    variant_id uuid references product_variants(id) on delete set null,
    name_snapshot text not null,
    unit_price_cents int not null check (unit_price_cents >= 0),
    quantity int not null check (quantity > 0),
    created_at timestamptz default now()
);

-- 10. Payments
create table if not exists payments (
    id uuid primary key default gen_random_uuid(),
    order_id uuid not null references orders(id) on delete cascade,
    provider text not null default 'mercadopago',
    provider_payment_id text unique,
    method text not null check (method in ('pix', 'credit_card', 'boleto')),
    status text not null default 'pending',
    amount_cents int not null check (amount_cents >= 0),
    raw jsonb default '{}'::jsonb,
    created_at timestamptz default now(),
    updated_at timestamptz default now()
);

-- 11. Banners
create table if not exists banners (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    image_url text not null,
    link text,
    position int default 0,
    active boolean default true,
    created_at timestamptz default now()
);

-- 12. Store Settings
create table if not exists store_settings (
    key text primary key,
    value jsonb not null,
    updated_at timestamptz default now()
);

-- 13. Audit Logs
create table if not exists audit_logs (
    id uuid primary key default gen_random_uuid(),
    actor_id uuid references profiles(id) on delete set null,
    action text not null,
    entity text not null,
    entity_id text not null,
    diff jsonb default '{}'::jsonb,
    ip inet,
    created_at timestamptz default now()
);

-- 14. Customer Reviews / Social Proof
create table if not exists customer_reviews (
    id uuid primary key default gen_random_uuid(),
    customer_name text not null,
    location text not null default 'Cataguases - MG',
    device_purchased text not null,
    rating int not null default 5 check (rating between 1 and 5),
    comment text not null,
    photo_url text,
    consent_confirmed boolean default true,
    is_featured boolean default false,
    created_at timestamptz default now()
);

-- Indexes for maximum query performance
create index if not exists idx_products_slug on products(slug);
create index if not exists idx_products_category on products(category_id);
create index if not exists idx_variants_sku on product_variants(sku);
create index if not exists idx_variants_product on product_variants(product_id);
create index if not exists idx_orders_user on orders(user_id);
create index if not exists idx_orders_status on orders(status);
create index if not exists idx_order_items_order on order_items(order_id);
create index if not exists idx_payments_order on payments(order_id);
create index if not exists idx_reviews_featured on customer_reviews(is_featured);

-- Updated_at trigger helper
create or replace function update_updated_at_column()
returns trigger as $$
begin
    new.updated_at = now();
    return new;
end;
$$ language plpgsql;

create trigger trg_categories_updated before update on categories for each row execute function update_updated_at_column();
create trigger trg_products_updated before update on products for each row execute function update_updated_at_column();
create trigger trg_variants_updated before update on product_variants for each row execute function update_updated_at_column();
create trigger trg_profiles_updated before update on profiles for each row execute function update_updated_at_column();
create trigger trg_addresses_updated before update on addresses for each row execute function update_updated_at_column();
create trigger trg_orders_updated before update on orders for each row execute function update_updated_at_column();
create trigger trg_payments_updated before update on payments for each row execute function update_updated_at_column();
create trigger trg_coupons_updated before update on coupons for each row execute function update_updated_at_column();
