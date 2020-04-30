import React, { Component } from 'react';
import {Link} from "react-router-dom"
import MasonryGrid from "masonry-grid"

import Header from "./Header"
import Features from "./Features"
import Pargination from "./Pagination"
import Footer from "./Footer"
import "./home.css"

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

  componentDidMount(){
    fetch(`https://api.unsplash.com/search/photos/?page=${this.state.pageNumber}&query=${this.state.query}&client_id=`+api_key)
      .then(res => res.json())
      .then(data => {
          this.setState({
            images: data,
            pageNumber:1,
            isLoading:true
          })
          
      })
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    if (nextProps.match.params.id !== this.props.match.params.id) {
      fetch(`https://api.unsplash.com/search/photos/?page=${this.state.pageNumber}&query=${nextProps.match.params.id}&client_id=`+api_key)
      .then(res => res.json())
      .then(data => {
          this.setState({
            images: data,
            pageNumber:1,
          })
         
      })
    }
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
 
  handlePrevious = () => (

      this.state.pageNumber > 1?
      fetch(`https://api.unsplash.com/search/photos/?page=${this.state.pageNumber -1}&query=${this.state.query}&client_id=`+api_key)
        .then(res => res.json())
        .then(data => {
          this.setState({
            images: data,
          })
          this.setState((prev)=>({
            pageNumber : prev.pageNumber - 1
          }))  
      })
      : null
  )
  
  handleNext = () => (
    this.state.pageNumber < this.state.images.total_pages?
    fetch(`https://api.unsplash.com/search/photos/?page=${this.state.pageNumber + 1}&query=${this.state.query}&client_id=`+api_key)
      .then(res => res.json())
      .then(data => {
          this.setState({
            images: data,
          })
          this.setState((prev)=>{
             return{
               pageNumber : prev.pageNumber + 1
             }
          })
          
      })
    : null
  )

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.history.push(`/photos/${this.state.query}`)
  }

  render() {
   let post = this.state.images.length !== 0?
     this.state.images.results.map(post => {
            return(
              <div className="image" key = {post.id}>
                <Link to= {`/photo/preview/${post.id}`} className = "link" >
                  <img src= {`${post.urls.regular}`} alt = {`${post.id}`} width="400px" height="auto"/>
                </Link>
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
         {
           this.state.isLoading ?
          <main className="main">
            <Features className="features" handleClick={this.handleClick}/>
              <MasonryGrid gap="2px" className="masonry" minWidth="400">
                    {
                      post
                    }
                </MasonryGrid>
            <p className="page">page {`${this.state.pageNumber}`}</p>
            <Pargination  handleNext = {this.handleNext} handlePrevious = {this.handlePrevious}/>
          </main> 
        :
        <div class="loader"></div> 
         }
        
         
        <Footer />
    </div>  
    );
  }  
}

export default Category;
