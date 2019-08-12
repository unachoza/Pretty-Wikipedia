import React, {Component} from 'react'
import '../CSS/Entry.css'


const Entry = (oneEntry) => {
    return (
        <div className="entry-card">
            <h1>{oneEntry[0].title}</h1>
            <p>{oneEntry[0].snippet}</p>
        </div>
    )
}
// class Entry extends Component {
//     render(){
//         return(
            
//                 <p>Britney Jean Spears (born December 2, 1981)[1] is an American singer, songwriter, dancer, and actress.</p>
//             </div>
//         )
//     }
// }

export default Entry