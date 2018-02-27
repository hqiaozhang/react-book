/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-26 09:25:09 
 * @Description: 切换
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-26 16:54:14
 */
import React, { Component, PropTypes, cloneElement } from 'react'
import TabNav from './TabNav'
import TabContent from './TabContent'
import styles from '../css/style.scss'

export default class Tabs extends Component {

  static defaultProps = {
    classPrefix: 'tabs',
    onChange: () => {}
  }

  static PropTypes = {
    className: PropTypes.string,
    classPrefix: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    defaultActiveIndex: PropTypes.number,
    activeIndex: PropTypes.number,
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props) 
    const currProps = this.props
    this.handleTabClick = this.handleTabClick.bind(this)
    let activeIndex
    if('activeIndex' in currProps) {
      activeIndex = currProps.activeIndex
    } else if ('defaultActiveIndex' in currProps) {
      activeIndex = currProps.defaultActiveIndex
    }
    this.state = {
      activeIndex,
      prevIndex: activeIndex
    }
  }

  /* 当props发生变化时执行，初始化render时不执行，
    在这个回调函数里面，你可以根据属性的变化，
    通过调用this.setState()来更新你的组件状态，
    旧的属性还是可以通过this.props来获取,这里调用更新状态是安全的，
    并不会触发额外的render调用
  */
  componentWillReceiveProps(nextProps) {
    if('activeIndex' in nextProps) {
      this.setState({
        activeIndex: nextProps.activeIndex
      })
    }
  }

  /**
   * @description 
   * @param {any} activeIndex 
   */
  handleTabClick(activeIndex) {
    const prevIndex = this.state.activeIndex
    if(this.state.activeIndex !== activeIndex && 
      'defaultActiveIndex' in this.props) {
        this.setState({
          activeIndex,
          prevIndex
        })
        this.props.onChange({ activeIndex, prevIndex })
      }
  }

  /**
   * 渲染nav
   */
  renderTabNav() {
    const { classPrefix, children } = this.props
    return(
      <TabNav 
        key="tabBar"
        classPrefix={classPrefix}
        onTabClick={this.handleTabClick}
        panels={children}
        activeIndex={this.state.activeIndex}
      />
    )
  }

  /**
   * 渲染content
   */
  renderTabContent() {
    const { classPrefix, children } = this.props
    return (
      <TabContent
        key='tabcontent'
        classPrefix={classPrefix}
        activeIndex={this.state.activeIndex}
        panels={children}
      />
    )
  }

  /**
   * 渲染
   */
  render() {
    return(
    <div className="ui-tabs">
      {this.renderTabNav()}
      {this.renderTabContent()}
    </div>)
  }
}
