import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {
  static propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }
  render() {
    const { onClick, completed, text } = this.props
    return (
      <li style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
      </li>  
    )
  }
}