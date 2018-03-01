import React, { Component } from 'react'
import './Preview.css'

class Preview extends Component {
  render() {
    const { title, data, description } = this.props
    return (
      <article className='article-preview-item'>
        <h1 className='title'>title</h1>
        <span className="date">data</span>
        <p className="desc">description</p>
      </article>  
    )
  }
}