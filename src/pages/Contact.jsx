import React from "react";
import "./css/Contact.css";

const Contact = () => {
  return (
    <div className=" container my-2 mb-5 mt-4">
      <div className="row">
        <div className="col-md-6 mx-auto px-3 py-5 bg-light rounded">
          <h1 className="text-center mb-3">Contact Us</h1>
          <p className="text-center">
            Your inquiries are important to us, and we strive to respond
            promptly and effectively to ensure your satisfaction.
          </p>
          <form method="post" action="https://formspree.io/f/mayzyzov">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email Address:
              </label>
              <input
                type="email"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-bold">
                Leave your comments:
              </label>
              <textarea
                className="form-control shadow-none"
                rows={5}
                name="message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
