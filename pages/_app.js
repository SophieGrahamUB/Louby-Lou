import Footer from "@/components/Footer/Footer";
import "@/styles/globals.scss";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8ELL72CD8T"
      ></Script>
      <Script>{`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-8ELL72CD8T');`}</Script>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
