import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import EntriesList from './components/EntriesList';
import wikipedia from './components/wikipedia';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      entries: []
    }
    this.searchWikipedia = this.searchWikipedia.bind(this)
  }

  searchWikipedia = (query) => {
    wikipedia.searchWikipedia(query).then((entries) => {
      
    console.log(entries, "entries")
      this.setState({entries: entries})
    }) 
    console.log(`Searching Wikipedia for ${query}`)
  }

  

  render() {
    return (
      <div className="App">
        <h1 className="title">Search Wikipedia here for a pleaseant UI</h1> 
        <Search searchWikipedia={this.searchWikipedia}/>
        <EntriesList result={this.state.entries}/>
      </div>
    );
  }
}

export default App;
