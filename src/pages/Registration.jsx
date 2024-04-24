import React from "react";
import "./css/Login.css";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
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
  const { email, password } = RegistrationData;
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

    axios
      .post("http://localhost:8000/api/register", {
        name: RegistrationData.name,
        lastname: RegistrationData.lastname,
        birthday: RegistrationData.birthday,
        contactnumber: RegistrationData.contactnumber,
        email: RegistrationData.email,
        password: RegistrationData.password,
        user_type: RegistrationData.user_type,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });
  };

  return (
    <>
      <div className="container my-2">
        <div className="row">
          <div
            className="col-md-6
           mx-auto px-3 py-5 bg-light rounded"
          >
            <h1 className="text-center mb-3">Registration Form</h1>
            <p className="text-center">
              New to our site? Sign up today and start enjoying the benefits of
              being a valued customer.
            </p>
            <form>
              <Form.Select
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
              <br />
              <div className="mb-3">
                <label htmlFor="emailaddress" className="form-label fw-bold">
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
    </>
  );
};

export default Registration;
