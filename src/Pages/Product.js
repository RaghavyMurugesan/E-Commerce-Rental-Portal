import React, { useState } from "react";
import { productList } from "../data.js";
import { Box, Stack, Chip, TextField, Button } from "@mui/material";
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
function Product({ addToCart, product, setProduct }) {
  const [catItems] = useState(allCatvalues);
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // const [brand, setBrand] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState("");

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
      <Stack direction="row" spacing={2} className="stack">
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
      {/* <div>
        <Stack direction="column">
          Add Product
          <TextField
            id="standard-basic"
            label="Product Name"
            variant="standard"
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Image Url"
            variant="standard"
            onChange={(event) => setImage(event.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Brand"
            variant="standard"
            onChange={(event) => setBrand(event.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Category"
            variant="standard"
            onChange={(event) => setCategory(event.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Price"
            variant="standard"
            onChange={(event) => setPrice(event.target.value)}
          />
          <Button
            onClick={() => {
              const newProduct = {
                name: name,
                brand: brand,
                image: image,
                category: category,
                price: price,
              };
              setProduct([...product, newProduct]);
            }}
          >
            Add Product
          </Button>
        </Stack>
      </div> */}

      <Box className="box">
        {product.map((item, index) => (
          <ProductCard key={index} item={item} addToCart={addToCart} />
        ))}
      </Box>
    </div>
  );
}

export default Product;
