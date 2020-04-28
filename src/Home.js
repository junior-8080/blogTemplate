import React, { Component } from 'react';

import Header from "./Header"
import Features from "./Features"
import "./home.css"
import "./features.css"
import "./header.css"

const api_key = process.env.REACT_APP_API_KEY

class Home extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      images : [],
      query:"",
      isLoading:false,
    }
  }

  componentDidMount(){

    this.setState({isLoading: true})
    fetch(`https://api.unsplash.com/photos/?page=1&per_page=30&client_id=`+api_key)
      .then(res => res.json())
      .then(data => {
          this.setState({
            images:data,
            isLoading: false
          })
      })
  }

  handleChange = (event) => (
    this.setState({
      query:event.target.value,
    })
  )

  handleClick = (param) => {
     this.setState({
        query: param
     })
 }
 handleSubmit = (event) =>{
   event.preventDefault()
  //  fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=30&query=${this.state.query}&client_id=`+api_key)
  //     .then(res => res.json())
  //     .then(data => {
  //         this.setState({
  //           images: data.results
  //         })
        
  //     })
  this.props.history.push(`/photos/${this.state.query}`)
 }
  render() {
   let post = this.state.images.length !==0?
     this.state.images.map(post => {
            return(
              <div className="image" key={post.id}>
                <img src= {`${post.urls.small}`} alt={`${post.id}`} width="100%" height="auto"/>
              </div>
            )
    })
    :null

    return (   
          <div className="home">
            <Header 
                handleClick = {this.handleClick} 
                handleChange = {this.handleChange}
                handleSubmit = {this.handleSubmit}
                 /> 
            <main className="main">
              <Features className="features"  />
              <div className="gallery">
                {
                  post
                }
              </div>
            </main>   
          </div>
    );
  }

  
}

export default Home;
