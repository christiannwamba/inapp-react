import React from "react";

import Layout from "@/components/Layout";
import Products from "@/components/Products";

import { useProducts } from "@/lib/data";

export default function Home() {
  const products = useProducts();
  return (
    <Layout>
      <div className="border-b border-gray-200 pt-16 pb-10">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          New Arrivals
        </h1>
        <p className="mt-4 text-base text-gray-500 max-w-2xl">
          Checkout out the latest release of inspirational cards, new and
          improved with more colors and punchy positive words!
        </p>
      </div>
      <Products products={products} />
    </Layout>
  );
}
