import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/esm/Button";

const Shop = () => {
  const [dataBackUp, setDataBackUp] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  function getCourses(category) {
    if (category == null || category == "All") {
      let headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      axios
        // .get("https://realyn.onrender.com/course")
        .get("http://localhost:8000/api/courses", { headers })
        .then((res) => {
          console.log(res);

          setData(res.data);
          setDataBackUp(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get("http://localhost:8000/api/courses")
        // .get("https://realyn.onrender.com/course?category=" + category)
        .then((res) => {
          console.log(res);

          setData(res.data);
          setDataBackUp(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  useEffect(() => {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    axios
      .get("http://localhost:8000/api/categories", { headers })
      .then((res) => {
        console.log(res);

        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    getCourses(null);
  }, []);

  function filterByCategory(category) {
    getCourses(category);
  }
  function searchCourse(search) {
    setData(dataBackUp);
    if (search.length > 0) {
      //
      const filteredProducts = data.filter(
        (obj) =>
          obj.title.toLowerCase().includes(search.toLowerCase()) ||
          obj.description.toLowerCase().includes(search.toLowerCase())
      );
      setData(filteredProducts);
    } else {
      setData(dataBackUp);
    }
    // }
  }
  return (
    <div>
      <Link to="/Course">
        <h1 className=" display-5 fw-bold text-center mt-5" id="CourseList">
          Courses offers!
        </h1>
      </Link>
      <div
        className="row justify-content-center gap-4 mx-auto my-5"
        id="courselist"
      >
        {/*   */}

        {data.map((val) => (
          <div key={val.Courseid} className="card" style={{ width: "18rem" }}>
            <img src={val.picUrl} className="card-img-top mt-2 " alt="" />
            <div className="card-body">
              <h6 className="text-left">{val.title}</h6>
              <h5 className="text-left">{val.description}</h5>
              <h5 className="text-left">₱{val.price}</h5>
              <h5 className="text-left">Instructor: {val.instructor_name}</h5>
              <h5 className="text-left">Category: {val.category_name}</h5>

              <center>
                <Link
                  to="/enrollment"
                  state={val}
                  className="btn btn-primary mt-2"
                >
                  Enroll Now!
                </Link>
              </center>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
