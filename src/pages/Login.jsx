import "./css/Login.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";
const Login = (props) => {
  const [loginData, setLoginData] = useState({
    email: props.loginData ? props.loginData.email : "",
    password: props.loginData ? props.loginData.password : "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loginResponseData, setLoginResponseData] = useState([]);

  const { email, password } = loginData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      default:
        setLoginData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };
  const loginFunc = async (event) => {
    event.preventDefault();
    const values = [email, password];
    let errorMsg = "";
    console.log(loginData);
    let headers = {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    setShowError(false);
    setShow(false);

    axios
      .post(
        "http://localhost:8000/api/login",
        {
          email: loginData.email,
          password: loginData.password,
        },
        {
          headers: headers,
        }
      )
      .then(function (response) {
        if (response.data.isError) {
          console.log(response.data);
          setErrorMessage(String(response.data.message));
          setShowError(true);
        } else {
          console.log(response.data);
          setLoginResponseData(response.data);
          localStorage.setItem("token", response.data.token);
          console.log("token ", localStorage.getItem("token"));
          setShow(true);
        }
        // alert(response.data.message);
      })
      .catch(function (error) {
        console.error("Error:", error);
        setErrorMessage(String(error.response.data.message));
        setShowError(true);
      });
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });
  };

  return (
    <div className="container my-2 mb-5 mt-4">
      <div className="row">
        <div className="col-md-8  mx-auto px-3 py-5 bg-light rounded">
          <Alert show={show} variant="success">
            <Alert.Heading>Success</Alert.Heading>
            <p>{loginResponseData.message}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close
              </Button>
            </div>
          </Alert>

          <Alert show={showError} variant="danger">
            <Alert.Heading>Error</Alert.Heading>
            <p>{errorMessage}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button
                onClick={() => setShowError(false)}
                variant="outline-success"
              >
                Close
              </Button>
            </div>
          </Alert>
          <h1 className="text-center mb-3">Login Form</h1>
          <Form onSubmit={loginFunc}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="input-control"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="input-control"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* <Form.Select
                aria-label="Default select example"
                name="user_type"
                value={user_type}
                onChange={handleInputChange}
              >
                <option>Select User Type</option>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
              </Form.Select>
              <br />
              <br /> */}

            <Button variant="primary" type="submit" className="submit-btn">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
