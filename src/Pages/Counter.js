import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { RemoveSharp, AddSharp } from "@mui/icons-material";

export function Counter({ cart, index, el, setCart }) {
  const [value, setValue] = useState(1);
  const [count, setCount] = useState(1);
  if (count <= 0) {
    setCount(1);
  }

  useEffect(() => {
    handleChange(el);
  }, [count]);

  const handleChange = (el) => {
    const ind = cart.indexOf(el);
    const arr = cart;
    console.log(arr[ind]);
    const value = arr[ind].price * count;
    setValue(value);
    setCart([...arr]);
    console.log(value);
  };

  return (
    <div className="button-group">
      <ButtonGroup
        variant="contained"
        aria-label="text button group"
        size="small"
        className="btn-group"
      >
        <Button
          onClick={() => {
            setCount((count) => count - 1);
            handleChange(el);
          }}
        >
          {" "}
          <RemoveSharp />{" "}
        </Button>
        <Button variant="outlined">{count}</Button>
        <Button
          onClick={() => {
            setCount((count) => count + 1);
            handleChange(el);
          }}
        >
          {" "}
          <AddSharp />{" "}
        </Button>
      </ButtonGroup>
      <h6>{value}</h6>
    </div>
  );
}
