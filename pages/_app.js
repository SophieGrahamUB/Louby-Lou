import "../styles/globals.scss";
import "../styles/app.scss";
import Footer from "../components/Footer/Footer";
import React, { Suspense } from "react";
import Title from "../components/Title";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Suspense fallback={<Title title={"Loading, please wait..."} />}>
        <Component {...pageProps} />
        <Footer />
      </Suspense>
    </>
  );
}

export default MyApp;
