import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");
  const [gender, setGender] = useState("Male");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/users/${id}`);
      setName(response.data.name);
      setAge(response.data.age);
      setHobby(response.data.hobby);
      setGender(response.data.gender);
      setContact(response.data.contact);
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/api/users/${id}`, {
        name,
        age,
        hobby,
        gender,
        contact,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Edit User</h1>
      <Link to="/" className="btn btn-success btn-sm">
        👈 Back
      </Link>
      <form onSubmit={updateUser} action="" className="mt-3">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            className="form-control"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hobby">Hobby</label>
          <input
            type="text"
            id="hobby"
            className="form-control"
            placeholder="Enter Hobby"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            className="form-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="number"
            id="contact"
            className="form-control"
            placeholder="6282xxxxxxxxx"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          🪃Update Data
        </button>
      </form>
    </>
  );
};

export default Edit;
