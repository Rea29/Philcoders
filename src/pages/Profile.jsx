import React from "react";

const Profile = () => {
  return (
    <section
      className="container my-lg-5 bg-light py-5 rounded shadow "
      id="profile"
    >
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar7.png"
            alt="user"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <p className="fs-4 mt-5">
            User Name: Smith <br />
            Gender: Male <br />
            Age: 35 <br />
            Location: New York <br />
            Email:smith@email.com <br />
            Password: ********
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
