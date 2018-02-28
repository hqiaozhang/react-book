import React, { Component, PropTypes } from 'react'
 
import Preview from './Preview'

export default class PreviewList extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.bool,
    articleList: PropTypes.arrayOf(PropTypes.object),
    loadArticles: PropTypes.func
  }

  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    const { loading, error, articleList } = this.props
    if(error) {
      return <p className='message'>wrong</p>
    }
    if(loading) {
      return <p className='message'>Loading...</p>
    }
    
    return articleList.map(item => (<Preview {...item} key={item.id} />))
  }
}