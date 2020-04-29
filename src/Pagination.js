import React from "react"

import "./pagination.css"


function Pargination(props){
    
    return(
        <div className="pagination">
          <div  onClick={props.handlePrevious} className="arrow" >
             previous
          </div>
          <div className="arrow" onClick={props.handleNext}>
              next
          </div>
        </div>
    )
}
export default Pargination