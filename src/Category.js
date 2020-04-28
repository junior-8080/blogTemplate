import React, { Component } from 'react';

import Header from "./Header"
import Features from "./Features"
import Pargination from "./Pagination"
import "./header.css"

const api_key = process.env.REACT_APP_API_KEY

class Category extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      images : [],
      query: props.match.params.id,
      isLoading: false,
      pageNumber : 1
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.history.push(`/photos/${this.state.query}`)
  }

  componentDidMount(){
    fetch(`https://api.unsplash.com/search/photos/?page=${this.state.pageNumber}&query=${this.state.query}&client_id=`+api_key)
      .then(res => res.json())
      .then(data => {
          this.setState({
            images: data
          })
          
      })
  }
// why this..
  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    if (nextProps.match.params.id !== this.props.match.params.id) {
      fetch(`https://api.unsplash.com/search/photos/?page=${this.state.pageNumber}&query=${nextProps.match.params.id}&client_id=`+api_key)
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
 
  handlePrevious = () => (
      this.state.pageNumber >= 1?
      fetch(`https://api.unsplash.com/search/photos/?page=${this.state.pageNumber - 1}&query=${this.state.query}&client_id=`+api_key)
        .then(res => res.json())
        .then(data => {
          this.setState({
            images: data
          })
          
      })
      : null
  )
  
  handleNext = () => (
    this.state.pageNumber < this.state.images.total_pages?
    fetch(`https://api.unsplash.com/search/photos/?page=${this.state.pageNumber + 1}&query=${this.state.query}&client_id=`+api_key)
      .then(res => res.json())
      .then(data => {
          this.setState({
            images: data
          })
          
      })
    : null
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
            handleSubmit ={this.handleSubmit}
            /> 
            <h1>This is category</h1>
        <main className="main">
          <Features className="features"  />
          <div className="gallery">
            {
              post
            }
          </div>
          <small>page {`${this.state.pageNumber}`}</small>
          <Pargination  handleNext = {this.handleNext} handlePrevious = {this.handlePrevious}/>
        </main>   
    </div>  
    );
  }  
}

export default Category;
