import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/detail'>Detail</Link>
      </nav>  
    )
  }
}