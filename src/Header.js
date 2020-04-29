import React from "react"
import {Link} from "react-router-dom"

import Search from "./Search"
import logo from "./logo1.png"
import "./header.css"

function Header(props){

    return(
        <header className = "header">
            <div className = "header-flex">
                <Link to = "/" className = "logo link">
                     <img src={logo} width="100px" height="50px" alt="logo" />
                </Link>
                <Search  handleChange = {props.handleChange}  handleSubmit = {props.handleSubmit} />
                 <small className="powered">powered by upsplah api</small>
            </div>
        </header>
    )
}
export default Header;
