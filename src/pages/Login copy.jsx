import React from "react";
import "./css/Login.css";
import axios from "axios";

const Login = (props) => {
  const [loginData, setLoginData] = useState({
    email: props.loginData ? props.loginData.email : "",
    password: props.loginData ? props.loginData.password : "",
  });
  const { email, password } = loginData;
  const loginFunc = async (event) => {
    event.preventDefault();
    const values = [email, password];
    let errorMsg = "";
    console.log(course);

    axios
      .post("http://localhost:8000/api/login", {
        email: loginData.email,
        password: loginData.password,
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
            <h1 className="text-center mb-3">Login</h1>
            <p className="text-center">
              New to our site? Sign up today and start enjoying the benefits of
              being a valued customer.
            </p>
            <form>
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

export default Login;
