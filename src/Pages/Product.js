import React, { useState } from "react";
import { productList } from "../data.js";
import { Box, Stack, Chip } from "@mui/material";
import { ProductCard } from "../components/ProductCard.js";
const allCatvalues = [
  ...new Set(
    productList.map((el) => {
      return el.category;
    })
  ),
  "all",
];
console.log(allCatvalues);
function Product({ addToCart }) {
  const [product, setProduct] = useState(productList);
  const [catItems] = useState(allCatvalues);
  const filterMenu = (category) => {
    if (category === "all") {
      setProduct(productList);
      return;
    }
    const updatedItems = productList.filter((curEl) => {
      return curEl.category === category;
    });
    setProduct(updatedItems);
    console.log(updatedItems);
  };
  return (
    <div>
      <Stack direction="row" spacing={2} className='stack' >
        {catItems.map((catEl, index) => (
          <Chip
            label={catEl}
            key={index}
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() => filterMenu(catEl)}
          />
        ))}
      </Stack>

      <Box className="box">
        {product.map((item, index) => (
          <ProductCard key={index} item={item} addToCart={addToCart} />
        ))}
      </Box>
    </div>
  );
}

export default Product;
