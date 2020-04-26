import React, { Component } from 'react';

import Header from "./Header"
import Features from "./Features"

const api_key = process.env.REACT_APP_API_KEY

class Category extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      images : [],
      query: props.match.params.id,
      isLoading: false,
    }
  }

  componentDidMount(){
    fetch(`https://api.unsplash.com/search/photos/?&query=${this.state.query}&client_id=`+api_key)
      .then(res => res.json())
      .then(data => {
          this.setState({
            images: data
          })
      })
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      fetch(`https://api.unsplash.com/search/photos/?&query=${nextProps.match.params.id}&client_id=`+api_key)
      .then(res => res.json())
      .then(data => {
          this.setState({
            images: data
          })
      })
    }
  }


  handleChange = (event) => (
    this.setState({
      query:event.target.value,
    })
  )
 
  render() {
   let post = this.state.images.length !== 0?
     this.state.images.results.map(post => {
            return(
              <div className = "image" key = {post.id}>
                <img src= {`${post.urls.small}`} alt = {`${post.id}`} />
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

export default Category;
