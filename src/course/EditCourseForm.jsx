import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const CourseForm = (props) => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setcourse] = useState({
    CourseID: props.course ? props.course.CourseID : "",
    InstructorID: props.course ? props.course.InstructorID : "",
    CategoryID: props.course ? props.course.CategoryID : "",
    Name: props.course ? props.course.Name : "",
    Description: props.course ? props.course.Description : "",
    DurationHours: props.course ? props.course.DurationHours : "",
    DurationMinutes: props.course ? props.course.DurationMinutes : "",
    Pic_Url: props.course ? props.course.Pic_Url : "",
    Price: props.course ? props.course.Price : "",
    Ratings: props.course ? props.course.Ratings : "",
  });
  const [editCourseID, setEditCourseID] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [instructorData, setInstructorData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    CourseID,
    InstructorID,
    CategoryID,
    Name,
    Description,
    DurationHours,
    DurationMinutes,
    Pic_Url,
    Price,
  } = course;
  useEffect(() => {
    console.log("courseId", "this the selected course id " + courseId);
    axios
      .post("http://localhost/api/getCourseById.php", {
        CourseID: courseId,
      })
      .then(function (response) {
        console.log("getCourseById", response.data);
        setcourse({
          CourseID: response.data.CourseID,
          InstructorID: response.data.InstructorID,
          CategoryID: response.data.CategoryID,
          Name: response.data.Name,
          Description: response.data.Description,
          DurationHours: response.data.DurationHours,
          DurationMinutes: response.data.DurationMinutes,
          Pic_Url: response.data.Pic_Url,
          Price: response.data.Price,
        });
        setSelectedCourse(response.data);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });

    // getCourses(null);
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost/api/getCategories.php")
      .then((res) => {
        console.log(res);

        setCategoryData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // getCourses(null);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost/api/getInstructor.php")
      .then((res) => {
        console.log(res);

        setInstructorData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // getCourses(null);
  }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const values = [
      CourseID,
      InstructorID,
      CategoryID,
      Name,
      Description,
      DurationHours,
      DurationMinutes,
      Pic_Url,
      Price,
    ];
    let errorMsg = "";
    console.log(course);

    axios
      .post("http://localhost/api/EditCourse.php", {
        CourseID: course.CourseID,
        InstructorID: course.InstructorID,
        CategoryID: course.CategoryID,
        Name: course.Name,
        Description: course.Description,
        DurationHours: course.DurationHours,
        DurationMinutes: course.DurationMinutes,
        Pic_Url: course.Pic_Url,
        Price: course.Price,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.hasError == false) {
          alert(response.data.message);
          navigate("/course-management");
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const course = {
        CourseID,
        InstructorID,
        CategoryID,
        Name,
        Description,
        DurationHours,
        DurationMinutes,
        Pic_Url,
        Price,
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
    if (data.InstructorID == selectedCourse.InstructorID) {
      return (
        <option value={data.InstructorID} key={data.InstructorID} defaultValue>
          {data.Name}
        </option>
      );
    }
    return (
      <option value={data.InstructorID} key={data.InstructorID}>
        {data.Name}
      </option>
    );
  }
  function getSelectedOptionCategory(data) {
    console.log("getSelectedOptionCategory", data);
    if (data.CategoriesID == selectedCourse.CategoryID) {
      return (
        <option value={data.CategoriesID} key={data.CategoriesID} defaultValue>
          {data.CategoryName}
        </option>
      );
    }
    return (
      <option value={data.CategoriesID} key={data.CategoriesID}>
        {data.CategoryName}
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
            <Form.Group controlId="Name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="Name"
                value={Name}
                placeholder="Please enter Name"
                onChange={handleInputChange}
              />
              <br />
            </Form.Group>
            <Form.Group controlId="InstructorID">
              <Form.Label>Instructor</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="InstructorID"
                value={InstructorID}
                onChange={handleInputChange}
              >
                {/* <option value="1">One</option> */}
                {instructorData.map((val) => getSelectedOptionInstructor(val))}
              </Form.Select>
              <br />
            </Form.Group>
            {/* categoryData */}
            <Form.Group controlId="CategoryID">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="CategoryID"
                value={CategoryID}
                onChange={handleInputChange}
              >
                {/* <option>Select Category</option> */}
                {/* <option value="1">One</option> */}
                {/* {categoryData.map((val) => (
                  <option value={val.CategoriesID} key={val.CategoriesID}>
                    {val.CategoryName}
                  </option>
                ))} */}
                {categoryData.map((val) => getSelectedOptionCategory(val))}
              </Form.Select>
              <br />
            </Form.Group>

            <Form.Group controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="Description"
                value={Description}
                placeholder="Please enter Description"
                onChange={handleInputChange}
              />

              <br />
            </Form.Group>
            <Form.Group controlId="DurationHours">
              <Form.Label>DurationHours</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="DurationHours"
                value={DurationHours}
                placeholder="Please enter DurationHours"
                onChange={handleInputChange}
              />

              <br />
            </Form.Group>
            <Form.Group controlId="DurationMinutes">
              <Form.Label>DurationMinutes</Form.Label>
              <Form.Control
                className="input-control"
                type="text"
                name="DurationMinutes"
                value={DurationMinutes}
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
                name="Pic_Url"
                value={Pic_Url}
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
                name="Price"
                value={Price}
                placeholder="Please enter url Price."
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
