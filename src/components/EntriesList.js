import React, {Component} from 'react'
import Entry from './Entry'
import '../CSS/EntriesList.css'

class EntriesList extends Component{
    render(){
        return (
            <div className="entries-container">
                <Entry/>
                <Entry/>
                <Entry/>
            </div>
        )
    }
}

export default EntriesList