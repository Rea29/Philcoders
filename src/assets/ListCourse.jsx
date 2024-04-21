import axios from "axios"; //npm install axios --save
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get("http://localhost/react/api/").then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost/react/api/${id}/delete`)
      .then(function (response) {
        console.log(response.data);
        getUsers();
      });
  };
  return (
    <div className="row">
      <div className="col-12">
        <Link to="user/create" className="btn btn-success">
          Add New User
        </Link>
        <h1>List Users</h1>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <Link
                    to={`user/${user.id}/edit`}
                    className="btn btn-success"
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
