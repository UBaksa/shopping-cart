import React, { createContext, useState } from "react";
import productsJSON from "../common/products.json";
const AppContext = createContext();

function ContextProvider({ children }) {
  const [products, setProducts] = useState(productsJSON);
  const values = { products, setProducts }; //setProducts je i key i value
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
export { AppContext, ContextProvider };
