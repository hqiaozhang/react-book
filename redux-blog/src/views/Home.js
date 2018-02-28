/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-28 09:14:30 
 * @Description: 主页
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-28 13:32:05
 */

 import React, { Component } from 'react'
 import { bindActionCreators } from 'redux'
 import { connect } from 'react-redux'
 import PreviewList from '../componenst/Home/PreviewList'
 import { listActions } from './HomeRedux'

 class Home extends Component {
   render() {
     return (
       <div>
         <h1>Home</h1>
        <PreviewList
          {...this.props.list}
        />
       </div>
     )
   }
 }
 

function mapStateToProps(state) {
  return {
    list: state.home.list
  }
}

function mapDispatchToProps(dispath) {
  return { listActions: bindActionCreators(listActions, dispath) }
}
 
export default connect(mapStateToProps, mapDispatchToProps)

//  export default connect(state => {
//    return {
//      list: state.home.list
//    }
//  }, dispath => {
//    return {
//      listActions: bindActionCreators(listActions, dispath)
//    }
//  })(Home)
