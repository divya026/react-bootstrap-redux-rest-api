import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../config/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const sighUpcall = async () => {
    // setLoading(true);
    try {
      const res = await axios.post(
        `${baseURL}/users`,
        {
          mail: mail,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
      setLoading(false);
      console.log("res----------", res.data);

      //Assume user has successfully authenticated(logged in)
      //fetch the details of authenticated user, In our case assume userId 1 is authenticated

      const authenticate = async () => {
        try {
          const userId = 1;
          const res = await axios.get(`${baseURL}/users/${userId}`);
          console.log("UserId 1 information", res.data);
          localStorage.setItem("users", JSON.stringify(res.data));
          localStorage.setItem("token", "jhdhgghdsvfgcfcbvfghjjhg");
        } catch (error) {
          console.log(error);
        }
      };
      authenticate();
      if (res.status == 201) {
        navigate("/posts");
      }
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
        <form onSubmit={(event) => apiCall(event)}>
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
    </div>
  );
};

export default Login;
