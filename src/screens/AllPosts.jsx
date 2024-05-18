import React, { useEffect, useState } from "react";
import { baseURL } from "../config/constant";
import axios from "axios";
import pic1 from "../assets/pic1.png";
import { Link, useParams, useNavigate } from "react-router-dom";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //ALERT SECTION

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

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const response = await axios.get(`${baseURL}/posts`);
        setPosts(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPosts();
  }, []);

  const deletePost = async (postId) => {
    let action = window.confirm("Are you sure you want to delete this ?");
    if (action) {
      try {
        const res = await axios.delete(`${baseURL}/posts/${postId}`);
        console.log(res);
        console.log(postId);
        alertMsg(`Post with ID ${postId} deleted successfully !`, "danger");
        navigate("/posts");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div id="liveAlertPlaceholder"></div>
            {posts.map((i) => (
              <div className="col-lg-4 col-md-4 col-sm-12 g-3" key={i.id}>
                <div
                  className="card"
                  // style={{ width: "18rem" }}
                >
                  <img src={pic1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{i.title}</h5>
                    <p className="card-text">{i.body}</p>
                    <div className="d-flex justify-content-between">
                      <Link
                        to={`/posts/${i.id}/${i.userId}`}
                        className="btn btn-primary"
                      >
                        <i className="fa-solid fa-circle-info mx-1"></i> Details
                      </Link>
                      <Link
                        to={`/create/${i.id}/${i.userId}`}
                        className="btn btn-warning"
                      >
                        <i className="fa-regular fa-pen-to-square mx-1"></i>{" "}
                        Edit
                      </Link>
                      {/* <Link
                        to={`/posts/${i.id}/${i.userId}`}
                        className="btn btn-danger"
                      > */}
                      <button
                        className="btn btn-danger"
                        onClick={() => deletePost(i.id)}
                      >
                        <i className="fa-solid fa-delete-left mx-1"></i> Delete
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPosts;
