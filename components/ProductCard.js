import React from 'react';

function ProductCard({ product, large }) {
  return (
    <div className="relative">
      <div
        style={{
          backgroundColor: `hsl(${product.hue}, ${product.saturation}%, ${product.light}%)`,
        }}
        className={`relative h-[${
          large ? '420px' : '300px'
        }] w-full overflow-hidden flex items-center text-[54px] font-bold text-white p-6`}
      >
        <h3 className="max-w-[144px] pt-20">Be {product.positiveAdjective}</h3>
      </div>

      {large && (
        <div className="absolute inset-x-0 top-0 flex h-[420px] items-end justify-end overflow-hidden p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-lg font-semibold text-white">
            {product.price}
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
