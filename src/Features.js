import React from "react"
import {Link} from "react-router-dom"
import "./features.css"



function Tag(props){
    return(
    <Link to = {`/photos/${props.children}`} className="feature-item">
         {props.children}
    </Link>
   
    )
}

function Features(props) {
     
    return (
        <div className="features">
            <Tag>London</Tag>
            <Tag>Programming</Tag>
            <Tag>School</Tag>
            <Tag>Birthday</Tag>
            <Tag>Beaches</Tag>
            <Tag>Cars</Tag>
            <Tag>Paris</Tag>

        </div>
    )
}

export default Features