import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import EntriesList from './components/EntriesList';

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
        <EntriesList/>
      </div>
    );
  }
}

export default App;
