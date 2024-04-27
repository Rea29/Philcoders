import axios from "axios"; //npm install axios --save
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/ListCourse.css";

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
    axios
      .get("http://localhost:8000/api/courses", { headers })
      .then(function (response) {
        console.log("getCourses", response.data);
        setCourses(response.data);
      });
  }

  const deleteCourse = (id) => {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    axios
      .delete("http://localhost:8000/api/delete/course/" + id, {
        headers,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.hasError == false) {
          console.log("DeleteCourse", response.data);
          alert(response.data.message);
          window.location.reload();
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };
  return (
    <div className="row roomfac">
      <div className="col-10">
        <Link to="/create-course" className="btn btn-success">
          Add Course
        </Link>
        <br />

        <h1>Courses List</h1>
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
  );
}
