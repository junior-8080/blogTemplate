import React, { Component } from "react"

import Header from "./Header"
import Footer from "./Footer"
import "./preview.css"


const api_key = process.env.REACT_APP_API_KEY

class Preview extends Component{
    constructor(props){
        super(props)
        this.state = {
            image :{},
            id:props.match.params.id,
            isLoading:false
        }
    }
    componentDidMount() {
       fetch(`https://api.unsplash.com/photos/${this.state.id}?client_id=`+api_key)
       .then(res => res.json())
       .then(data =>{
           console.log(data)
            this.setState({
                image:data,
                isLoading:true,
            })
       })
    }

    handleSubmit = (event) => {
        event.preventDefault()
       this.props.history.push(`/photos/${this.state.query}`)
    }

    handleChange = (event) => (
        this.setState({
          query:event.target.value,
        })
    )
    handleDownload = () => {
        
    }

    render(){
        
        return(
            <div>
                <Header 
                    handleClick = {this.handleClick} 
                    handleChange = {this.handleChange}
                    handleSubmit ={this.handleSubmit}
                /> 
            {
             this.state.isLoading?
             <div className="preview">
                <div className="photoHeader">
                    <div className="user">
                        <img src={`${this.state.image.user.profile_image.small}`} alt="logos" /><br />
                        <small>Photo credit:{this.state.image.user.name}</small>
                    </div>
                    <button className="btn">download</button>
                </div>
                <div className="image">
                    <img src={`${this.state.image.urls.regular}`} alt="img" width="70%" height="auto"/>
                </div>
             </div>
             :null
            }
            <Footer />
            </div>  
        )
    }
}

export default Preview