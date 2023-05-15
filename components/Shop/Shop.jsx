import React from "react";
import styles from "./Shop.module.scss";

const Shop = () => {
  if (typeof window !== "undefined") {
    console.log("Build Shop Fired");
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
        domain: `${
          process.env.REACT_APP_SHOPIFY_DOMAIN === undefined
            ? "16b34b.myshopify.com"
            : process.env.REACT_APP_SHOPIFY_DOMAIN
        }`,
        storefrontAccessToken: `${
          process.env.REACT_APP_SHOPIFY_KEY === undefined
            ? "d2127c6cccae198e3d73d220018735fe"
            : process.env.REACT_APP_SHOPIFY_KEY
        }`,
      });
      ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent("collection", {
          id: "443993325844",
          node: document.getElementById("collection-component-1683408784673"),
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
                },
                button: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  ":hover": {
                    "background-color": "#be41c1",
                  },
                  "background-color": "#d348d6",
                  ":focus": {
                    "background-color": "#be41c1",
                  },
                  "border-radius": "17px",
                },
                price: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                },
                compareAt: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                },
                unitPrice: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
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
                  ":hover": {
                    "background-color": "#be41c1",
                  },
                  "background-color": "#d348d6",
                  ":focus": {
                    "background-color": "#be41c1",
                  },
                  "border-radius": "17px",
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
                },
                select: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                },
              },
              googleFonts: ["Montserrat"],
            },
            cart: {
              styles: {
                button: {
                  "font-family": "Montserrat, sans-serif",
                  "font-weight": "bold",
                  ":hover": {
                    "background-color": "#be41c1",
                  },
                  "background-color": "#d348d6",
                  ":focus": {
                    "background-color": "#be41c1",
                  },
                  "border-radius": "17px",
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
                  "background-color": "#d348d6",
                  ":hover": {
                    "background-color": "#be41c1",
                  },
                  ":focus": {
                    "background-color": "#be41c1",
                  },
                },
              },
              googleFonts: ["Montserrat"],
            },
          },
        });
      });
    }
  }

  return (
    <div className={styles.shopContainer}>
      <div id="collection-component-1683408784673"></div>
    </div>
  );
};

export default Shop;
