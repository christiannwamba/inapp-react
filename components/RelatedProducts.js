import { useProducts } from '@/lib/data';
import React from 'react';
import Product from './Product';

function RelatedProducts() {
  const products = useProducts();
  // Randomly select 4 products from the list of products between 4 and products.length
  const end = Math.floor(Math.random() * (products.length - 4) + 4);
  const start = end - 4;
  const relatedProducts = products.slice(start, end);

  return (
    <section aria-labelledby="related-heading" className="mt-24">
      <h2 id="related-heading" className="text-lg font-medium text-gray-900">
        You may also like&hellip;
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {relatedProducts.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
