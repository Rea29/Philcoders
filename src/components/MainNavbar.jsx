import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import NavbarStudents from "./navbarstudents";
import React, { useState, useEffect } from "react";
import axios from "axios"; //npm install axios --save
import { Link, useNavigate, NavLink } from "react-router-dom";
function samplenav() {
  const [userFullName, setUserFullName] = useState("");
  const [userType, setUserType] = useState("");
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getLoggedUserData();
  }, []);
  function RenderNavbar(user) {
    console.log("RenderNavbar", user);
    if (user.user) {
      return <NavbarStudents name="Alex" />;
    }
    // return <NavBarHome />;
  }
  function getLoggedUserData() {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      axios
        .get("http://localhost:8000/api/user-info", {
          headers,
        })
        .then(function (response) {
          console.log("getLoggedUserData", response.data);
          setUserFullName(response.data.user.name);
          setUserData(response.data);
        });
    }
  }

  return (
    <>{RenderNavbar(userData)}</>
    // {this.state.modalityGraph['nca'] > 0 ?
    // <div className={"chart-container"}>
    //     <Chart
    //         chartType="ColumnChart"
    //         data = { this.state.modalityGraph?this.state.modalityGraph.chartData['units']:emptyDataRows }
    //         options={chartOptions}
    //         graph_id="modalitiesChart"
    //         width="100%"
    //         height="250px"
    //     />
    // </div>
    // : "<span>Else Block</span>"
  );
}

export default samplenav;
