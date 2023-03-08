import Product from './Product';

export default function Products({ products }) {
  return (
    <div className="bg-white">
      <div className="px-4 mt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
