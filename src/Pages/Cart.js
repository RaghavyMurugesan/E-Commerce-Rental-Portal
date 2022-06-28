import React, { useState, useEffect } from "react";
import "../Styles/cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { Button, ButtonGroup } from "@mui/material";
import { RemoveSharp, AddSharp } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function Counter({ cart, index, el, setCart }) {
  const [value, setValue] = useState(1);
  const [total, setTotal] = useState(0);
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
        <Button onClick={() => {setCount(count => count-1); handleChange()}}>
          {" "}
          <RemoveSharp />{" "}
        </Button>
        <Button variant="outlined">{count}</Button>
        <Button onClick={() => {setCount(count => count+1); handleChange()}}>
          {" "}
          <AddSharp />{" "}
        </Button>
      </ButtonGroup>
      <h6>{value}</h6>
    </div>
  );
}
function Cart({ cart, setCart }) {
  let handleRemove = (index) => {
    let newcart = [...cart];
    newcart.splice(index, 1);
    setCart(newcart);
  };
  return (
    <div className="section">
      <header className="lead">
        Your Shopping Cart{" "}
        <span>
          {" "}
          <p className="h6">{cart.length} Item</p>
        </span>

      </header>
      
      {cart.map((el, index) => (
        <div key={index}>
          <div className="cart">
            <Avatar
              className="cartcover"
              src={el.image}
              alt={el.name}
              sx={{ width: 68, height: 68 }}
              variant="square"
            />
            <p>{el.name}</p>
            <h6>{el.price}</h6>
            <Counter cart={cart} index={index} el={el} setCart={setCart} />
            <DeleteIcon
              className="delete"
              onClick={handleRemove}
              size="large"
            />
          </div>
          <Divider />
        </div>
      ))}
      <Button variant="outlined"> <ArrowBackIcon/> Continue Shopping</Button>
      <Button variant="outlined"> Next</Button>

    </div>
  );
}
export default Cart;
