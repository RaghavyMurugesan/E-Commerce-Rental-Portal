import React from "react";
import { Box, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import "../Styles/ProductDetails.css";
export function ProductDetails({ product, addToCart }) {
  const { id } = useParams();
  const selectedProduct = product[id];
  console.log(id);
  return (
    <>
      <div className="detailsContainer">
        <Box className="col-sm-5 col-md-4">
          <img src={selectedProduct.image} alt="selectedProductImage" className="img"></img>
        </Box>
        <div className="detailsContent">
          <section>
            <h2> {selectedProduct.name}</h2>
            <h3>{selectedProduct.price}</h3>{" "}
          </section>
          <h5>{selectedProduct.brand}</h5>
          <p>{selectedProduct.description}</p>

          <Button onClick={() => addToCart(product[id])}>Rent Now</Button>
        </div>
      </div>
      <article>
        Specification
        <table>
          <thead>
            <tr>hello</tr>
            <tr>hello</tr>
            <tr>hello</tr>
          </thead>
        </table>
      </article>
    </>
  );
}
