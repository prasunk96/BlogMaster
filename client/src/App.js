import React, { Component } from 'react';
import Navbar from './components/navbar';
import SubNavBar from './components/subnavbar';
import './App.css';
import MainContent from './components/mainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SubNavBar />
        <MainContent />
      </div>
    );
  }
}

export default App;
