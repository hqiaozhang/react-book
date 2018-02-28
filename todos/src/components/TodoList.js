import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    const { todos } = this.props
    return (
      <ul>
        {
          todos.map((todo, index) => (
            <Todo key={index} {...todo} />
          ))
        } 
      </ul>
    )  
  }
}