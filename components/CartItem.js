import React from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';

import ProductCard from './ProductCard';
import ProductInfo from './ProductInfo';

function CartItem({ product, updateItemQuantity }) {
  return (
    <div key={product.id} className="flex py-6 sm:py-10">
      <div className="basis-72">
        <ProductCard product={product} />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <a className="font-medium text-gray-700 hover:text-gray-800">
                  {product.name}
                </a>
              </h3>
            </div>
            <div className="mt-1 flex text-sm">
              <div>
                <ProductInfo product={product} />
              </div>
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {product.price}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <label htmlFor={`quantity-${product.quantity}`} className="sr-only">
              Quantity, {product.name}
            </label>
            <select
              id={`quantity-${product.quantity}`}
              name={`quantity-${product.quantity}`}
              className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              defaultValue={product.quantity}
              onChange={(e) => {
                updateItemQuantity(product.id, Number(e.target.value));
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>

            <div className="absolute top-0 right-0">
              <button
                type="button"
                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                onClick={(e) => {
                  updateItemQuantity(product.id, 0);
                }}
              >
                <span className="sr-only">Remove</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
