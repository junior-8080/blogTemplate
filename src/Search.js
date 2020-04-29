import React from "react"

import "./search.css"

function Search(props) {
    return (
	    <form onSubmit={props.handleSubmit}>
	        <input type = "text" placeholder = "Search for image " onChange = {props.handleChange} />
	        <i className="fa fa-search" onClick={props.handleSubmit}></i>
	    </form>
    )
}

export default Search
