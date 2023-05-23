import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";

export default function ProductCard({
  productName,
  productPrice,
  productImage,
  onPress,
}) {
  return (
    <Card sx={{ width: 400, height: 450 }}>
      <img
        style={{ height: 300, width: 400, objectFit: "cover" }}
        src={productImage}
        alt="product"
      />
      <CardContent>
        <div style={{ height: 70 }}>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
        </div>
        <div className="description">
          <Typography
            variant="body1"
            color="text.primary"
            size="large"
            fontSize={20}
            fontWeight={600}
          >
            Price: {productPrice} EUR
          </Typography>
          <Button
            size="medium"
            variant="outlined"
            color="success"
            onClick={onPress}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
