import React from "react";
import { Link } from "react-router-dom";
import Course from "../course/Course";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import "./css/Home.css";
const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item className="position-relative">
          <div className="carousel-overlay"></div>
          <img className="carousel-img" src={pic1} />
          <Carousel.Caption>
            <h3>
              You've started a journey where every step forward is a triumph.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <div className="carousel-overlay"></div>
          <img className="carousel-img" src={pic2} />
          <Carousel.Caption>
            <h3>
              Challenges may arise, but remember, they are the raw material for
              growth and resilience.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="position-relative">
          <div className="carousel-overlay"></div>
          <img className="carousel-img" src={pic3} />
          <Carousel.Caption>
            <h3>
              Challenges may arise, but remember, they are the raw material for
              growth and resilience.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section className="d-flex flex-column text-center mt-5" id="home">
        <h1 className="display-4 fw-bold">WELCOME TO ℘hilCoders </h1>
        <p className="fs-4 fw-bold">Code Your Dreams Into Reality!</p>
        <Link to="/course">
          <button className="btn btn-primary mt-2">GET STARTED NOW!</button>
        </Link>
      </section>
      <Course />
    </>
  );
};

export default Home;
