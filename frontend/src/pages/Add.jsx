import React from "react";
import { Link } from "react-router-dom";

const Add = () => {
  return (
    <>
      <h1>Add User</h1>
      <Link to="/" className="btn btn-success btn-sm">
        👈 Back
      </Link>
      <form className="mt-3">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="hobby">Hobby</label>
          <input type="text" id="hobby" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select className="form-select">
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input type="number" id="contact" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          🐚Save Data
        </button>
      </form>
    </>
  );
};

export default Add;
