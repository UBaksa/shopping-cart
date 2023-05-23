import React, { useContext, useState } from "react";
import ProductCard from "../../components/Card/ProductCard";
import "./Products.css";
import Pagination from "@mui/material/Pagination";
import { AppContext } from "../../context/AppContext";

export default function Products() {
  const { products } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0); //da se podigne skroz na vrh kad se promeni stranica.
  };
  const productPerPage = 12;
  const numOfPages = Math.ceil(products.length / productPerPage);
  // console.log(products);
  return (
    <>
      <div className="card">
        {products
          .map((product) => (
            <ProductCard
              productName={product.title}
              productPrice={product.price}
              productImage={product.imageURL}
              onPress={() => {}}
            />
          ))
          .slice((page - 1) * productPerPage, page * productPerPage)}
      </div>
      <div className="paginacija">
        <Pagination
          size="large"
          shape="rounded"
          color="error"
          count={numOfPages}
          page={page}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
