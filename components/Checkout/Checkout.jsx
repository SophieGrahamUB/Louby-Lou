import React, { useEffect, useState } from "react";

const Checkout = ({ basketData, children, className }) => {
  const [line_items, setLine_Items] = useState({});

  useEffect(() => {
    let data = basketData;

    let destructuredBasket =
      data &&
      data?.map((item) => ({
        amount:
          item.ammount === undefined
            ? item.total * 100
            : (item.total / item.ammount) * 100,
        name: item.productName,
        currency: "GBP",
        quantity: item.ammount === undefined ? 1 : item.ammount,
        description:
          item.adults === undefined
            ? item.productName
            : `${item.adults}x Adults, ${item.children}x Children (${item.names})`,
      }));
    setLine_Items(destructuredBasket);
  }, [basketData]);

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return (
    <div>
      <form action={"/api/checkout_session"} method="POST">
        <input name="data" value={JSON.stringify(line_items)} type="hidden"></input>
        <section>
          <button type="submit" className={className}>
            {children}
          </button>
        </section>
      </form>
    </div>
  );
};

export default Checkout;
