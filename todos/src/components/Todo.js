import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    const { onClick, completed, text } = this.props
    console.log(completed)
    return (
      <li
        onClick={onClick}
        style={{textDecoration: completed ? 'line-through' : 'none'}}
      >
        {text}
     </li> 
    )
  }
}