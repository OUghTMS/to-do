import React, { Component } from 'react';

export default class AddToDoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      priority: "Hight"
    }
    this.Change = this.Change.bind(this);
    this.checked = this.checked.bind(this);
  }
  Change(event){
    this.setState({ [event.target.name]: event.target.value});
  }
  checked(event){
    this.setState({
      priority: event.target.value
    })
  }
  addToDo(){
    //push в db
  }
    render() {
      return (
        <div className="form-background" >
            <div className="form">
                <button className="cross" onClick={this.props.close}>X</button>
                <div className="form-fields">
                  <div className="form-item">
                    <div className="item-label">Name: </div>
                    <input type="text" 
                          value={this.state.name}
                          name="name"
                          onChange={this.Change}
                    />
                  </div>
                  <div className="form-item">
                    <div className="item-label">Description: </div>
                    <input type="text"
                          value={this.state.description}
                          name="description"
                          onChange={this.Change}
                    />
                  </div>
                  <div className="form-radio">
                    <div className="item-label">Priority: </div>
                    <input type="radio" name="priority" value="Hight"
                    checked={this.state.priority === "Hight"}
                    onChange={this.checked}
                    />Hight
                    <input type="radio" name="priority" value="Medium"
                    checked={this.state.priority === "Medium"}
                    onChange={this.checked}
                    />Medium
                    <input type="radio" name="priority" value="Low"
                    checked={this.state.priority === "Low"}
                    onChange={this.checked}
                      />Low 
                  </div>
                </div>
                <button className="addToDo" onClick={this.addToDo()}>Add ToDo</button>
            </div>
        </div>
      );
    }
  }