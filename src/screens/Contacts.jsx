import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container">
      <h3 className="text-center text-uppercase p-2">Contact Us</h3>
      <div className="contact-form-container text-muted shadow p-4 mb-5 bg-body rounded lh-2 mx-auto">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputFullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputFullName"
              aria-describedby="nameHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputContactNo" className="form-label">
              Contact No
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputContactNo"
              aria-describedby="nameHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <label id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </label>
          </div>
          <div className="mb-3">
            <label id="emailHelp" className="form-text">
              When can we reach you ?
            </label>
            <select
              className="form-select form-select-sm text-muted"
              aria-label=".form-select-sm example"
            >
              <option>Best time to reach</option>
              <option defaultValue="1">Morning</option>
              <option defaultValue="2">Afternoon</option>
              <option defaultValue="3">Evening</option>
            </select>
          </div>
          <div className="mb-3">
            <label id="emailHelp" className="form-text">
              Please enter your queries below
            </label>
            <textarea
              className="form-control"
              placeholder="Please write your queries here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
