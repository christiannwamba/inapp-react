import React from "react";

const positiveAdjectives = [
  "Cute",
  "Calm",
  "Kind",
  "Brave",
  "Happy",
  "Fresh",
  "Faith",
  "Light",
  "Warm",
  "Loyal",
  "Bliss",
  "Bold",
  "Bright",
  "Clean",
  "Clear",
  "Sharp",
  "Smart",
  "Sweet",
  "Sunny",
  "Brave",
  "Cheer",
  "Chirp",
  "Crazy",
  "Early",
  "Earth",
  "Fancy",
  "Fancy",
  "Giddy",
  "Grace",
  "Great",
  "Happy",
  "Juicy",
  "Jolly",
  "Lucky",
  "Merry",
  "Noble",
];
export function createData() {
  return Array.from(Array(36).keys())
    .sort(() => Math.random() - 0.5)
    .map((n) => {
      n = n * 10 === 0 ? 1 : n * 10;
      return {
        id: n,
        positiveAdjective: positiveAdjectives.pop(),
        hue: n,
        saturation: 49,
        light: 44,
        price: "$" + Math.floor(Math.random() * (400 - 100) + 100),
      };
    });
}

export function useProducts() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    if (localStorage.getItem("products")) {
      setProducts(JSON.parse(localStorage.getItem("products")));
    } else {
      const productList = createData();
      localStorage.setItem("products", JSON.stringify(productList));
      setProducts(productList);
    }
  }, []);
  return products;
}
