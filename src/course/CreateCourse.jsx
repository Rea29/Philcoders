import React, { useEffect, useState } from "react";

import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const CourseForm = (props) => {
  const navigate = useNavigate();
  const [course, setcourse] = useState({
    instructorId: props.course ? props.course.instructorId : "",
    categoryId: props.course ? props.course.categoryId : "",
    title: props.course ? props.course.title : "",
    Name: props.course ? props.course.Name : "",
    description: props.course ? props.course.description : "",
    durationHours: props.course ? props.course.durationHours : "",
    durationMinutes: props.course ? props.course.durationMinutes : "",
    picUrl: props.course ? props.course.picUrl : "",
    price: props.course ? props.course.price : "",
    status: props.course ? props.course.status : "",
  });
  const [instructorIdData, setinstructorIdData] = useState([]);
  const [categoryData, setcategoryData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    instructorId,
    categoryId,
    title,
    description,
    durationHours,
    durationMinutes,
    picUrl,
    price,
    status,
  } = course;
  useEffect(() => {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    console.log(localStorage.getItem("token"));

    axios
      .get("http://localhost:8000/api/categories", {
        headers,
      })
      .then((res) => {
        console.log(res);

        setcategoryData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // getCourses(null);
  }, []);

  // useEffect(() => {
  //   let headers = {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   };
  //   console.log(localStorage.getItem("token"));

  //   axios
  //     .get("http://localhost:8000/api/instructor", {
  //       headers,
  //     })

  //     .then((res) => {
  //       console.log("getInstructor", res);

  //       setInstructorData(res.data);
  //     })
  //     .catch((error) => {
  //       console.log("getInstructor error", error);
  //     });

  //   // getCourses(null);
  // }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const values = [
      instructorId,
      categoryId,
      title,
      description,
      durationHours,
      durationMinutes,
      picUrl,
      price,
      status,
    ];
    let errorMsg = "";
    console.log(course);
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    axios
      .post(
        "http://localhost:8000/api/create/course",
        {
          categoryId: course.categoryId,
          title: course.title,
          description: course.description,
          durationHours: course.durationHours,
          durationMinutes: course.durationMinutes,
          picUrl: course.picUrl,
          price: course.price,
        },
        {
          headers,
        }
      )
      .then(function (response) {
        console.log("http://localhost:8000/api/create/course", response.data);
        if (response.data.instructorId > 0) {
          alert("Course successfully created");
          navigate("/course-management");
        }
      })
      .catch(function (error) {
        console.error(
          "http://localhost:8000/api/create/course",
          "Error:",
          error
        );
      });
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const course = {
        categoryId,
        title,
        description,
        durationHours,
        durationMinutes,
        picUrl,
        price,
      };
      props.handleOnSubmit(course);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setcourse((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;

      default:
        setcourse((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-8  mx-auto px-3 py-5 bg-light rounded">
          <h1 className="text-center mb-3"> Create Course</h1>

          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="title"
                value={title}
                placeholder="Please enter title"
                onChange={handleInputChange}
              />
              <br />
            </Form.Group>
            {/* <Form.Group controlId="InstructorID">
              <Form.Label>Instructor</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="InstructorID"
                value={InstructorID}
                onChange={handleInputChange}
              >
                <option>Select Instructor</option> */}
            {/* <option value="1">One</option> */}
            {/* {instructorData.map((val) => (
              <option value={val.id} key={val.id}>
                {val.name}
              </option>
            ))} */}
            {/* </Form.Select>
              <br />
            </Form.Group> */}
            {/* categoryData */}
            <Form.Group controlId="instructorId">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="categoryId"
                value={categoryId}
                onChange={handleInputChange}
              >
                <option>Select Category</option>
                {/* <option value="1">One</option> */}
                {categoryData.map((val) => (
                  <option value={val.id} key={val.id}>
                    {val.category_name}
                  </option>
                ))}
              </Form.Select>
              <br />
            </Form.Group>
            <Form.Group controlId="durationHours">
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="description"
                value={description}
                placeholder="Please enter description"
                onChange={handleInputChange}
              />

              <br />
            </Form.Group>

            <Form.Group controlId="durationHours">
              <Form.Label>Duration Hours</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="durationHours"
                value={durationHours}
                placeholder="Please enter DurationHours"
                onChange={handleInputChange}
              />

              <br />
            </Form.Group>
            <Form.Group controlId="DurationMinutes">
              <Form.Label>Duration Minutes</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="durationMinutes"
                value={durationMinutes}
                placeholder="Please enter DurationMinutes"
                onChange={handleInputChange}
              />

              <br />
            </Form.Group>
            <Form.Group controlId="Pic_Url">
              <Form.Label>Picture Url</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="picUrl"
                value={picUrl}
                placeholder="Please enter url pic."
                onChange={handleInputChange}
              />

              <br />
            </Form.Group>
            <Form.Group controlId="Price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="price"
                value={price}
                placeholder="Please enter url Price."
                onChange={handleInputChange}
              />

              <br />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
