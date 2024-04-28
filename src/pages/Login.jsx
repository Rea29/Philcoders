import "./css/Login.css";
import axios from "axios";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";
import SwalMessage from "../common/Swal";
import Validation from "../common/Validation";
import APIHelper from "../common/APIHelper";

const Login = (props) => {
  const navigate = useNavigate();
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

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (
      Validation.Empty(loginData.email) ||
      Validation.Email(loginData.email)
    ) {
      SwalMessage.Error("Email", "Please enter a valid email addres!");
      return null;
    } else if (Validation.Empty(loginData.password)) {
      // return null;
      SwalMessage.Error("Password is required!", "");
      return null;
    }
    const values = [email, password];
    APIHelper.Login(loginData);
  };

  return (
    <div className="container my-2 mb-5 mt-4">
      <div className="row">
        <div className="col-md-8  mx-auto px-3 py-5 bg-light rounded">
          <h1 className="text-center mb-3">Login Form</h1>
          <Form onSubmit={loginFunc}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
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
            <div className="mb-3">
              <input
                type="checkbox"
                id="forgetpassword?"
                name="forgetpassword?"
              ></input>
              <label className="m-2">Forget Password?</label>
            </div>
            <Button className=" mb-5 btn btn-primary mt-2" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
