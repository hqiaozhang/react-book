import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    const { active, children, onClick } = this.props
    if (active) {
      return <span>{children}</span>
    }
  
    return (
      // eslint-disable-next-line
      <a href="#"
         onClick={e => {
           e.preventDefault()
           onClick()
         }}
      >
        {children}
      </a>
    )
  }
}