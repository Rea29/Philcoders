import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import AddCourse from "../components/AddCourse";
// import CourseList from "../components/CourseList";
import CreateCourse from "../components/CreateCourse";
import EditCourse from "../components/EditCourse";
import ListCourse from "../components/ListCourse";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route component={CreateCourse} path="/Create" exact={true} />
            <Route component={ListCourse} path="/List" exact={true} />
            <Route component={EditCourse} path="/Edit" exact={true} />
            <Route component={AddCourse} path="/add" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
