import React, { Component } from "react";
import Task from "./Task";
import reactimage from "../assets/react.jpg";
import angularimage from "../assets/angular.png";
import vueimage from "../assets/vuejs.png";
export default class Home extends Component {
    state = {
        card:[
            {title: "REACT", icon: reactimage},
            {title: "ANGULAR", icon: angularimage},
            {title: "VUE", icon: vueimage},
        ]
    };
    render() {
        let {card} = this.state;
        return (
      <>
        <div className="abdullah">
          <h1>Abdullah Ossama</h1>
          <h2>Task 2 React Version</h2>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="row ">
            {card.map( (c)=> <Task title={c.title} icon={c.icon} />)}
          </div>
        </div>
        <div className="Copyright">
            <h6> Copyright &copy;, developed & designed by Abdullah Ossama</h6>
          </div>
      </>
    );
  }
}
