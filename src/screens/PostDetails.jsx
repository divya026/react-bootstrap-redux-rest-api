import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../config/constant";
import axios from "axios";
import pic1 from "../assets/pic1.png";

const PostDetails = () => {
  const { postId, userId } = useParams();

  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const userRes = await axios.get(`${baseURL}/users/${userId}`);
        console.log("userRes", userRes.data);
        const { name, phone, email, website } = userRes.data;
        setName(name);
        setPhone(phone);
        setEmail(email);
        setWebsite(website);
      } catch (err) {
        console.log(err);
      }
    };
    const getPost = async () => {
      try {
        const postRes = await axios.get(`${baseURL}/posts/${postId}`);
        console.log("postRes", postRes.data);
        const { title, body } = postRes.data;
        setTitle(title);
        setBody(body);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
    getPost();
  }, []);
  return (
    <div className="container-fluid">
      <h3 className="text-uppercase text-center">Post Detail</h3>
      <div className="row p-3">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="card mb-3">
            <img src={pic1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{body}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card" style={{ width: "18rem" }}>
            <img src={pic1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">User Information</h5>
              <p className="card-text">{name}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li className="list-group-item">
                <a href={`tel:${phone}`}>{phone}</a>
              </li>
              <li className="list-group-item">
                <a href={`www.${website}`}>Visit Our Website</a>
              </li>
            </ul>
          </div>
          <div>
            <button
              className="btn btn-warning"
              onClick={() => navigate("/posts")}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
