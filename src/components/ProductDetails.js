import React from "react";
import { Box, Button } from "@mui/material";
import { useParams, NavLink } from "react-router-dom";
import "../Styles/ProductDetails.css";
import NotFoundPage from "../Pages/NotFoundPage";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
export function ProductDetails({ product, addToCart }) {
  const { id } = useParams();
  const selectedProduct = product[id];
  // const navigate = useNavigate();
  if (!selectedProduct) {
    return <NotFoundPage />;
  }
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
          <Button variant="contained" onClick={() => addToCart(product[id])}>
            Rent Now
          </Button>
        </div>
      </div>
      <NavLink to={"../product"}>
        <Button variant="outlined" startIcon={<ChevronLeftIcon />}>
          Back to Product
        </Button>
      </NavLink>
    </>
  );
}
