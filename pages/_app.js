import { CartProvider } from "react-use-cart";
import "@/styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default App;
