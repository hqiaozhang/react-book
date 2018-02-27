/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-26 11:17:11 
 * @Description: tab内容
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-26 13:33:47
 */

import React, { Component, PropTypes, cloneElement } from 'react'
import classnames from 'classnames'

 export default class TabContent extends Component {

  static propTypes = {
    classPrefix: PropTypes.string,
    panels: PropTypes.node,
    activeIndex: PropTypes.number
  }

  getTabPanes() {
    const { classPrefix, activeIndex, panels } = this.props
    return panels.map((child) => {
      if(!child) {
        return
      }
      const order = parseInt(child.props.order, 10)
      const isActive = activeIndex === order
      
      return React.cloneElement(child, {
        classPrefix,
        isActive,
        children: child.props.children,
        key: `tabpane-${order}`
      })

    })
  }

   render() {
     const { classPrefix } = this.props
     const classes = classnames({
      [`${classPrefix}-content`]: true,
    })

    return (
      <div className={classes}>
        {this.getTabPanes()}
      </div>  
    )
   }
 }
