import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";
import { useCart } from "react-use-cart";

export default function Nav() {
  const [cartCount, setCartCount] = React.useState(0);
  const { totalItems } = useCart();
  React.useEffect(() => {
    setCartCount(totalItems);
  }, [totalItems]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white sticky top-0 z-20 border-b border-gray-100">
      <div className="flex h-16 justify-between">
        <div className="flex">
          <Link href={"/"} className="flex items-center w-10">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href={"/cart"}
            type="button"
            className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#509072] focus:ring-offset-2"
          >
            <span className="sr-only">View cart</span>
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          </Link>
          <p className="ml-2 text-gray-600">{cartCount}</p>
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="76"
      height="75"
      viewBox="0 0 76 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M75.2174 30.7434C75.2174 47.6623 61.6886 61.3778 45 61.3778C28.3114 61.3778 0.217384 84.9084 0.217384 67.9895C0.217384 51.0706 28.3114 0.108982 45 0.108982C61.6886 0.108982 75.2174 13.8245 75.2174 30.7434Z"
        fill="#509172"
      />
    </svg>
  );
}
