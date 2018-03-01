import React, { Component } from 'react'
import Todo from './Todo'


export default class TodoList extends Component {
  render() {
    const { todos, onTodoClick } = this.props
    return (
      <ul>
        {
          todos.map(todo => (
            <Todo text = {todo.text} {...todo} key={todo.id} 
            onClick={() => onTodoClick(todo.id)}  />
          ))
        }
      </ul>  
    )
  }
}