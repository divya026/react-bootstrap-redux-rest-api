import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "../config/constant";

const Signup = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [contact, setContact] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const sighUpcall = async () => {
    // setLoading(true);
    try {
      const res = await axios.post(
        `${baseURL}/users`,
        {
          name: fname + " " + lname,
          mail: mail,
          password: password,
          contact: contact,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
      setLoading(false);
      console.log("res----------", res.data);
      alertMsg("Account created successfully ! Please login", "success");
    } catch (err) {
      console.log(err);
    }
  };

  const apiCall = (event) => {
    event.preventDefault();
    setLoading(true);
    sighUpcall();
    console.log(event);
    setContact("");
    setFname("");
    setLname("");
    setMail("");
    setPassword("");

    // setLoading(false);
  };

  var alertPlaceholder = document.getElementById("liveAlertPlaceholder");
  var alertTrigger = document.getElementById("liveAlertBtn");

  function alertMsg(message, type) {
    var wrapper = document.createElement("div");
    wrapper.innerHTML =
      '<div class="alert alert-' +
      type +
      ' alert-dismissible" role="alert">' +
      message +
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

    alertPlaceholder.append(wrapper);
  }

  return (
    <div className="container">
      <h3 className="text-center text-uppercase p-2">Create an Account</h3>
      <div id="liveAlertPlaceholder"></div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="contact-form-container text-muted shadow p-4 mb-5 bg-body rounded lh-2 mx-auto">
          <form onSubmit={(event) => apiCall(event)}>
            <div className="mb-3">
              <label htmlFor="exampleInputFullName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFullName"
                aria-describedby="nameHelp"
                required
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputFullName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFullName"
                aria-describedby="nameHelp"
                required
                value={lname}
                onChange={(e) => setLname(e.target.value)}
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
                value={contact}
                onChange={(e) => setContact(e.target.value)}
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
                value={mail}
                onChange={(e) => setMail(e.target.value)}
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
                type="password"
                className="form-control"
                id="password"
                aria-describedby="passwordHelp"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Signup;
