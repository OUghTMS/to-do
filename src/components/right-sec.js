import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './header';
import Main from './main';  
import Settings from './settings';  

export default class RightSec extends Component {
  constructor(props) {
    super(props);

    this.state = {
      priority: ""
    }
    this.choosePriority = this.choosePriority.bind(this);

  }
  choosePriority(e) {
    this.setState({
      priority: e.dataset.value
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className={this.props.open ? "rightSec" : "rightSec w"}>
          <Header hide={this.props.hide} choosePriority={this.choosePriority}/>
          <Switch>
            <Route path="/" exact render={() => <Main priority={this.state.priority}/>} />
            <Route path="/settings" exact component={Settings} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
