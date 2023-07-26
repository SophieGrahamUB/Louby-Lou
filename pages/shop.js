import Navigation from "@/components/Navigation/Navigation";
import DividerTitle from "@/components/typography/DividerTitle/DividerTitle";
import React, { useEffect } from "react";
import Script from "next/script";
import Socials from "@/components/Socials/Socials";
import Companies from "@/components/Companies/Companies";

const shop = () => {
  useEffect(() => {
    var scriptURL =
      "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit();
      } else {
        loadScript();
      }
    } else {
      loadScript();
    }
    function loadScript() {
      var script = document.createElement("script");
      script.async = true;
      script.src = scriptURL;
      (
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(script);
      script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
      var client = ShopifyBuy.buildClient({
        domain: "16b34b.myshopify.com",
        storefrontAccessToken: "d2127c6cccae198e3d73d220018735fe",
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent("collection", {
          id: "443993325844",
          node: document.getElementById("collection-component-1690376698382"),
          moneyFormat: "%C2%A3%7B%7Bamount%7D%7D",
          options: {
            product: {
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                    width: "calc(25% - 20px)",
                  },
                  img: {
                    height: "calc(100% - 15px)",
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "0",
                  },
                  imgWrapper: {
                    "padding-top": "calc(75% + 15px)",
                    position: "relative",
                    height: "0",
                  },
                },
                title: {
                  "font-family": "Montserrat, sans-serif",
                  color: "#ffffff",
                },
                button: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  color: "#181318",
                  ":hover": {
                    color: "#181318",
                    "background-color": "#ba1ed4",
                  },
                  "background-color": "#cf21ec",
                  ":focus": {
                    "background-color": "#ba1ed4",
                  },
                  "border-radius": "4px",
                },
                price: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  color: "#ffffff",
                },
                compareAt: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  color: "#ffffff",
                },
                unitPrice: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  color: "#ffffff",
                },
              },
              contents: {
                button: false,
                buttonWithQuantity: true,
              },
              text: {
                button: "Add to cart",
              },
              googleFonts: ["Montserrat"],
            },
            productSet: {
              styles: {
                products: {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px",
                  },
                },
              },
            },
            modalProduct: {
              contents: {
                img: false,
                imgWithCarousel: true,
                button: false,
                buttonWithQuantity: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px",
                  },
                },
                button: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  color: "#181318",
                  ":hover": {
                    color: "#181318",
                    "background-color": "#ba1ed4",
                  },
                  "background-color": "#cf21ec",
                  ":focus": {
                    "background-color": "#ba1ed4",
                  },
                  "border-radius": "4px",
                },
                title: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "bold",
                  "font-size": "26px",
                  color: "#4c4c4c",
                },
                price: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "18px",
                  color: "#4c4c4c",
                },
                compareAt: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  color: "#4c4c4c",
                },
                unitPrice: {
                  "font-family": "Helvetica Neue, sans-serif",
                  "font-weight": "normal",
                  "font-size": "15.299999999999999px",
                  color: "#4c4c4c",
                },
              },
              googleFonts: ["Montserrat"],
              text: {
                button: "Add to cart",
              },
            },
            option: {
              styles: {
                label: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  color: "#ffffff",
                },
                select: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "background-color": "#281f28",
                  color: "#ba1ed4",
                  outline: "none",
                  border: "none",
                },
              },
              googleFonts: ["Montserrat"],
            },
            cart: {
              styles: {
                button: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  color: "#181318",
                  ":hover": {
                    color: "#181318",
                    "background-color": "#ba1ed4",
                  },
                  "background-color": "#cf21ec",
                  ":focus": {
                    "background-color": "#ba1ed4",
                  },
                  "border-radius": "4px",
                },
                title: {
                  color: "#ffffff",
                },
                header: {
                  color: "#ffffff",
                },
                lineItems: {
                  color: "#ffffff",
                },
                subtotalText: {
                  color: "#ffffff",
                },
                subtotal: {
                  color: "#ffffff",
                },
                notice: {
                  color: "#ffffff",
                },
                currency: {
                  color: "#ffffff",
                },
                close: {
                  color: "#ffffff",
                  ":hover": {
                    color: "#ffffff",
                  },
                },
                empty: {
                  color: "#ffffff",
                },
                noteDescription: {
                  color: "#ffffff",
                },
                discountText: {
                  color: "#ffffff",
                },
                discountIcon: {
                  fill: "#ffffff",
                },
                discountAmount: {
                  color: "#ffffff",
                },
                cart: {
                  "background-color": "#281f28",
                },
                footer: {
                  "background-color": "#281f28",
                },
              },
              text: {
                total: "Subtotal",
                button: "Checkout",
              },
              googleFonts: ["Montserrat"],
            },
            toggle: {
              styles: {
                toggle: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  "background-color": "#cf21ec",
                  ":hover": {
                    "background-color": "#ba1ed4",
                  },
                  ":focus": {
                    "background-color": "#ba1ed4",
                  },
                },
                count: {
                  color: "#181318",
                  ":hover": {
                    color: "#181318",
                  },
                },
                iconPath: {
                  fill: "#181318",
                },
              },
              googleFonts: ["Montserrat"],
            },
            lineItem: {
              styles: {
                variantTitle: {
                  color: "#ffffff",
                },
                title: {
                  color: "#ffffff",
                },
                price: {
                  color: "#ffffff",
                },
                fullPrice: {
                  color: "#ffffff",
                },
                discount: {
                  color: "#ffffff",
                },
                discountIcon: {
                  fill: "#ffffff",
                },
                quantity: {
                  color: "#ffffff",
                },
                quantityIncrement: {
                  color: "#ffffff",
                  "border-color": "#ffffff",
                },
                quantityDecrement: {
                  color: "#ffffff",
                  "border-color": "#ffffff",
                },
                quantityInput: {
                  color: "#ffffff",
                  "border-color": "#ffffff",
                },
              },
            },
          },
        });
      });
    }
  }, []);

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
        <DividerTitle title={""} text={[""]} spacing={"small"} />
        <div id="collection-component-1690376698382"></div>
        <Socials />
        <Companies />
      </main>
    </>
  );
};

export default shop;
