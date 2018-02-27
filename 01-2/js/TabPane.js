/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-26 09:48:09 
 * @Description: 面板
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-26 13:33:16
 */

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
 
export default class TabPane extends Component {

  static propTypes = {
    tab: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]).isRequired,
    order: PropTypes.string.isRequired,
    disable: PropTypes.bool,
    isActive: PropTypes.bool
  }

  render() {
 
    const { classPrefix, className, isActive, children } = this.props
    const classes = classnames({
      [className]: className,
      [`${classPrefix}-panel`]: true,
      [`${classPrefix}-active`]: isActive
    })
 
    return(
      <div role='tabpanel'
        className={classes}
        aria-hidden={!isActive}>
        {children}
      </div>
    )
  }
}
