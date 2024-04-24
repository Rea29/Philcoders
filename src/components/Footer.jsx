import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="container-fluid py-3 bg-light">
    <div className="row mt-3">
      <div className="col-md-4  d-flex gap-3 justify-content-center"></div>
      <div className="col-md-4 d-flex  justify-content-center gap-2 fs-5">
        <div className="col-sm-12 col-md-6">
          <h2>About</h2>
          <p className="text-justify">
            Philcoders <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help
            the upcoming programmers with the code. Scanfcode focuses on
            providing the most efficient code or snippets as the code wants to
            be simple. We will help programmers build up concepts in different
            programming languages that include C, C++, Java, HTML, CSS,
            Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
          </p>
        </div>

        {
          <div className="d-flex align-items-center justify-content-center text-decoration-none mx-auto py-2">
            <a href="https://www.facebook.com/profile.php?id=61557571280565&mibextid=ZbWKwL">
              <i className="fab fa-facebook text-dark fs-4"></i>
            </a>
            <a href="https://bit.ly/3GpGclc">
              <i className="fab fa-instagram text-dark fs-4 mx-2"></i>
            </a>
            <a href="https://bit.ly/3G0NCKd">
              <i className="fab fa-linkedin text-dark fs-4"></i>
            </a>
            <a href="https://bit.ly/3XubLzN">
              <i className="fab fa-github text-dark fs-4 mx-2"></i>
            </a>
            <a href="https://bit.ly/3i3MY6H">
              <i className="fab fa-twitter text-dark fs-4"></i>
            </a>
          </div>
        }
      </div>
      <div className="col-md-4 text-center">
        <p className="text-sm">Designed and developed By PhilCoders</p>
      </div>
    </div>
  </footer>
);

export default Footer;
