import "../styles/globals.scss";
import "../styles/app.scss";
import "swiper/css/bundle";
import Footer from "../components/Footer/Footer";
import React from "react";
import { BasketProvider } from "../components/Basket/BasketManager";

function MyApp({ Component, pageProps }) {
  return (
    <BasketProvider>
      <Component {...pageProps} />
      <Footer />
    </BasketProvider>
  );
}

export default MyApp;
