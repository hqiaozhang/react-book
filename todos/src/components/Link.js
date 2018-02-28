import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Link extends Component {
  
  render() {
    const  { active } = this.props
    if(active) {
      return <span>{children}</span>
    }

    return (
      <a href=''>
        {children}
      </a>  
    )
  }
}