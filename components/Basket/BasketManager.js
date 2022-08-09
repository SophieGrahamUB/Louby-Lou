import React, { useEffect, useState } from "react";

const BasketContext = React.createContext({});

const BasketProvider = ({ children }) => {
  const [contents, setContents] = useState([]);

  const value = {
    contents,
    setContents,
  };

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("Cart"))?.length > 0) {
      setContents(JSON.parse(sessionStorage.getItem("Cart")));
    }
  }, []);

  return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>;
};

const BasketConsumer = ({ children }) => {
  return (
    <BasketContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error("BasketConsumer must be used within BasketProvider");
        }
        return children(context);
      }}
    </BasketContext.Consumer>
  );
};

const useBasket = () => {
  const context = React.useContext(BasketContext);
  if (context === undefined)
    throw new Error("useBasket must be used within BasketProvider");
  return context;
};

export { BasketProvider, BasketConsumer, useBasket };
