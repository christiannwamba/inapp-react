import React from 'react';
import CartItem from "./CartItem";

function CartItems({ products, updateItemQuantity }) {
  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7">
      <h2 id="cart-heading" className="sr-only">
        Items in your shopping cart
      </h2>

      <div
        role="list"
        className="divide-y divide-gray-200 border-t border-b border-gray-200"
      >
        {products.map((product) => (
          <CartItem key={product.id} product={product} updateItemQuantity={updateItemQuantity} />
        ))}
      </div>
    </section>
  );
}

export default CartItems;
