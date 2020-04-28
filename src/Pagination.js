import React from "react"

function Pargination(props){
    return(
        <div className="pagination">
          <div className="arrow" onClick={props.handlePrevious} >
             previous
          </div>
          <div className="arrow" onClick={props.handleNext}>
              next
          </div>
        </div>
    )
}
export default Pargination