import React from "react";

function OrderSummary({ products }) {
  const subTotal = products
    .map((product) => Number(product.price.substring(1)) * product.quantity)
    .reduce((a, b) => a + b, 0);

  const roundto2 = (num) => Math.round(num * 100) / 100;
  const shippingEstimate = roundto2(subTotal * 0.03);
  const taxEstimate = roundto2(subTotal * 0.05);
  const total = roundto2(subTotal + shippingEstimate + taxEstimate);
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">${subTotal}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex items-center text-sm text-gray-600">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium text-gray-900">
            ${shippingEstimate}
          </dd>
        </div>
        <div className="flex text-sm items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex text-sm text-gray-600">
            <span>Tax estimate</span>
          </dt>
          <dd className="text-sm font-medium text-gray-900">${taxEstimate}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Order total</dt>
          <dd className="text-base font-medium text-gray-900">${total}</dd>
        </div>
      </dl>
    </section>
  );
}

export default OrderSummary;
