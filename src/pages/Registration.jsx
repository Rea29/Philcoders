import React from "react";
import "./css/Login.css";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";
import axios from "axios";

const Registration = (props) => {
  const [RegistrationData, setRegistrationData] = useState({
    name: props.RegistrationData ? props.RegistrationData.name : "",
    email: props.RegistrationData ? props.RegistrationData.email : "",
    password: props.RegistrationData ? props.RegistrationData.password : "",
    confirm_password: props.RegistrationData
      ? props.RegistrationData.confirm_password
      : "",
    user_type: props.RegistrationData ? props.RegistrationData.user_type : "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [RegistrationResponseData, setRegistrationResponseData] = useState([]);
  const { name, email, password, confirm_password, user_type } =
    RegistrationData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      default:
        setRegistrationData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };
  const RegistrationFunc = async (event) => {
    event.preventDefault();
    const values = [name, email, password, confirm_password, user_type];

    if (confirm_password != password) {
      alert("Confirm password does not match");
      return null;
    }
    let errorMsg = "";
    console.log();

    setShowError(false);
    setShow(false);

    axios
      .post("http://localhost:8000/api/register", {
        name: RegistrationData.name,
        email: RegistrationData.email,
        password: RegistrationData.password,
        password_confirmation: RegistrationData.confirm_password,
        user_type: RegistrationData.user_type,
      })
      .then(function (response) {
        if (response.data.isError) {
          console.log(response.data);
          setErrorMessage(String(response.data.message));
          setShowError(true);
        } else {
          console.log(response.data);
          setRegistrationResponseData(response.data);
          setShow(true);
          window.location = "/login";
        }
        alert(response.data.message);
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
    <div className="container my-2">
      <div className="row">
        <div className="col-md-8  mx-auto px-3 py-5 bg-light rounded">
          <div className="container my-2">
            <div className="row">
              <div
                className="col-md-6
           mx-auto px-3 py-5 bg-light rounded"
              >
                <h1 className="text-center mb-3">PHILCODERS</h1>
                <p className="text-center">Online Registration Information!</p>
                <form onSubmit={RegistrationFunc}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">
                      Full Name:
                    </label>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      className="form-control shadow-none"
                      autoComplete="off"
                      required
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className="form-control shadow-none"
                      autoComplete="off"
                      required
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-bold">
                      Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      className="form-control shadow-none"
                      autoComplete="off"
                      required
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-bold">
                      Confirm Password:
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="confirm_password"
                      value={confirm_password}
                      onChange={handleInputChange}
                      className="form-control shadow-none"
                      autoComplete="off"
                      required
                      placeholder=""
                    />
                  </div>
                  <label htmlFor="password" className="form-label fw-bold">
                    Login as:
                  </label>
                  <Form.Select
                    aria-label="Default select example"
                    name="user_type"
                    value={user_type}
                    onChange={handleInputChange}
                  >
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                  </Form.Select>
                  <br />
                  {/* <div className="mb-3">
                    <input
                      type="checkbox"
                      id="forgetpassword?"
                      name="forgetpassword?"
                    ></input>
                    <label className="m-2">Forget Password?</label>
                  </div> */}

                  <button type="submit" className="btn btn-primary mt-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
