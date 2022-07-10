import React from "react";
import "../Styles/about.css";

function About() {
  return (
    <section className="about-container">
      <div className="about-img">
        <img
          className="about-image"
          alt="camera"
          src="/Images/equipments.jpg"
        />
      </div>

      <div>
        <h3>
          <span className="display-2"> RENTLY</span> is a Camera, Lighting, and
          Production Supplies rental house that caters to small-to-medium size
          shoots. We do this by teaching, building, and encouraging a community
          of independent filmmakers from diverse backgrounds.
        </h3>
        <br></br>
        <h3>
          {" "}
          We're big supporters of offering equitable opportunities to women,
          LGBT, and marginalized community members, and helping get passion
          projects off the ground.
        </h3>
      </div>
    </section>
  );
}

export default About;
