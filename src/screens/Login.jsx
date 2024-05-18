import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../config/constant";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const sighUpcall = async () => {
    // setLoading(true);
    try {
      const res = await axios.post(
        `${baseURL}/users`,
        {
          //   name: fname + " " + lname,
          mail: mail,
          password: password,
          //   contact: contact,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
      setLoading(false);
      console.log("res----------", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const apiCall = (event) => {
    event.preventDefault();
    setLoading(true);
    sighUpcall();
    console.log(event);
    setMail("");
    setPassword("");
    // setLoading(false);
  };

  return (
    <div className="container">
      <h3 className="text-center text-uppercase p-2">Log In to your Account</h3>
      <div className="contact-form-container text-muted shadow p-4 mb-5 bg-body rounded lh-2 mx-auto">
        <form>
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
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="email"
              className="form-control"
              id="password"
              aria-describedby="passwordHelp"
              required
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
