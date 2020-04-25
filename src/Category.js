import React, { Component } from 'react';

import Header from "./Header"
// let api_key = process.env.REACT_APP_API_KEY

class Category extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      images : [],
      query:props.match.params.id,
      isLoading:false,
    }
  }

  componentDidMount(){
    fetch(`https://api.unsplash.com/search/photos/?&query=${this.state.query}&client_id=c5hEeNtgCwstBdWxly7xCFvGu4_-MelUFYTtNzpVgZk`)
        .then(res => res.json())
        .then(data => {
            this.setState({
              images:data
            })
        })
  }

  handleChange = (event) => (

    this.setState({
      query:event.target.value,
    })
  )
 
  render() {
   let post = this.state.images.length !== 0?
     this.state.images.map(post => {
            return(
              <div className = "image" key = {post.id}>
                <img src= {`${post.urls.small}`} alt = {`image-${post.id}`} />
              </div>
            )
    })
    :null

    return (   
          <div className="category">
            <Header 
                handleClick = {this.handleClick} 
                handleChange = {this.handleChange}
                 /> 
            <div className="gallery">
              {
                post
              }
            </div>
           
          </div>
    );
  }  
}

export default Category;
