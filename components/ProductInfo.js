import React from 'react';

function ProductInfo({ product }) {
  return (
    <>
      <h3 className="text-sm font-medium text-gray-900">
        Be {product.positiveAdjective}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{`hsl(${product.hue}, ${product.saturation}%, ${product.light}%)`}</p>
    </>
  );
}

export default ProductInfo;
