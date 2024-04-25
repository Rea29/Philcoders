import React from "react";
import Image from "react-bootstrap/Image";
import pic10 from "../images/pic10.jpg";
import pic11 from "../images/pic11.jpg";

import "./css/About.css";
const About = () => (
  <div className="bg-light">
    <div className="mt-5 container mb-5">
      <div className="row g-4 py-2 align-items-center">
        <div className="col-md-4 text-center">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww"
            className="img-fluid rounded"
            alt="about pic"
            loading="lazy"
            // width={300}
          />
        </div>
        <div className="col-md-8">
          <h1 className="display-5 fw-bold  mb-2">About Us</h1>
          <p>
            PhilCoders is an filipino online interactive platform that offers
            online coding classes in 12 different programming languages
            including Python, Java, Go, JavaScript, Ruby, SQL, C++, C#, and
            Swift, as well as markup languages HTML and CSS.
          </p>
          <p>
            PhilCoders is an online learning platform offering 100% self-guided
            coding courses. Whether you're a tech newbie or a seasoned
            professional looking to expand your programming knowledge, you can
            pursue a PhilCoders bootcamp to help sharpen your skills with
            hands-on coding exercises, projects and quizzes.
          </p>
          <h5 className="fw-bold mb-4 mt-4">Founders:</h5>
          <div className="img-founders mb-5 mx-5">
            <Image className="img-founder" src={pic10} />
            <p className=" text-founder fw-bold mx-2">Mrs. Realyn Damasco</p>
            <Image className="img-founder" src={pic11} />
            <p className="text-founder fw-bold mx-2">Mr. Mar Jayson Manzano</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
