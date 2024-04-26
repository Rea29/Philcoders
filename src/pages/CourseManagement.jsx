// import CreateCourse from ".././components/CreateCourse";
// import EditCourse from ".././components/EditCourse";
import ListCourse from "../course/ListCourse";

function samplenav() {
  function RenderNavbar() {
    if (localStorage.getItem("user_type") == "instructor") {
      return <ListCourse />;
    }
    window.location = "/";
    // return <NavBarHome />;
  }
  return <>{RenderNavbar()}</>;
}

export default samplenav;
