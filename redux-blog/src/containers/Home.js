import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PreviewList from '../components/Home/PreviewList'
import { listActions } from './HomeRedux'
 

class Home extends Component {
  render() {
    const { list, listActions } = this.props
    return (
      <div>
        <h1>Home</h1>
        <PreviewList  
          {...list}
          {...listActions} />
      </div>  
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.home.list
})

const mapDispathToProps = (dispatch) => ({
  listActions: bindActionCreators(listActions, dispatch)
})

export default connect(
  mapStateToProps
)(Home)
 

