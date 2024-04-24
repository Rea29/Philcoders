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
    lastname: props.RegistrationData ? props.RegistrationData.lastname : "",
    birthday: props.RegistrationData ? props.RegistrationData.birthday : "",
    contactnumber: props.RegistrationData
      ? props.RegistrationData.contactnumber
      : "",
    email: props.RegistrationData ? props.RegistrationData.email : "",
    password: props.RegistrationData ? props.RegistrationData.password : "",
    user_type: props.RegistrationData ? props.RegistrationData.user_type : "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [RegistrationResponseData, setRegistrationResponseData] = useState([]);
  const {
    name,
    lastname,
    birthday,
    contactnumber,
    email,
    password,
    user_type,
  } = RegistrationData;

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
    const values = [
      name,
      lastname,
      birthday,
      contactnumber,
      email,
      password,
      user_type,
    ];
    let errorMsg = "";
    console.log();
    let headers = {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    setShowError(false);
    setShow(false);

    axios
      .post(
        "http://localhost:8000/api/register",
        {
          name: RegistrationData.name,
          lastname: RegistrationData.lastname,
          birthday: RegistrationData.birthday,
          contactnumber: RegistrationData.contactnumber,
          email: RegistrationData.email,
          password: RegistrationData.password,
          user_type: RegistrationData.user_type,
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
          setRegistrationResponseData(response.data);
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
            <p>{RegistrationResponseData.message}</p>
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
          <div className="container my-2">
            <div className="row">
              <div
                className="col-md-6
           mx-auto px-3 py-5 bg-light rounded"
              >
                <h1 className="text-center mb-3">PHILCODERS</h1>
                <p className="text-center">Online Registration Information!</p>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">
                      First Name:
                    </label>
                    <input
                      type="name"
                      id="name"
                      name="name"
                      className="form-control shadow-none"
                      autoComplete="off"
                      required
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label fw-bold">
                      Last Name:
                    </label>
                    <input
                      type="lastname"
                      id="lastname"
                      name="lastname"
                      className="form-control shadow-none"
                      autoComplete="off"
                      required
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="birthday" className="form-label fw-bold">
                      Birthday:
                    </label>
                    <input
                      type="birthday"
                      id="birthday"
                      name="birthday"
                      className="form-control shadow-none"
                      autoComplete="off"
                      required
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="contactnumber"
                      className="form-label fw-bold"
                    >
                      Contact Number:
                    </label>
                    <input
                      type="contactnumber"
                      id="contactnumber"
                      name="contactnumber"
                      className="form-control shadow-none"
                      autoComplete="off"
                      required
                      placeholder=""
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="emailaddress"
                      className="form-label fw-bold"
                    >
                      Email address:
                    </label>
                    <input
                      type="emailaddress"
                      id="emailaddress"
                      name="emailaddress"
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
                      className="form-control shadow-none"
                      autoComplete="off"
                      required
                    ></input>
                  </div>
                  <Form.Select
                    aria-label="Default select example"
                    name="user_type"
                    value={user_type}
                    onChange={handleInputChange}
                  >
                    <option>Select User Type</option>
                    <option value="student">Student</option>
                    <option value="instructor">Instructor</option>
                    onChange={handleInputChange}
                  </Form.Select>
                  <br />
                  <div className="mb-3">
                    <input
                      type="checkbox"
                      id="forgetpassword?"
                      name="forgetpassword?"
                    ></input>
                    <label className="m-2">Forget Password?</label>
                  </div>

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
