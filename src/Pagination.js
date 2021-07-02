import React from "react"

import "./pagination.css"


function Pargination(props){
    
    return(
        <div className="pagination">
          <button  onClick={props.handlePrevious} className="arrow" >
             previous
          </button>
          <button className="arrow" onClick={props.handleNext}>
              next
          </button>
        </div>
    )
}
export default Pargination