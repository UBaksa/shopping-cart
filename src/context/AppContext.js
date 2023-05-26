import React, { createContext, useState } from "react";
import productsJSON from "../common/products.json";
import { toast } from "react-hot-toast";

const AppContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState(productsJSON);
  const [cart, setCart] = useState([]);
  const addToCart = (id) => {
    if (products.find((product) => product.id === id).quantity === 0) {
      toast.error("There are no product in stock!");
    } else {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            return product;
          }
        })
      );
      setCart((prev) => [
        ...prev,
        {
          ...products.find((product) => product.id === id),
          quantityInCart: 1,
        },
      ]);
      toast.success("Successfully added to cart!");
    }
  };
  const values = { products, setProducts, cart, addToCart }; //ovde stavljamo sve sto hocemo da importamo iz drugih fajlova/
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider };
