import React, { Component } from 'react';

import home from "../imgs/left-bar-butt.png";
import priority from "../imgs/priority.png";
import alphabet from "../imgs/alphabet.png";

import AddToDoForm from './add-to-do-form'
import PriorityFilter from './priority-filter'

export default class Header extends Component {    
  constructor(props){
    super(props);

    this.state = {
        AddToDoIsOpen: false,
        filterIsopen: false
    }
    this.close = this.close.bind(this)
    this.filterMenu = this.filterMenu.bind(this)
  }
  filterMenu(){
    this.setState({
      filterIsopen: !this.state.filterIsopen
    })
  }
  close() {
    this.setState({
      AddToDoIsOpen: !this.state.AddToDoIsOpen
    })
  }

  render() {
    const AddToDo = this.state.AddToDoIsOpen && <AddToDoForm close={this.close}/>
    const filter = this.state.filterIsopen && <PriorityFilter filterMenu={this.filterMenu} choose={this.props.choosePriority}/>
    return (
      <div className="header">
        <div className="lButt">
          <button onClick={this.props.hide}><img src={home} height="22" alt="ops" /></button>
        </div>
        <div className="rButt">
          <button onClick={this.filterMenu}><img src={priority} height="22" alt="ops" /></button>
          <button ><img src={alphabet} height="22" alt="ops" /></button>
          <button onClick={this.close} className="addToDo">Add ToDo</button>
          {AddToDo}
          {filter}
        </div>
      </div>
    );
  }
}