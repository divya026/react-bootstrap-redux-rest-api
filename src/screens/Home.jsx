import React from "react";
import pic1 from "../assets/pic1.png";
import "./home.css";

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={pic1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={pic1} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <section className="featured-posts container">
        <h3 className="text-center text-uppercase p-2">Featured Posts</h3>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <img src={pic1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-warning d-grid">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <img src={pic1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card titlt and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-warning d-grid">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card">
                <img src={pic1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-warning d-grid">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container-fluid bg-primary bg-gradient mt-5 p-4"
        style={{ minHeight: "100px" }}
      >
        <h4 className="text-white text-center">We have variety of posts</h4>
        <a href="#" className="btn btn-warning d-flex justify-content-center">
          View All Posts
        </a>
      </section>
      <section>
        <h4 className="text-uppercase text-center">Our Portfolio</h4>
        <div class="container overflow-hidden">
          <div class="row gy-5">
            <div class="col-6">
              <div class="p-3 border bg-light">
                {" "}
                <img src={pic1} className="card-img-top" alt="..." />
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light">
                {" "}
                <img src={pic1} className="card-img-top" alt="..." />
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light">
                {" "}
                <img src={pic1} className="card-img-top" alt="..." />
              </div>
            </div>
            <div class="col-6">
              <div class="p-3 border bg-light">
                {" "}
                <img src={pic1} className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
