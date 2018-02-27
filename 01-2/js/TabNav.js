/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-26 09:35:37 
 * @Description: 导航
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-26 13:30:57
 */

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class TabNav extends Component {
  getTabs() {
    const { panels, classPrefix, activeIndex } = this.props

      return panels.map((child) => {
        if(!child) { 
          return
        }
        const order = parseInt(child.props.order, 10)
    
        // 定义class 名
        let classes = classnames({
          [`${classPrefix}-tab`]: true,
          [`${classPrefix}-active`]: activeIndex === order,
          [`${classPrefix}-disabled`]: child.props.disabled
        })
        let events = {}
        if(!child.props.disabled) {
          events = {
            onClick: this.props.onTabClick.bind(this, order)
          }
        }
        const ref = {}
        if(activeIndex === order) {
          ref.ref = 'activeTab'
        }

        return (
          <li
          role="tab"
          aria-disabled={child.props.disabled ? 'true' : 'false'}
          aria-selected={activeIndex === order? 'true' : 'false'}
          {...events}
          className={classes}
          key={order}
          {...ref}
        >
          {child.props.tab}
        </li>
        )
      })   
  }

  /**
   * 渲染
   */
  render() {
    const { classPrefix } = this.props
    // 定义class 名
    const rootClasses = classnames({
      [`${classPrefix}-bar`]: true
    })
    const classes = classnames({
      [`${classPrefix}-nav`]: true,
    })

    return(
      <div className={rootClasses} role="tablist">
        <ul className={classes}>
          {this.getTabs()}
        </ul>
      </div>
    )
  }
}

