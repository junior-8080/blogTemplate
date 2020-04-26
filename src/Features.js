import React from "react"
import { Link, Route} from "react-router-dom"

import "./features.css"
import Category from "./Category"


function Tag(props){
    return(
        <div>
            <Link to = {`/photos/${props.children}`} className="feature-item">
                {props.children}
            </Link>
            <Route path = "/photos/:id" exact component = {Category} />
        </div>      
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