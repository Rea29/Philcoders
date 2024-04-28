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
  const [isLoading, setLoading] = useState(true);
  // var userData = [];
  useEffect(() => {
    // getLoggedUserData();
    runApi();
    renderRoutes();
  }, [isLoading]);
  const renderRoutes = () => {
    var temp = new Array();
    if (typeof userData.user != "undefined") {
      if (
        userData.user.ModuleAccess != "" ||
        userData.user.ModuleAccess != null ||
        typeof userData.user.ModuleAccess != "undefined"
      ) {
        // var str = "Home,About";

        temp = userData.user.ModuleAccess.split(",");
      }
    }

    temp.push("Login", "Register", "Home", "About");
    console.log(temp);
    console.log("userData", userData);
    const routesComponents = [
      {
        name: "Home",
        path: "/",
        component: (
          <>
            <Navbar Logged={userData} />
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
            <Navbar Logged={userData} />
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
            <Navbar Logged={userData} />
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
            <Navbar Logged={userData} />
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
            <Navbar Logged={userData} />
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
            <Navbar Logged={userData} />
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
            <Navbar Logged={userData} />
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
            <Navbar Logged={userData} />
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
  };
  const runApi = async () => {
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
          console.log("http://localhost:8000/api/user-info", response.data);
          setUserData(response.data);
          // userData = response.data;
          setLoading(false);
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
