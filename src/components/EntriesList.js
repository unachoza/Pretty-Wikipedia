import React from 'react'
import Entry from './Entry'
import '../CSS/EntriesList.css'

const EntriesList = (entry) => {
    console.log(entry.result)
    console.log(typeof entry.result, entry.result)
    let theseResults = entry.result
    console.log("these results : ", theseResults)
    console.log(typeof (theseResults))
  
    const cardComponent = theseResults.query.map((entry, i) => {
        return <Entry title={entry[i].title}/>
    })
  
    return (
        {cardComponent}
    )
}

export default EntriesList