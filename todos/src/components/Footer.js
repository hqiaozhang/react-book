import React, { Component } from 'react'
import FilterLink from '../containers/FilterLink'

export default class Footer extends Component {
  render() {
    return (
      <p>
      Show:
      {" "}
      <FilterLink filter="all">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="active">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="completed">
        Completed
      </FilterLink>
    </p>
    )
  }
}