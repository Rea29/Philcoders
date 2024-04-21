import React from "react";
import { useLocation } from "react-router-dom";

const Enroll = () => {
  const location = useLocation();
  //the data here will be an object since an object was
  const data = location;
  console.log("test enroll debug", data);

  const CourseForm = (props) => {
    const [course, setcourse] = useState({
      CourseID: props.course ? props.course.CourseID : "",
      FirstName: props.course ? props.course.FirstName : "",
      MiddleName: props.course ? props.course.MiddleName : "",
      LastName: props.course ? props.course.LastName : "",
      Email: props.course ? props.course.Email : "",
      Phone: props.course ? props.course.Phone : "",
    });
    // const [, setInstructorData] = useState([]);
    // const [categoryData, setCategoryData] = useState([]);
    // const [errorMsg, setErrorMsg] = useState("");
    const { CourseID, FirstName, MiddleName, LastName, Email, Phone } = course;
    useEffect(() => {
      axios
        .get("http://localhost/api/enrollment.php")
        .then((res) => {
          console.log(res);

          setCategoryData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

      // getCourses(null);
    }, []);
  };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost/api/getInstructor.php")
  //     .then((res) => {
  //       console.log(res);

  //       setInstructorData(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   // getCourses(null);
  // }, []);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const values = [CourseID, FirstName, MiddleName, LastName, Email, Phone];
    let errorMsg = "";
    console.log(course);

    axios
      .post("http://127.0.0.1/api/enrollment.php", {
        CourseID: course.CourseID,
        FirstName: course.FirstName,
        MiddleName: course.MiddleName,
        LastName: course.LastName,
        Email: course.Email,
        Phone: course.Phone,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const course = {
        CourseID,
        FirstName,
        MiddleName,
        LastName,
        Email,
        Phones,
      };
      props.handleOnSubmit(course);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setcourse((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;

      default:
        setcourse((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md-8  mx-auto px-3 py-5 bg-light rounded">
          <h1 className="text-center mb-3">Enrollment Form</h1>
          <h4 className="text-center mb-3">{data.state.title}</h4>
          <h4 className="text-center mb-3">{data.state.instructor}</h4>
          <h6 className="text-center mb-3">{data.state.description}</h6>

          <form method="post" action="https://formspree.io/f/mayzyzov">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                First Name
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Middle Name
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Last Name
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">
                Email address
              </label>
              <input
                type="email"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                autoComplete="off"
                required
                name="name"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
