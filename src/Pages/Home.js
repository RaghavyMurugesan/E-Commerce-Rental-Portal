import React from "react";
import { stepdata } from "../data";
import { Grid, SvgIcon } from "@mui/material";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="text">
          <h1 className="display-3">
            <span>Your Passion </span> <br></br> is Capturing <br></br>Great
            Moment
          </h1>
          <br></br>
          <h2 className="display-5">So its Ours..!!</h2>
          <br></br>
          <ul>
            <li>Rent</li>
            <li>Click</li>
            <li>Shoot</li>
            <li>Love</li>
          </ul>
        </div>
        <div>
          <img className="home-image" alt="camera" src="/Images/camera1.jpg" />
        </div>
      </section>
      <div>
        <div className="rent-head">
          <span>HOW IT WORKS</span>
          <h2>Rent in 4 Steps</h2>
        </div>
        <Grid container spacing={1}>
          {" "}
          {stepdata.map((st, index) => (
            <Grid item xs={6} sm={4} md={2} lg={2} key={index} className="step">
              <div className="title">
                {" "}
                <SvgIcon sx={{ fontSize: 32 }} className="st-icon">
                  {st.icon}
                </SvgIcon>{" "}
                &nbsp; &nbsp;
                <h6 className="function">{st.function}</h6>
                <p className="step-des"> {st.description}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Home;
