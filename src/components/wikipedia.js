import React, {Component} from 'react'

class wikipedia extends Component{
    constructor(props){
        super(props)
        this.setState = this.setState.bind(this)

    }

   wikipedia = {

        searchWikipedia(query){
            return fetch(`https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&list=search&srsearch=${query}&utf8=&format=json`)
            .then(response => response.text())
            .then(entry => this.setState({entries: entry}))
        }
    }
    // render(){
    //     return(
    //         <div></div>
    //     )
    // }
    

}

export default wikipedia