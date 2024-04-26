import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const CourseForm = (props) => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setcourse] = useState({
    categoryId: props.course ? props.course.categoryId : "",
    title: props.course ? props.course.title : "",
    description: props.course ? props.course.description : "",
    durationHours: props.course ? props.course.durationHours : "",
    durationMinutes: props.course ? props.course.durationMinutes : "",
    picUrl: props.course ? props.course.picUrl : "",
    price: props.course ? props.course.price : "",
  });
  const [editCourseId, setEditCourseId] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [instructorData, setInstructorData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
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
  } = course;
  useEffect(() => {
    console.log("courseId", "this the selected course id " + courseId);
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    axios
      .get("http://localhost:8000/api/course/" + courseId, { headers })
      .then(function (response) {
        console.log("getcoursebyid", response.data);
        setcourse({
          categoryId: response.data.categoryId,
          title: response.data.title,
          description: response.data.description,
          durationHours: response.data.durationHours,
          durationMinutes: response.data.durationMinutes,
          picUrl: response.data.picUrl,
          price: response.data.price,
        });
        setSelectedCourse(response.data);
      })
      .catch(function (error) {
        console.error("getcoursebyid Error:", error);
      });

    // getCourses(null);
  }, []);
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

        setCategoryData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // getCourses(null);
  }, []);
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
    ];
    let errorMsg = "";
    console.log(course);
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    axios
      .put(
        "http://localhost:8000/api/update/course/" + courseId,
        {
          categoryId: course.categoryId,
          title: course.title,
          description: course.description,
          durationHours: course.durationHours,
          durationMinutes: course.durationMinutes,
          picUrl: course.picUrl,
          price: course.price,
        },
        { headers }
      )
      .then(function (response) {
        console.log("update/course/", response.data);
        if (response.data.hasError == false) {
          alert(response.data.message);
          navigate("/course-management");
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.error("update/course/ Error:", error);
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
  function getSelectedOptionInstructor(data) {
    if (data.instructorId == selectedCourse.instructorId) {
      return (
        <option value={data.instructorId} key={data.InstructorID} defaultValue>
          {data.Name}
        </option>
      );
    }
    return (
      <option value={data.instructorId} key={data.instructorId}>
        {data.Name}
      </option>
    );
  }
  function getSelectedOptionCategory(data) {
    console.log("getSelectedOptionCategory", data);
    if (data.id == selectedCourse.categoryId) {
      return (
        <option value={data.id} key={data.id} defaultValue>
          {data.category_name}
        </option>
      );
    }
    return (
      <option value={data.id} key={data.id}>
        {data.category_name}
      </option>
    );
  }
  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-8  mx-auto px-3 py-5 bg-light rounded">
          <h1 className="text-center mb-3"> Course Management</h1>

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

            <Form.Group controlId="categoryId">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="categoryId"
                value={categoryId}
                onChange={handleInputChange}
              >
                {categoryData.map((val) => getSelectedOptionCategory(val))}
              </Form.Select>
              <br />
            </Form.Group>

            <Form.Group controlId="description">
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
              <Form.Label>DurationHours</Form.Label>
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
            <Form.Group controlId="durationMinutes">
              <Form.Label>DurationMinutes</Form.Label>
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
            <Form.Group controlId="picUrl">
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
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="price"
                value={price}
                placeholder="Please enter Price."
                onChange={handleInputChange}
              />

              <br />
            </Form.Group>

            <Button variant="primary" type="submit" className="submit-btn">
              Save
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
