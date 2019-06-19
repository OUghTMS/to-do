import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

import LeftBar from './components/left-bar';
import RightSec from './components/right-sec';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        isOpen: true,
    }
    this.hideButton = this.hideButton.bind(this)
  }
  hideButton() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    const swch = this.state.isOpen && <LeftBar />
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="app">
          {swch}
          <RightSec open={this.state.isOpen} hide={this.hideButton}/>
        </div>
      </Router>
    );
  }
}

export default App;
