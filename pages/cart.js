import Layout from '@/components/Layout';

import { useCart } from 'react-use-cart';
import React from 'react';
import CartItems from '@/components/CartItems';
import OrderSummary from '@/components/OrderSummary';
import RelatedProducts from '@/components/RelatedProducts';

export default function Cart() {
  const [products, setProducts] = React.useState([]);
  const { items, updateItemQuantity } = useCart();

  React.useEffect(() => {
    setProducts(items);
  }, [items]);
  return (
    <Layout>
      <div className="bg-white">
        <main className="px-4 pt-16 pb-24 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>

          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <CartItems
              products={products}
              updateItemQuantity={updateItemQuantity}
            />

            <OrderSummary products={products} />
          </form>

          <RelatedProducts />
        </main>
      </div>
    </Layout>
  );
}
