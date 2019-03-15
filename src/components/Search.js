import React, {Component} from 'react'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            'query': "",
            'fireredirect': false
        } 
        this.handleChange =this.handleChange.bind(this)
        this.handleClick =this.handleClick.bind(this)
    }

    handleChange = async (e) => {
        await this.setState({"query": e.target.value})
        console.log(this.state.query)
    }
    handleClick = async (e) => {
        await this.setState({'fireredirect': true})
        console.log(this.state)
    }
    render(){
        return(
            <div>
                <input onChange={this.handleChange} autoComplete="off" placeholder='search'/>
                <input onClick={this.handleClick} type="submit"/>
            </div>
            
        )
    }
}

export default Search 