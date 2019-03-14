import React, {Component} from 'react'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            'query': "",
            'fireredirect': false
        } 
        this.handleSubmit =this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        console.log('was submitted')
    }
    render(){
        return(
            <div>
                <input onClick={this.handleSubmit} autoComplete="off" placeholder='search'/>
                <input type="submit"/>
            </div>
            
        )
    }
}

export default Search 