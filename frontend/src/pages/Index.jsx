import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1>Data Users</h1>
      <Link to="/add" className="btn btn-success btn-sm">
        🆕 Add New
      </Link>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Hobby</th>
            <th>Gender</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.hobby}</td>
              <td>{user.gender}</td>
              <td>{user.contact}</td>
              <td>
                <Link to={`edit/${user._id}`} className="btn btn-primary">
                  Edit
                </Link>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
