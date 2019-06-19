import React, { Component } from 'react';

export default class PriorityFilter extends Component {
    constructor(props){
        super(props);
        this.Click = this.Click.bind(this);
    }
    Click(e){
        this.props.filterMenu();
        this.props.choose(e.target);
    }
    render() {
      return (
        <div className="priority-filter">
            <div 
                className="priority-item"
                onClick={this.Click}
                data-value=""
            >All</div>
            <div 
                className="priority-item" 
                onClick={this.Click}
                data-value="Hight Priority"
            >Hight Priority</div>
            <div 
                className="priority-item" 
                onClick={this.Click}
                data-value="Medium Priority"
            >Medium Priority</div>
            <div 
                className="priority-item" 
                onClick={this.Click}
                data-value="Low Priority"
            >Low Priority</div>
        </div>
      );
    }
  }