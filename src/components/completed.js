import React, { Component } from 'react';


import testDB from '../db/db-completed'

export default class Completed extends Component {
    render() {
      const len = testDB.length;
      return (
        <div className="TDC">
          <h1>Completed <div className="sumOfEl">({len})</div></h1>
        </div>
      );
    }
  }