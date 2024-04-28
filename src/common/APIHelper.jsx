import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import SwalMessage from "../common/Swal";
import Validation from "../common/Validation";
import axios from "axios";
var apiDomain = "http://localhost:8000";
let headers = {
  // Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};
let headersWithAuth = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};
const helpers = {
  DeleteCourse: function (id) {
    Swal.fire({
      title: "Delete Course",
      text: "Are you sure do you want to delete this course?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(apiDomain + "/api/delete/course/" + id, {
            headers: headersWithAuth,
          })
          .then(function (response) {
            SwalMessage.CourseDeleted();
          })
          .catch(function (error) {
            console.log("error", error);
            if (error.code == "ERR_NETWORK") {
              SwalMessage.ServerError();
            }
          });
      }
    });
  },
  UpdateCourse: function (data, id) {
    axios
      .put(apiDomain + "/api/update/course/" + id, data, {
        headers: headersWithAuth,
      })
      .then(function (response) {
        console.log(response.data);

        SwalMessage.CourseUpdated();
      })
      .catch(function (error) {
        console.log("error", error);
        if (error.code == "ERR_NETWORK") {
          SwalMessage.ServerError();
        }

        // setErrorMessage(String(error.response.data.message));
        // setShowError(true);
      });
  },
  Courses: function () {
    var res = [];
    return axios.get(apiDomain + "/api/courses", {
      headers: headersWithAuth,
    });
  },
  CourseById: function (id) {
    var res = [];
    return axios.get(apiDomain + "/api/course/" + id, {
      headers: headersWithAuth,
    });
  },
  Categories: function () {
    var res = [];
    return axios.get(apiDomain + "/api/categories", {
      headers: headersWithAuth,
    });
  },
  CreateCourse: function (data) {
    axios
      .post(apiDomain + "/api/create/course", data, {
        headers: headersWithAuth,
      })
      .then(function (response) {
        // localStorage.setItem("token");
        console.log(response.data);
        if (!response.data.isError) {
          SwalMessage.CourseCreated();
        }
      })
      .catch(function (error) {
        console.log("error", error);
        if (error.code == "ERR_NETWORK") {
          SwalMessage.ServerError();
        }

        if (error.response.status == 401) {
          SwalMessage.LoginIncorrect();
        }
      });
  },
  CreateAccount: function (data) {
    axios
      .post(apiDomain + "/api/register", data)
      .then(function (response) {
        if (!response.data.isError) {
          console.log(response.data);
          if (data.user_type == "student") {
            SwalMessage.StudentAccountCreated();
          } else {
            SwalMessage.InstructorAccountCreated();
          }
        }
      })
      .catch(function (error) {
        console.log("error", error);
        if (error.code == "ERR_NETWORK") {
          SwalMessage.ServerError();
        }

        if (error.response.status == 422) {
          //for email already taken
          SwalMessage.EmailExist();
        }

        // setErrorMessage(String(error.response.data.message));
        // setShowError(true);
      });
  },
  Login: function (data) {
    axios
      .post(apiDomain + "/api/login", data, {
        headers: headers,
      })
      .then(function (response) {
        // localStorage.setItem("token");
        console.log(response.data);
        if (!response.data.isError) {
          localStorage.setItem("token", response.data.token);
          SwalMessage.LoginSuccess();
        }
      })
      .catch(function (error) {
        console.log("error", error);
        if (error.code == "ERR_NETWORK") {
          SwalMessage.ServerError();
        }

        if (error.response.status == 401) {
          SwalMessage.LoginIncorrect();
        }
      });
  },
};

export default helpers;
