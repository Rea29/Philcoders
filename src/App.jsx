import React from "react";

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

import EditCourse from "./components/EditCourse";
import ListCourse from "./course/ListCourse";
import CourseForm from "./components/CourseForm";
import Carousel from "./pages/Carousel";
import EditCourseForm from "./course/EditCourseForm";
import CreateCourse from "./course/CreateCourse";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

const App = () => (
  <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
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
      <Route path="/Registration" element={<Registration />} />
      {/* <Route path="/MainNavbar" element={<MainNavbar />} />
      <Route path="/NavbarInstructor" element={<NavbarInstructor />} />
      <Route path="/NavbarStudents" element={<NavbarStudents />} /> */}
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default App;
