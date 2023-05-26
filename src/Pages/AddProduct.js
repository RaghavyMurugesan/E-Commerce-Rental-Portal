import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function AddProduct({ product, setProduct }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  return (
    <div>
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
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          onChange={(event) => setDescription(event.target.value)}
        />
        <Button
          onClick={() => {
            const newProduct = {
              name: name,
              brand: brand,
              image: image,
              category: category,
              price: price,
              description: description,
            };
            setProduct([...product, newProduct]);
            navigate("/product");
          }}>
          Add Product
        </Button>
      </Stack>
    </div>
  );
}
