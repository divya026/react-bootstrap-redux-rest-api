import React, { useEffect, useState } from "react";
import { baseURL } from "../config/constant";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const { postId, userId } = useParams();
  // const [isEdit, setIsEdit] = useState(false);

  const apiCall = async () => {
    let reqMethod = "post";
    let reqBody = {
      title: title,
      body: body,
    };
    let url = "posts";
    //if postId exists means it is a edit request
    if (postId) {
      reqMethod = "put";
      url = `posts/${postId}`;
    }
    try {
      setLoading(true);
      const res = await axios[reqMethod](`${baseURL}/${url}`, reqBody, {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      console.log(res.data);
      setLoading(false);
      if (reqMethod == "put") {
        alertMsg("Post updated Successfully !", "success");
      } else {
        alertMsg("Post Created Successfully !", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const createPost = (event) => {
    event.preventDefault();
    apiCall();
    setTitle("");
    setBody("");
    console.log(event);
  };

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
    const getRes = async () => {
      try {
        const getDetails = await axios.get(`${baseURL}/posts/${postId}`);
        console.log("getDetails", getDetails.data);
        setTitle(getDetails.data.title);
        setBody(getDetails.data.body);
      } catch (error) {
        console.log(error);
      }
    };
    getRes();
  }, []);

  return (
    <div className="container">
      {postId ? (
        <h3 className="text-center text-uppercase p-2">Edit Post</h3>
      ) : (
        <h3 className="text-center text-uppercase p-2">Create Post</h3>
      )}

      <div id="liveAlertPlaceholder"></div>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="contact-form-container text-muted shadow p-4 mb-5 bg-body rounded lh-2 mx-auto">
          <form onSubmit={(event) => createPost(event)}>
            <div className="mb-3">
              <label htmlFor="post" className="form-label">
                Post
              </label>
              <input
                type="text"
                className="form-control"
                id="post"
                aria-describedby="nameHelp"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label id="description" className="form-text">
                Post Description
              </label>
              <textarea
                className="form-control"
                placeholder="Please write your queries here"
                id="description"
                style={{ height: "100px" }}
                value={body}
                required
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
