import React, { Component } from 'react';
import {Link} from "react-router-dom";

import logo from "../imgs/pic.png";
import home from "../imgs/Home.png";
import set from "../imgs/set.png";

export default class LeftBar extends Component {
  constructor(props){
    super(props);

    this.state = {
        selected: "home",
    }
  }

  render() {
    return (
      <React.Fragment>
          <div className="leftSec">
            <div className="switch">
              <img src={logo} height="50" alt="ops" />
              <h2>ToDo</h2>
            </div>
            
              <Link to="/" onClick={() => {this.setState({selected: "home"})}}>
                <div className={this.state.selected==="home" ? "switch selected r" : "r switch"}>
                  <img src={home} height="20" alt="ops" />
                  <div className="swText">Home</div>              
                </div>
              </Link>

              <Link to="/settings" onClick={() => {this.setState({selected: "settings"})}}>
                <div className={this.state.selected==="settings" ? "switch selected r" : "r switch"}>
                  <img src={set} height="20" alt="ops" />
                  <div className="swText">Settings</div>
                </div>
              </Link>

          </div>
      </React.Fragment>
    );
  }
}