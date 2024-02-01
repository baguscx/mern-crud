import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    setUser(response.data);
  };
  return (
    <>
      <h1>Data Users</h1>
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
                <button className="btn btn-success">Edit</button>
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
