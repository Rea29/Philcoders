import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";

import React, { useState, useEffect } from "react";
import axios from "axios"; //npm install axios --save

function studentnavbar(props) {
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.clear();
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    axios
      .post("http://localhost:8000/api/logout", null, {
        headers,
      })
      .then(function (response) {
        console.log(response.data);

        window.location = "/";
      })
      .catch(function (error) {
        window.location = "/";
      });
  };
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log("useEffect", props);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // function logout() {
  //   let headers = {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   };
  //   axios
  //     .get("http://localhost:8000/api/logout", {
  //       headers,
  //     })
  //     .then(function (response) {
  //       console.log(response.data);
  //       // localStorage.removeItem("token");
  //     });
  // }
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="text-dark fw-bold" href="/">
          ℘hilCoders
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-5">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/course">Courses</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="" className="text-capitalize">
              {props.name.user.name}
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-primary" onClick={handleClick}>
              Logout
            </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default studentnavbar;
