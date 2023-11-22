import React from "react";
import img1 from "./images/test.jpg";
import img2 from "./images/test2.jpg";
import img3 from "./images/test3.jpg";
import img4 from "./images/test5.jpg";
import img5 from "./images/test7.jpg";
import img6 from "./images/test8.jpg";



import "./Review.css";

function Review() {
  return (
    <section className="review-section">
      <div className='heading'><h1>Our Happy Clients</h1></div>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-deck">
              <div className="card">
                <img
                  src={img1}
                  className="card-img-top"
                  alt="Testimonial 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Rishu & Aditi</h5>
                  <p className="card-text">Working with PerfectPair was an absolute delight! From conceptualization to execution, they orchestrated our wedding flawlessly. Our hearts overflow with gratitude for making our special day truly magical.</p>
                </div>
              </div>
              <div className="card">
                <img
                  src={img2}
                  className="card-img-top"
                  alt="Testimonial 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Aman & Ayushi</h5>
                  <p className="card-text">Choosing PerfectPair was the best decision we made for our wedding. Their meticulous planning and execution left us spellbound. They truly transformed our vision into a breathtaking reality.</p>
                </div>
              </div>
              <div className="card">
                <img
                  src={img3}
                  className="card-img-top"
                  alt="Testimonial 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Aditya & Sweety</h5>
                  <p className="card-text">We were blown away by PerfectPair's dedication and attention to detail. They took care of every aspect, making our wedding an absolute dream. Their team's professionalism made the experience stress-free and joyous.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-deck">
              <div className="card">
                <img
                  src={img4}
                  className="card-img-top"
                  alt="Testimonial 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Shubham & Shruti</h5>
                  <p className="card-text">PerfectPair exceeded our expectations! Their creativity and professionalism made our wedding day unforgettable. Their unwavering support and eye for detail ensured everything was perfect</p>
                </div>
              </div>
              <div className="card">
                <img
                  src={img5}
                  className="card-img-top"
                  alt="Testimonial 5"
                />
                <div className="card-body">
                  <h5 className="card-title">Vishek & Shweta</h5>
                  <p className="card-text">Choosing PerfectPair was a game-changer! Their creativity and attention to detail surpassed our expectations. Their support and flawless execution made our wedding an extraordinary experience.</p>
                </div>
              </div>
              <div className="card">
                <img
                  src={img6}
                  className="card-img-top"
                  alt="Testimonial 6"
                />
                <div className="card-body">
                  <h5 className="card-title">Ankur & Shivani</h5>
                  <p className="card-text">Thanks to PerfectPair, our wedding was picture-perfect! They turned our vision into reality and created moments we'll cherish forever. Their professionalism and dedication made our day splendid.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Review;
