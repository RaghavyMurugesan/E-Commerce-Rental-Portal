import React from "react";
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
        <div >
          <img className="home-image" alt="camera" src="/Images/camera1.jpg" />
        </div>
      </section>
      <div className="container">
        <form action="" className="d-flex">
          <div className="form-group">
            <span>Location</span>

            <input type="search" id="location" className="form-control" />
          </div>
          <div className="form-group">
            <span>Pick-Up Date</span>
            <input type="date" id="pickup" className="form-control" />{" "}
          </div>
          <div className="form-group">
            <span>Return Date</span>
            <input type="date" id="return" className="form-control" />
          </div>
          <div className="align-self-center form-group">
            <input type="submit" className=" btn btn-primary form-control" />
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
