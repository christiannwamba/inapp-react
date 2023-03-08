import React from "react";
import { useCart } from "react-use-cart";

import ProductCard from "./ProductCard";
import ProductInfo from "./ProductInfo";

function Product({ product }) {
  const { addItem, inCart, updateItemQuantity, getItem, totalItems } =
    useCart();
  const addToCart = (product) => {
    if (inCart(product.id)) {
      let currentItemQuantity = getItem(product.id).quantity;
      updateItemQuantity(product.id, (currentItemQuantity += 1));
    } else {
      addItem(product);
    }
  };

  const removeFromCart = async (product) => {
    let currentItemQuantity = getItem(product.id).quantity;
    updateItemQuantity(product.id, (currentItemQuantity -= 1));
  };
  return (
    <div>
      <ProductCard product={product} large />
      <div className="mt-4">
        <ProductInfo product={product} />
      </div>
      <div className="mt-6">
        {!inCart(product.id) ? (
          <button
            onClick={(e) => addToCart(product)}
            className="w-full relative flex items-center justify-center rounded-md border border-transparent bg-[#509072] py-2 px-8 text-sm font-medium text-[white] hover:bg-[#43775E] transition-colors duration-150 ease-in-out"
          >
            Add to cart
          </button>
        ) : (
          <div className="flex justify-between">
            <button
              onClick={(e) => addToCart(product)}
              className="relative flex items-center justify-center rounded-md border border-transparent bg-[#509072] py-2 px-8 text-sm font-medium text-[white] hover:bg-[#43775E] transition-colors duration-150 ease-in-out"
            >
              Add more
            </button>
            <button
              onClick={(e) => removeFromCart(product)}
              className="relative flex items-center justify-center rounded-md border border-transparent bg-[#C65353] py-2 px-8 text-sm font-medium text-[white] hover:bg-[#A43737] transition-colors duration-150 ease-in-out"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
