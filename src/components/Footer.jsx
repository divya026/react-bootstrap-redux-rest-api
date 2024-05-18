import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-primary bg-gradient text-white"
      style={{ minHeight: "9rem" }}
    >
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <h4>Quick Lines</h4>
          <div className="d-flex flex-column bd-highlight mb-3">
            <a
              href="#"
              className="text-white p-2 bd-highlight text-decoration-none"
            >
              About us
            </a>
            <a
              href="#"
              className="text-white p-2 bd-highlight text-decoration-none"
            >
              Our Posts
            </a>
            <a
              href="#"
              className="text-white p-2 bd-highlight text-decoration-none"
            >
              Our Team
            </a>
            <a
              href="#"
              className="text-white p-2 bd-highlight text-decoration-none"
            >
              Contact us
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          {" "}
          <h4>News Letter</h4>
          <div className="d-flex flex-column bd-highlight justify-content-center gap-3">
            <input
              type="text"
              placeholder="Subscribe to the News Letter"
            ></input>
            <button className="btn btn-warning" type="submit">
              Subscribe
            </button>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          {" "}
          <h4>Contact Address</h4>
          <div className="d-flex flex-column bd-highlight mb-3">
            <div>
              <p>26 Huston Street</p>
              <p>Newton City</p>
              <p>Random State - 78790</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
