import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import "./App.css";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Course from "./course/Course";
import Enrollment from "./pages/Enroll";
import CourseManagement from "./pages/CourseManagement";
import CourseList from "./components/CourseList";
import axios from "axios"; //npm install axios --save
import EditCourse from "./components/EditCourse";
import ListCourse from "./course/ListCourse";
import CourseForm from "./components/CourseForm";
import Carousel from "./pages/Carousel";
import EditCourseForm from "./course/EditCourseForm";
import CreateCourse from "./course/CreateCourse";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";

function App() {
  // const names = ["Home", "About"];
  // const [userFullName, setUserFullName] = useState("");
  // const [userType, setUserType] = useState("");
  const [userData, setUserData] = useState([]);
  const [filteredRoute, setFilteredRoute] = useState([]);

  useEffect(() => {
    getLoggedUserData();
  }, []);
  const getLoggedUserData = () => {
    //function getLoggedUserData() {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    if (localStorage.getItem("token")) {
      axios
        .get("http://localhost:8000/api/user-info", {
          headers,
        })
        .then(function (response) {
          var temp = new Array();
          if (
            response.data.user.ModuleAccess != "" ||
            response.data.user.ModuleAccess != null ||
            typeof response.data.user.ModuleAccess != "undefined"
          ) {
            // var str = "Home,About";

            temp = response.data.user.ModuleAccess.split(",");
          }
          temp.push("Login", "Register", "Home", "About");
          console.log(temp);
          const routesComponents = [
            {
              name: "Home",
              path: "/",
              component: (
                <>
                  <Navbar Logged={response.data} />
                  <Home />
                  <Footer />
                </>
              ),
            },
            {
              name: "About",
              path: "/About",
              component: (
                <>
                  <Navbar Logged={response.data} />
                  <About />
                  <Footer />
                </>
              ),
            },
            {
              name: "Login",
              path: "/Login",
              component: (
                <>
                  <Navbar Logged={response.data} />
                  <Login />
                  <Footer />
                </>
              ),
            },
            {
              name: "Register",
              path: "/Registration",
              component: (
                <>
                  <Navbar Logged={response.data} />
                  <Registration />
                  <Footer />
                </>
              ),
            },
            {
              name: "Contact",
              path: "/Contact",
              component: (
                <>
                  <Navbar Logged={response.data} />
                  <Contact />
                  <Footer />
                </>
              ),
            },
            {
              name: "CourseManagement",
              path: "/Course-Management",
              component: (
                <>
                  <Navbar Logged={response.data} />
                  <CourseManagement />
                  <Footer />
                </>
              ),
            },
            {
              name: "EditCourse",
              path: "/Edit-Course/:courseId",
              component: (
                <>
                  <Navbar Logged={response.data} />
                  <EditCourseForm />
                  <Footer />
                </>
              ),
            },
            {
              name: "CreateCourse",
              path: "/CreateCourse",
              component: (
                <>
                  <Navbar Logged={response.data} />
                  <CreateCourse />
                  <Footer />
                </>
              ),
            },
          ];
          const filtered = routesComponents.filter((item) => {
            return temp.includes(item.name);
          });
          setFilteredRoute(filtered);
          console.log("filteredRoute", filtered);
        });
    }
  };

  // You can declare this in `App.js`, but it might
  // be better to move it to its own file.
  return (
    <BrowserRouter>
      <Routes>
        {filteredRoute.map((x, key) => (
          <Route
            path={x.path}
            forceRefresh={true}
            element={x.component}
            key={key}
          />
        ))}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/" forceRefresh={true} element={<Home />} />
      <Route path="/create-course-example" element={<CourseForm />} />
      <Route path="/create-course" element={<CreateCourse />} />
      <Route path="/edit-course/:courseId" element={<EditCourseForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/course" element={<Course />} />
      <Route path="/enrollment" element={<Enrollment />} />
      <Route path="/courselist" element={<CourseList />} />
      <Route path="/ListCourse" element={<ListCourse />} />
      <Route path="/CreateCourse" element={<CreateCourse />} />
      <Route path="/EditCourse" element={<EditCourse />} />
      <Route path="/course-management" element={<CourseManagement />} />
      <Route path="/Carousel" element={<Carousel />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} /> */}
        {/* <Route path="/MainNavbar" element={<MainNavbar />} />
      <Route path="/NavbarInstructor" element={<NavbarInstructor />} />
      <Route path="/NavbarStudents" element={<NavbarStudents />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
