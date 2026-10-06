-- Helper function to check if the current requester is an administrator
create or replace function public.is_admin()
returns boolean as $$
declare
  user_role text;
begin
  if auth.uid() is null then
    return false;
  end if;

  -- 1. Check app_metadata (tamper-proof)
  user_role := (auth.jwt() -> 'app_metadata' ->> 'role');
  if user_role in ('owner', 'manager') then
    return true;
  end if;

  -- 2. Fallback check profiles table
  select role into user_role from public.profiles where id = auth.uid();
  return user_role in ('owner', 'manager');
end;
$$ language plpgsql security definer;

-- Enable RLS on 100% of tables
alter table categories enable row level security;
alter table products enable row level security;
alter table product_variants enable row level security;
alter table product_images enable row level security;
alter table profiles enable row level security;
alter table addresses enable row level security;
alter table coupons enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table payments enable row level security;
alter table banners enable row level security;
alter table store_settings enable row level security;
alter table audit_logs enable row level security;
alter table customer_reviews enable row level security;

-- 1. Categories
create policy "Public can view active categories" on categories
  for select using (active = true or public.is_admin());
create policy "Admins can manage categories" on categories
  for all using (public.is_admin());

-- 2. Products
create policy "Public can view active products" on products
  for select using (active = true or public.is_admin());
create policy "Admins can manage products" on products
  for all using (public.is_admin());

-- 3. Product Variants
create policy "Public can view active variants" on product_variants
  for select using (active = true or public.is_admin());
create policy "Admins can manage variants" on product_variants
  for all using (public.is_admin());

-- 4. Product Images
create policy "Public can view product images" on product_images
  for select using (true);
create policy "Admins can manage product images" on product_images
  for all using (public.is_admin());

-- 5. Profiles
create policy "Users can read own profile" on profiles
  for select using (auth.uid() = id or public.is_admin());
create policy "Users can update own profile" on profiles
  for update using (auth.uid() = id);
create policy "Users can insert own profile" on profiles
  for insert with check (auth.uid() = id);

-- 6. Addresses
create policy "Users can read own addresses" on addresses
  for select using (auth.uid() = user_id or public.is_admin());
create policy "Users can modify own addresses" on addresses
  for all using (auth.uid() = user_id);

-- 7. Coupons
create policy "Public can view active coupons" on coupons
  for select using (active = true or public.is_admin());
create policy "Admins can manage coupons" on coupons
  for all using (public.is_admin());

-- 8. Orders
create policy "Users can read own orders" on orders
  for select using (auth.uid() = user_id or public.is_admin());
create policy "Users can create orders" on orders
  for insert with check (auth.uid() = user_id or user_id is null);
create policy "Admins can update orders" on orders
  for update using (public.is_admin());

-- 9. Order Items
create policy "Users can read own order items" on order_items
  for select using (
    exists (
      select 1 from orders
      where orders.id = order_items.order_id
      and (orders.user_id = auth.uid() or public.is_admin())
    )
  );
create policy "Users can insert order items" on order_items
  for insert with check (true);

-- 10. Payments
create policy "Admins and Server only for payments" on payments
  for select using (public.is_admin());

-- 11. Banners
create policy "Public can view active banners" on banners
  for select using (active = true or public.is_admin());
create policy "Admins can manage banners" on banners
  for all using (public.is_admin());

-- 12. Store Settings
create policy "Public can read non-secret settings" on store_settings
  for select using (key not in ('mercadopago_access_token', 'resend_api_key'));
create policy "Admins can manage settings" on store_settings
  for all using (public.is_admin());

-- 13. Audit Logs
create policy "Admins only can view audit logs" on audit_logs
  for select using (public.is_admin());

-- 14. Customer Reviews
create policy "Public can view approved customer reviews" on customer_reviews
  for select using (consent_confirmed = true or public.is_admin());
create policy "Admins can manage customer reviews" on customer_reviews
  for all using (public.is_admin());
