import React, { Component } from 'react';
import './App.css';
import TopBar from './component/topbar';
import IndexTab from './component/indexPanel';
import Container from './component/container';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <div style={{height:'100%', position:'fixed'}}>
          <IndexTab/>
          <Container/>
        </div>
      </div>
    );
  }
}

export default App;
