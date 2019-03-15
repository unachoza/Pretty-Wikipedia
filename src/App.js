import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Entry from './components/Entry'

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      "entries": []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Search</h1> 
        <Search/>
        <Entry/>
      </div>
    );
  }
}

export default App;
