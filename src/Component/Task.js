import React, { Component } from "react";
import "./Task.css";
export default class Task extends Component {
  render() {
   let {title,icon} = this.props;
    return (
      <>
        <div className="row row-cols-md-3 big ">
          <div className="gparent">
            <div className="done">
              <img src={icon} alt="React" />
            </div>
            <div className="dtwo">
              <div>
                <h2>{title}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a href="#">Learn More &rarr;</a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
            <div className="row">
          <div className="card col-md-3" >
            <img src={reactimage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col-md-3" >
            <img src={angularimage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card col-md-3" >
            <img src={vueimage} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
    </div> */}
      </>
    );
  }
}
