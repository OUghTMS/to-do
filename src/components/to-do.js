import React, { Component } from 'react';

import ToDoList from './to-do-list'

import list from "../imgs/list.png";
import tile from "../imgs/tile.png";

import testDB from '../db/db-to-do'

export default class ToDo extends Component {
    render() {
      const len = testDB.length;
      return (
        <div className="TDC">
          <div className="tddis">
            <h1>To Do <div className="sumOfEl">({len})</div></h1>
            <div className="disp">
              <button><img src={list} height="22" alt="ops" /></button>
              <button ><img src={tile} height="22" alt="ops" /></button>
            </div>
          </div>
          <ToDoList db={testDB} priority={this.props.priority}/>
        </div>
      );
    }
  }