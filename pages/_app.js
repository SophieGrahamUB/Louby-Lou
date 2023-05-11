import "../styles/globals.scss";
import "../styles/app.scss";
import Footer from "../components/Footer/Footer";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
