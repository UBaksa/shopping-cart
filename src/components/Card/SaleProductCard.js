import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import { CardMedia } from "@mui/material";
import DeleteButton from "../Button/DeleteButton";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import "./SaleProductCard.css";
import { AppContext } from "../../context/AppContext";
import { useEffect, useState, useContext } from "react";

export default function SaleProductCard({
  id,
  productName,
  productPrice,
  productImage,
  addToCart,
  deleteFromCart,
}) {
  const { cart } = useContext(AppContext);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    if (cart.find((product) => product.id === id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [id, cart]);
  const discountedPrice = productPrice - productPrice / 5;

  return (
    <div className="sale-kartica">
      <Card variant="outlined" sx={{ maxWidth: 450, maxHeigth: 250 }}>
        <p className="total-sale">! TOTAL SALE !</p>
        <CardMedia sx={{ height: 250 }} image={productImage} title="" />
        <Typography
          style={{ height: "40px", width: "200px" }}
          level="h2"
          fontSize="md"
          sx={{ mb: 0.5 }}
        >
          <p style={{ paddingTop: "0.5rem" }}>{productName}</p>
        </Typography>
        <Typography level="body2">
          <p
            style={{
              fontWeight: "bolder",
              color: "black",
              fontSize: "1.3rem",
              // paddingTop: "0.5rem",
            }}
          >
            <u>{discountedPrice} EUR</u>
          </p>
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography level="body3">
              <p
                style={{
                  color: "red",
                  fontWeight: "1000",
                  paddingTop: "0.5rem",
                  fontSize: "0.8rem",
                }}
              >
                Prev. price:
              </p>
            </Typography>
            <Typography fontSize="md" fontWeight="lg">
              <del style={{ color: "gray", fontWeight: "bold" }}>
                {productPrice} EUR
              </del>
            </Typography>
          </div>
          {!isAdded ? (
            <Button
              variant="solid"
              size="sm"
              color="white"
              // style={{ color: "green" }}
              aria-label="Explore Bahamas Islands"
              sx={{ ml: "auto", fontWeight: 700 }}
              onClick={addToCart}
            >
              <p
                style={{
                  color: "#2e3a5b",
                  fontSize: "0.9rem",
                  backgroundColor: "yellow",
                  height: "30px",
                  width: "110px",
                  borderRadius: "1rem",
                  paddingTop: "6px",
                  border: "solid 2px #2e3a5b",
                }}
              >
                ADD TO CART
              </p>
            </Button>
          ) : (
            <DeleteButton style onDelete={deleteFromCart} />
          )}
        </Box>
      </Card>
    </div>
  );
}
