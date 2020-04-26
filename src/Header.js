import React from "react"

import Search from "./Search"
import "./header.css"

function Header(props){

    return(
        <header className = "header">
            <div className="header-flex">
                <h1 className="logo">IMAGE APP</h1>
                <Search  handleChange = {props.handleChange}  handleSubmit = {props.handleSubmit} className="search" />
            </div>
            
        </header>
    )
}
export default Header;
