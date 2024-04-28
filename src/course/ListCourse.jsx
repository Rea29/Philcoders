import axios from "axios"; //npm install axios --save
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/ListCourse.css";
import SwalMessage from "../common/Swal";
import Validation from "../common/Validation";
import APIHelper from "../common/APIHelper";
export default function ListUser() {
  const navigate = useNavigate();

  const [Courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);

  function getCourses() {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    APIHelper.Courses().then(function (response) {
      console.log("getCourses", response.data);
      setCourses(response.data);
    });
  }

  const deleteCourse = (id) => {
    APIHelper.DeleteCourse(id);
  };
  return (
    <>
      <div className="row roomfac mt-5">
        <div className="col-1"></div>
        <div className="col-9">
          <h1>Courses List</h1>
        </div>
        <div className="col-2">
          <Link to="/CreateCourse" className="btn btn-success">
            Add Course
          </Link>
        </div>
      </div>
      <div className="row roomfac">
        <div className="col-10">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Instructor</th>
                <th>Category</th>
                <th>Duration</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {Courses.map((course, key) => (
                <tr key={key}>
                  <td>{course.title}</td>
                  <td>{course.description}</td>
                  <td>{course.instructor_name}</td>
                  <td>{course.category_name}</td>
                  <td>
                    {course.durationHours} Hour/s and {course.durationMinutes}{" "}
                    Minute/s{" "}
                  </td>
                  <td>
                    <Link
                      to={`/edit-course/${course.id}`}
                      className="btn btn-success"
                      style={{ marginRight: "10px" }}
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteCourse(course.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
