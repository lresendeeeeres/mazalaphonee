-- Atomic stock decrement function with validation
create or replace function decrement_stock_on_payment(p_order_id uuid)
returns jsonb as $$
declare
  item record;
  v_current_stock int;
  v_sku text;
begin
  -- Lock variants for update to prevent concurrent race conditions
  for item in
    select oi.variant_id, oi.quantity, pv.stock, pv.sku
    from order_items oi
    join product_variants pv on pv.id = oi.variant_id
    where oi.order_id = p_order_id
    for update of pv
  loop
    if item.stock < item.quantity then
      raise exception 'Estoque insuficiente para o produto SKU % (Disponível: %, Solicitado: %)',
        item.sku, item.stock, item.quantity;
    end if;

    update product_variants
    set stock = stock - item.quantity
    where id = item.variant_id;
  end loop;

  -- Mark order as paid
  update orders
  set status = 'paid', updated_at = now()
  where id = p_order_id;

  return jsonb_build_object(
    'success', true,
    'order_id', p_order_id,
    'message', 'Estoque baixado e pedido confirmado com sucesso.'
  );
exception
  when others then
    return jsonb_build_object(
      'success', false,
      'order_id', p_order_id,
      'error', sqlerrm
    );
end;
$$ language plpgsql security definer;
