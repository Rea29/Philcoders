import React from "react";
import CourseForm from "./CourseForm";

const AddCourse = () => {
  const handleOnSubmit = (Course) => {
    console.log(Course);
  };

  return (
    <React.Fragment>
      <CourseForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddCourse;
