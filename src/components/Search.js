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
        this.setState({"query": e.target.value})
        console.log(this.state.query)
    }
    render(){
        return(
            <div>
                <input onChange={this.handleSubmit} autoComplete="off" placeholder='search'/>
                <input type="submit"/>
            </div>
            
        )
    }
}

export default Search 