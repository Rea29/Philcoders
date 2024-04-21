import axios from "axios"; //npm install axios --save
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();

  const [Courses, setCourses] = useState([]);
  useEffect(() => {
    getCourses();
  }, []);

  function getCourses() {
    axios
      .get("http://localhost/api/getAllCourses.php")
      .then(function (response) {
        console.log(response.data);
        setCourses(response.data);
      });
  }

  const deleteUser = (id) => {
    axios
      .post("http://localhost/api/DeleteCourse.php", {
        CourseID: id,
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data.hasError == false) {
          console.log("DeleteCourse", response.data);
          alert(response.data.message);
          getCourses();
        } else {
          alert(response.data.message);
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };
  return (
    <div className="row">
      <div className="col-12">
        <Link to="/create-course" className="btn btn-success">
          Add Course
        </Link>
        <h1>List Users</h1>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Instructor</th>
              <th>Category</th>
              <th>Duration</th>
              <th>Ratings</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Courses.map((course, key) => (
              <tr key={key}>
                <td>{course.Name}</td>
                <td>{course.Description}</td>
                <td>{course.InstructorName}</td>
                <td>{course.CategoryName}</td>
                <td>
                  {course.DurationHours} Hour/s and {course.DurationMinutes}{" "}
                  Minute/s{" "}
                </td>
                <td>{course.Ratings}</td>
                <td>
                  <Link
                    to={`/edit-course/${course.CourseID}`}
                    className="btn btn-success"
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(course.CourseID)}
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
