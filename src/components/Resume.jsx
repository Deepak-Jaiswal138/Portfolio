import React from "react";
import Img from "../assets/DEEPAK_IMAGE.jpg";
import Project from "./Project";

const Resume = () => {
  return (
    <div className="container bg-white">
      <div className="row">
        <div className="col-md-12 col-sm-6 my-4 text-primary bg-light text-center">
          <hr />
          <h1>Personal Detail</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 text-info my-5">
          <h3>Name : Deepak</h3>
          <h3>Email : deepakmukundpur@gmail.com</h3>
          <h3>Mobile : 6392096036</h3>
          <h3>Address : Prayagraj Uttar Pradesh-212503</h3>
        </div>
        <div className="col-md-6 col-sm-12 text-info my-5 text-center">
          <img
            className="img-fluid"
            style={{ width: "200px", height: "200px" ,border:'4px solid #ccc' }}
            src={Img}
            alt=""
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-6 my-4 text-primary bg-light text-center">
          <hr />
          <h1>Educational Detail</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-sm-12 text-info my-3">
          <h3 className="my-4 text-warning">Graduation</h3>
          <h4 className="mx-4">Course: B-tech</h4>
          <h4 className="mx-4">Stream : Computer Science</h4>
          <h4 className="mx-4">Year : 2017-21</h4>
          <h4 className="mx-4">
            College : B.B.S. College of Engineering & Technology Prayagraj{" "}
          </h4>

          <h3 className="my-4 text-warning">Intermediate</h3>
          <h4 className="mx-4">Stream : Science</h4>
          <h4 className="mx-4">Year : 2017</h4>
          <h4 className="mx-4">
            College : Shervani Inter College Mukundpur Prayagraj{" "}
          </h4>

          <h3 className="my-4 text-warning">High School</h3>
          <h4 className="mx-4">Stream : Science</h4>
          <h4 className="mx-4">Year : 2015</h4>
          <h4 className="mx-4">
            College : Shervani Inter College Mukundpur Prayagraj{" "}
          </h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-6 my-4 text-primary bg-light text-center">
          <hr />
          <h1>Skills</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-6 my-4  text-primary text-center">
          <div className="progress my-4">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "60%" }}
            >
              <span className="sr-only">60% Complete</span>
            </div>
            <span className="progress-type">HTML / HTML5</span>
            <span className="progress-completed">60%</span>
          </div>
          <div className="progress  my-4">
            <div
              className="progress-bar progress-bar-success"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "40%" }}
            >
              <span className="sr-only">40% Complete</span>
            </div>
            <span className="progress-type">React JS</span>
            <span className="progress-completed">40%</span>
          </div>
          <div className="progress  my-4">
            <div
              className="progress-bar progress-bar-info"
              role="progressbar"
              aria-valuenow="20"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "20%" }}
            >
              <span className="sr-only">20% Complete </span>
            </div>
            <span className="progress-type">Java</span>
            <span className="progress-completed">20%</span>
          </div>
          <div className="progress  my-4">
            <div
              className="progress-bar progress-bar-warning"
              role="progressbar"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "60%" }}
            >
              <span className="sr-only">60% Complete</span>
            </div>
            <span className="progress-type">JavaScript / jQuery</span>
            <span className="progress-completed">60%</span>
          </div>
          <div className="progress  my-4">
            <div
              className="progress-bar progress-bar-danger"
              role="progressbar"
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "80%" }}
            >
              <span className="sr-only">80% Complete </span>
            </div>
            <span className="progress-type">CSS / CSS3</span>
            <span className="progress-completed">80%</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-6 my-4 text-primary bg-light text-center">
          <hr />
          <h1>Projects</h1>
          <hr />
        </div>
      </div>
      <div className="row">
        <Project img="https://mdbootstrap.com/img/new/standard/nature/189.jpg" card_title="Ecommerce" card_summary="This project is all about ecommerce" card_link="https://github.com/" />
        <Project img="https://mdbootstrap.com/img/new/standard/nature/188.jpg" card_title="Shopping" card_summary="This project is all about shoping" card_link="https://github.com/" />
        <Project img="https://mdbootstrap.com/img/new/standard/nature/189.jpg" card_title="Video Calling" card_summary="This project is all about calling" card_link="https://github.com/" />    
      </div>
    </div>
  );
};

export default Resume;
