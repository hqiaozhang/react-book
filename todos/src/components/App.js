import React, { Component } from 'react'
import AddTodo from '../containers/AddTodo'
import Footer from './Footer'
import VisibleTodoList from '../containers/VisibleTodoList'
 
export default class App extends Component {
  
  render() {
    return <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  }
} 
