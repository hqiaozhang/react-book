/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-28 11:11:07 
 * @Description: 纯渲染、无状态的文章预览组件
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-28 11:15:58
 */

 import React, { Component } from 'react'
 import PropTypes from 'prop-types'
 import './Preview.css'

 export default class Preview extends Component {
   static propTypes = {
     title: PropTypes.string,
     link: PropTypes.string
   }
   render() {
     return (
       <article className='article-preview-item'>
        <h1 className='title'>{this.props.title}</h1>
        <span className='date'>{this.props.date}</span>
        <p className='desc'>{this.props.description}</p>
       </article>  
     )
   }
 }