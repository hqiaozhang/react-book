/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-26 14:36:14 
 * @Description: 二维码
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-26 14:40:11
 */

import React, { Component, PropTypes } from 'react'

export default class QrCode extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      active: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickQr = this.handleClickQr.bind(this)
  }

  componentDidMount() {
    document.body.addEventListener('click', e => {
      this.setState({
        active: false
      })
    })
    document.querySelector('.code').addEventListener('click', e => {
      e.stopPropagation();
      })
  }

  componentWillUnmount() {
    document.body.removeEventListener('click');
    document.querySelector('.code').removeEventListener('click');
  }

  componentDidMount() {
    document.body.addEventListener('click', e => {
      if(e.target && e.target.matches('div.code')) {
        return
      }
      this.setState({
        active: false
      })
    })
  }

  handleClick() {
    this.setState({
      active: !this.state.active
    })
  }

  handleClickQr(e) {
    d.stopPropagation()
  }

  render() {
    return (
      <div className="qr-wrapper">
        <button className="qr" onClick={this.handleClick}>二维码</button>
        <div
          className="code"
          style={{display: this.state.active ? 'block' : 'none'}}
          onClick = {this.handleClickQr}
        >
        <img src='../img/QR-code.png' alt="qr" width="90" height="90" />
        </div>
      </div>
    )
  }
}
