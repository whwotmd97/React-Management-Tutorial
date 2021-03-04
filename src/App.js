import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="gray-background">
        <img src={logo} lat="logo"/>
        <h2>어서오세요 시스템확인</h2>
      </div>
    );
  }
}

export default App;
