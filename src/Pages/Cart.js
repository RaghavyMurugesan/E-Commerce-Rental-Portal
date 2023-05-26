import React, { useState, useEffect } from "react";
import Image from "mui-image";
import "../Styles/cart.css";
import { Counter } from "./Counter";
import { NavLink } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { differenceInDays } from "date-fns";
import { Button, Stack, TextField, Divider } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import "react-datepicker/dist/react-datepicker.css";
function DateChooser() {
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [dayscount, setdayscount] = useState(0);
  const handlefromDate = (date) => {
    setFromDate(date);
    setToDate(null);
  };

  const handletoDate = (date) => {
    setToDate(date);
    datedifference();
  };
  function datedifference() {
    //if ((fromDate !== null && toDate !== null)){
    var dayscount = differenceInDays(new Date(toDate), new Date(fromDate));
    setdayscount(dayscount);
    console.log(dayscount);
  }
  useEffect(() => {
    datedifference();
  }, [dayscount]);
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
        onChange={handlefromDate}
      />
      <DatePicker
        label="Return"
        renderInput={(params) => <TextField {...params} />}
        value={toDate}
        inputFormat="dd-MM-yyyy"
        mask="__-__-____"
        disablePast
        minDate={fromDate}
        onChange={handletoDate}
      />
      {fromDate && toDate && <h6> No.of days :{dayscount}</h6>}
    </Stack>
  );
}
function Cart({ cart, setCart }) {
  let handleRemove = (index) => {
    let newcart = [...cart];
    console.log(index);
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

        {cart.map((el, index) => (
          <div key={index}>
            <div className="cart">
              <div className="cartcover">
                <Image src={el.image} alt={el.name} />
              </div>
              <div className="cart-content">
                <h4>{el.name}</h4>
                <div className="cart-price">
                  <h6>{el.price}</h6>
                  <Counter cart={cart} index={index} el={el} setCart={setCart} />
                </div>
                <div className="date-picker">
                  <DateChooser />
                </div>
                <DeleteIcon className="delete" onClick={handleRemove} size="large" />
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
