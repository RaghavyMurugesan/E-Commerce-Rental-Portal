import React, { useState } from "react";
import { Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

import InfoIcon from "@mui/icons-material/Info";
export function ProductCard({ item, addToCart }) {
  const { id, name, image, brand, category, price } = item;
  const [button, setButton] = useState();
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <Card className="card">
        <CardMedia
          component="img"
          alt={name}
          src={image}
          className="card-img-top"
        />
        <CardContent className="card-body">
          <h4 className="card-title">{name}</h4>
          {/* <InfoIcon onClick={() => navigate(`/product/${id}`)} /> */}
          <h6>{brand}</h6>
          <p>{category}</p>
          <h3>{price}/day</h3>
        </CardContent>
        <CardActions>
          {button ? (
            <NavLink to={"../cart"}>
              <button
                className="btn btn-warning"
                onClick={() => setButton(!button)}
              >
                View Cart
              </button>
            </NavLink>
          ) : (
            <button
              className="btn btn-info"
              onClick={() => {
                addToCart(item);
                setButton(!button);
              }}
            >
              Add to Cart
            </button>
          )}
        </CardActions>
      </Card>
    </>
  );
}
