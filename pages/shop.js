import Navigation from "@/components/Navigation/Navigation";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import React from "react";
import Script from "next/script";

const shop = () => {
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
      <main>
        <Navigation />
        <DividerTitle
          title={"this page is currently under development"}
          text={[""]}
        />
      </main>
    </>
  );
};

export default shop;
