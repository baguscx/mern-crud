import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../components/search";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users");
      setUsers(response.data);
      setFilteredUsers(response.data); // Set filteredUsers initially to all users
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      getUsers();
    } catch (error) {
      console.error(error);
    }
  };

  const onChangeSearch = (value) => {
    const filteredUsers = users.filter((user) => {
      return Object.values(user)
        .join(" ")
        .toLowerCase()
        .includes(value.toLowerCase());
    });
    setFilteredUsers(filteredUsers);
  };

  return (
    <>
      <h1>Data Users</h1>
      <Link to="/add" className="btn btn-success btn-sm">
        🆕 Add New
      </Link>
      <Search onChangeSearch={onChangeSearch} />
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
          {filteredUsers.map((user, index) => (
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
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(user._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
