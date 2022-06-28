import React, { useState } from "react";
import Image from "mui-image";
import "../Styles/cart.css";
import { Counter } from "./Counter";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "react-datepicker/dist/react-datepicker.css";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import differenceInDays from "date-fns/differenceInDays";
import { Button, Stack, TextField, Divider } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";

function DateChooser() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [dayscount, setDaysCount] = useState(0);
  // const differenceInDays = require("date-fns/differenceInDays");
  console.log(fromDate, toDate, differenceInDays);

  //  const diffInDays = differenceInDays(new Date(toDate), new Date(fromDate));
  // setDaysCount(diffInDays)
  //  console.log(diffInDays);
  return (
    <Stack spacing={1} direction="row">
      <DatePicker
        label="Pick-Up"
        renderInput={(params) => <TextField {...params} />}
        value={fromDate}
        inputFormat="dd-MM-yyyy"
        mask="__-__-____"
        disablePast
        minDate={new Date()}
        onChange={(newValue) => {
          setFromDate(newValue);
        }}
      />
      <DatePicker
        label="Return"
        renderInput={(params) => <TextField {...params} />}
        value={toDate}
        inputFormat="dd-MM-yyyy"
        mask="__-__-____"
        disablePast
        minDate={new Date()}
        onChange={(newValue) => {
          setToDate(newValue);
        }}
      />
      <h6> No.of days{dayscount}</h6>
    </Stack>
  );
}
function Cart({ cart, setCart }) {
  
  let handleRemove = (index) => {
    let newcart = [...cart];
    newcart.splice(index, 1);
    setCart(newcart);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="section">
        <header className="lead">
          Your Shopping Cart{" "}
          <span>
            {" "}
            <p className="h6">{cart.length} Item</p>
          </span>
        </header>

        {cart &&
          cart.map((el, index) => (
            <div key={index}>
              <div className="cart">
                <div className="cartcover">
                  <Image src={el.image} alt={el.name} />
                </div>
                <div className="cart-content">
                  <h4>{el.name}</h4>
                  <div className="cart-price">
                    <h6>{el.price}</h6>
                    <Counter
                      cart={cart}
                      index={index}
                      el={el}
                      setCart={setCart}
                    />
                  </div>
                  <div className="date-picker">
                  <DateChooser />
                  </div>
                  <DeleteIcon
                    className="delete"
                    onClick={handleRemove}
                    size="large"
                  />
                </div>
              </div>
              <Divider />
            </div>
          ))}
        <NavLink to={"../product"}>
          <Button variant="outlined">
            {" "}
            <ArrowBackIcon /> Continue Shopping
          </Button>
        </NavLink>
        <Button variant="outlined"> Next</Button>
      </div>
    </LocalizationProvider>
  );
}
export default Cart;
