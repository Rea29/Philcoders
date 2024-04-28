import Container from "react-bootstrap/Container";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const helpers = {
  CourseDeleted: function () {
    Swal.fire({
      title: "Deleted!",
      text: "Your course has been deleted.",
      confirmButtonText: "Ok",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  },
  CourseUpdated: function () {
    Swal.fire({
      title: "Course Successfully Updated",
      text: "", //"Please enter a valid email addres!",
      confirmButtonText: "Ok",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = "/course-management";
      }
    });
  },
  NoChanges: function () {
    Swal.fire({
      title: "No Changes",
      text: "There are no changes in the course.", //"Please enter a valid email addres!",
      confirmButtonText: "Ok",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = "/course-management";
      }
    });
  },
  StudentAccountCreated: function () {
    Swal.fire({
      title: "Student Account Successfully Registered",
      text: "Believe in yourself, embrace the journey, and let your curiosity guide you. With dedication and perseverance, you'll turn dreams into reality and reach heights you never thought possible.", //"Please enter a valid email addres!",
      confirmButtonText: "Ok",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = "/Login";
      }
    });
  },
  InstructorAccountCreated: function () {
    Swal.fire({
      title: "Instructor Account Successfully Registered",
      text: "Teachers plant the seeds of knowledge that grow forever in the hearts and minds of their students.", //"Please enter a valid email addres!",
      confirmButtonText: "Ok",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = "/Login";
      }
    });
  },
  DeleteCourse: function () {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  },
  CourseCreated: function () {
    Swal.fire({
      title: "Course Successfully Created",
      text: "", //"Please enter a valid email addres!",
      confirmButtonText: "Ok",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = "/course-management";
      }
    });
  },
  PriceRequired: function () {
    Swal.fire({
      title: "Course price required!", //"Email Invalid",
      text: "", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  PicUrlRequired: function () {
    Swal.fire({
      title: "Image Required!", //"Email Invalid",
      text: "Please add a image url to course.", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  DurationMinutesRequired: function () {
    Swal.fire({
      title: "Course duration(Minutes) is required!", //"Email Invalid",
      text: "", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  DurationHoursRequired: function () {
    Swal.fire({
      title: "Course duration(Hours) is required!", //"Email Invalid",
      text: "", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  DescriptionRequired: function () {
    Swal.fire({
      title: "Course description is required!", //"Email Invalid",
      text: "", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  TitleRequired: function () {
    Swal.fire({
      title: "Course title is required!", //"Email Invalid",
      text: "", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  SelectCategory: function () {
    Swal.fire({
      title: "Please select category!", //"Email Invalid",
      text: "", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  LoginSuccess: function () {
    Swal.fire({
      title: "Login Successful",
      text: "", //"Please enter a valid email addres!",
      confirmButtonText: "Ok",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = "/";
      }
    });
  },
  LoginIncorrect: function () {
    Swal.fire({
      title: "Incorrect Login", //"Email Invalid",
      text: "Email or Password is Incorrect, Please try again!", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  ServerError: function () {
    Swal.fire({
      title: "Server Error", //"Email Invalid",
      text: "Please wait while we fix this problem. Thank you!", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  EmailExist: function () {
    Swal.fire({
      title: "Email address is already taken", //"Email Invalid",
      text: "", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  InvalidEmail: function () {
    Swal.fire({
      title: "Email Invalid", //"Email Invalid",
      text: "Please enter a valid email addres!", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  FullnameRequired: function () {
    Swal.fire({
      title: "Fullname is required!", //"Email Invalid",
      text: "Please enter you full name!", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  PasswordRequired: function () {
    Swal.fire({
      title: "Password is required!", //"Email Invalid",
      // text: "", //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  Error: function (title, text) {
    Swal.fire({
      title: title, //"Email Invalid",
      text: text, //"Please enter a valid email addres!",
      icon: "error",
    });
  },
  ErrorWithRedirect: function (title, text, path) {
    Swal.fire({
      title: title,
      text: text, //"Please enter a valid email addres!",
      confirmButtonText: "Ok",
      icon: "error",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = path;
      }
    });
  },
  Success: function (title, text) {
    Swal.fire({
      title: title, //"Email Invalid",
      text: text, //"Please enter a valid email addres!",
      icon: "success",
    });
  },
  SuccessWithRedirect: function (title, text, path) {
    Swal.fire({
      title: title,
      text: text, //"Please enter a valid email addres!",
      confirmButtonText: "Ok",
      icon: "success",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location = path;
      }
    });
  },
};

export default helpers;
