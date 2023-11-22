import React from "react";
import { Link } from "react-router-dom";
import "./aboutUs.css"; // Update the CSS file name as needed

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="heading">
        <h1>ABOUT US</h1>
      </div>
      <p>Discover the story behind PerfectPair Wedding Planner</p>

      <div className="about-container">
        <div className="about-card">
          <h2>Our Journey</h2>
          <p>Learn about our inception and growth in the wedding planning industry. From humble beginnings to becoming a trusted name in creating unforgettable wedding experiences, follow our journey.</p>
          <Link to='/journey'>
            <button className="btn-about">
              <span>Explore</span>
            </button>
          </Link>
        </div>

        <div className="about-card">
          <h2>Our Mission</h2>
          <p>Discover our commitment to creating perfect weddings for every couple. Our mission is to curate and execute dream weddings, ensuring every detail reflects the unique story of our clients.</p>
          <Link to="/mission">
            <button className="btn-about">
              <span>Learn More</span>
            </button>
          </Link>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>Explore our vision for the future of wedding planning. We envision setting new standards in the industry, continuously innovating and exceeding expectations to craft unparalleled wedding experiences.</p>
          <Link to="/vision">
            <button className="btn-about">
              <span>Discover</span>
            </button>
          </Link>
        </div>

        <div className="about-card">
          <h2>Our Values</h2>
          <p>Get insights into the values that drive us. Integrity, creativity, attention to detail, and customer satisfaction are at the core of everything we do.</p>
          <Link to="/values">
            <button className="btn-about">
              <span>Explore</span>
            </button>
          </Link>
        </div>

        {/* Add more content sections as needed */}
      </div>
    </section>
  );
};

export default AboutUs;
