import React from "react";
import "./css/Login.css";
const Login = () => {
  return (
    <>
      <div className="container my-2 mb-5 mt-4">
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
