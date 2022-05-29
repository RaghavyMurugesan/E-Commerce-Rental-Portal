import { React, useState } from "react";
import { items } from "../data.js";
import { Box, Card, CardMedia, CardActions, CardContent } from "@mui/material";
function Product() {
  const [cart, setCart] = useState([]);
  function addToCart(item) {
    console.log(item);
    setCart([...cart, item]);
    console.log(cart);
  }
  return (
    <Box className="box">
      {items.map((item, index) => (
        <Card className="card" key={index} item={item}>
          <CardMedia
            component="img"
            alt={item.name}
            src={item.image}
            className="card-img-top"
          />
          <CardContent className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <h6>{item.brand}</h6>
            <p>{item.category}</p>
            <h3>{item.price}/day</h3>
          </CardContent>
          <CardActions>
            <button
              className="btn btn-info"
              // item={item}
              onClick={addToCart(item)}
            >
              Add to Cart
            </button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default Product;
