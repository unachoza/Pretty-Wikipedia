import React, {Component} from 'react'
import Entry from './Entry'
import '../CSS/EntriesList.css'

const EntriesList = (props) => {
    console.log(props)
    let theseResults = props.result.entries
    console.log("these results : ", theseResults)
    console.log(typeof (theseResults))
    console.log(theseResults.length)
    Object.keys(theseResults).map((title, i) => {
        let theTitle = theseResults[title]
        console.log(theTitle)
        return <h1>{theTitle.title}</h1>
    // let thisArray = theseResults.map(result => {
    //     let i = 0
    //     
            
    })
        
        return (
            <div className="entries-container">
                <Entry/>
                <Entry/>
                <Entry/>
            </div>
        )
    
}

export default EntriesList