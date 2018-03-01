import React, { PropTypes, Component } from 'react'
import Preview from './Preview'
 
export default class PreviewList extends Component {

  componentDidMout() {
    this.props.loadArticle()
  }

  render() {
    const { articleList, loading, error } = this.props
    if (error) {
      return <p className="message">Oops, something is wrong.</p>
      }
      if (loading) {
      return <p className="message">Loading...</p>
      }

    return articleList.map(item => (
      <Preview {...item} key={item.id} />
    ))
  }
}
