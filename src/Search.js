import React from "react"

import "./search.css"

function Search(props) {
    return (
	    <form onSubmit={props.handleSubmit}>
	        <input type = "text" placeholder = "Enter Query" onChange = {props.handleChange} />
	        <i className="fas fa-search"></i>
	    </form>
    )
}

export default Search
