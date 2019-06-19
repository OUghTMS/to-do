import React, { Component } from 'react';

import ToDo from './to-do'
import Completed from './completed'

export default class Main extends Component {
    render() {
      return (
        <div className="cont">
            <ToDo priority={this.props.priority}/>
            <Completed />
        </div>          
      );
    }
  }