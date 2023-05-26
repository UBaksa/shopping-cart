import React, { useContext, useState } from "react";
import ProductCard from "../../components/Card/ProductCard";
import "./Products.css";
import Pagination from "@mui/material/Pagination";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-hot-toast";

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
              key={product.id}
              id={product.id}
              productName={product.title}
              productPrice={product.price}
              productImage={product.imageURL}
              addToCart={() => {
                addToCart(product.id);
              }}
              deleteFromCart={() => {
                toast.success("Successfully deleted from cart!");
              }}
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
