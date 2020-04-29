import React from "react"
import { Link } from "react-router-dom"

import "./features.css"


function Tag(props){
    // console.log(props)
    return(
        <div>
            <Link to = {`/photos/${props.children}`} className="feature-item" onClick={()=>{props.handleClick(props.children)}}>
                {props.children}
            </Link>
        </div>      
    )
}

function Features(props) {
    //  console.log(props)
    return (
        <div className="features">
            <Tag handleClick={props.handleClick}>London</Tag>
            <Tag handleClick={props.handleClick} >Programming</Tag>
            <Tag handleClick={props.handleClick}>School</Tag>
            <Tag handleClick={props.handleClick}>Birthday</Tag>
            <Tag handleClick={props.handleClick}>Beaches</Tag>
            <Tag handleClick={props.handleClick}>Cars</Tag>
            <Tag handleClick={props.handleClick}>Paris</Tag>
            <Tag handleClick={props.handleClick}>Church</Tag>
            <Tag handleClick={props.handleClick}>person</Tag>
            <Tag handleClick={props.handleClick}>Music</Tag>
            <Tag handleClick={props.handleClick}>sports</Tag>

        </div>
    )
}

export default Features