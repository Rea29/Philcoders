import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import SwalMessage from "../common/Swal";
import Validation from "../common/Validation";
import APIHelper from "../common/APIHelper";
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
  const [courseBackUp, setcourseBackUp] = useState({
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
    APIHelper.CourseById(courseId)
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
        setcourseBackUp({
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
        console.log("error", error);
        if (error.code == "ERR_NETWORK") {
          SwalMessage.ServerError();
        }
      });
    // getCourses(null);
  }, []);
  useEffect(() => {
    APIHelper.Categories()
      .then((res) => {
        console.log(res);

        setCategoryData(res.data);
      })
      .catch(function (error) {
        console.log("error", error);
        if (error.code == "ERR_NETWORK") {
          SwalMessage.ServerError();
        }
      });

    // getCourses(null);
  }, []);
  const handleOnSubmit = async (event) => {
    event.preventDefault();

    let errorMsg = "";
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    console.log("courseBackUp, course", courseBackUp, course);

    if (Validation.Compare2Array(courseBackUp, course)) {
      SwalMessage.NoChanges();
      return null;
    }
    if (Validation.Empty(course.title)) {
      SwalMessage.TitleRequired();
      return null;
    } else if (
      Validation.Empty(course.categoryId) ||
      course.categoryId == "Select Category"
    ) {
      SwalMessage.SelectCategory();
      return null;
    } else if (Validation.Empty(course.description)) {
      SwalMessage.DescriptionRequired();
      return null;
    } else if (Validation.Empty(course.durationHours)) {
      SwalMessage.DurationHoursRequired();
      return null;
    } else if (Validation.Empty(course.durationMinutes)) {
      SwalMessage.DurationMinutesRequired();
      return null;
    } else if (Validation.Empty(course.picUrl)) {
      SwalMessage.PicUrlRequired();
      return null;
    } else if (Validation.Empty(course.price)) {
      SwalMessage.PriceRequired();
      return null;
    }
    APIHelper.UpdateCourse(course, courseId);
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
  const getSelectedOptionCategory = (data) => {
    // function getSelectedOptionCategory(data) {
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
  };
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
