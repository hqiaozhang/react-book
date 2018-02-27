import React, { Component, PropTypes } from 'react'
import { scaleBand } from 'd3-scale'
import { range as d3Range } from 'd3-array'
import { select, selectAll } from 'd3-selection'
import { getYScale } from './util'

/**
 * 获取X轴
 * @param {array} data 
 * @param {number} width 
 * @param {number} height 
 * @param {object} margin 
 */
const getXscale = (data, width, height, margin) => {
  return scaleBand()
    .domain(d3Range(data.length))
    .range([margin.left, width - margin.right])
}

class BarCharts extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    // data: PropTypes.arrayOf(PropTypes.number),
    margin: PropTypes.shape({
      top: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
    })
  }

  static defaultProps = {
    width: 400,
    height: 300,
    fill: '#569e3d',
    margin: { top: 10, right: 10, bottom: 30, left: 60 },
    itemStyle: {
      fill: '#569e3d'
    }
  }

  /**
   * 在初始化render之后只执行一次，在这个方法内，可以访问任何组件，
   * componentDidMount()方法中的子组件在父组件之前执行
   */
  componentDidMount() {
    const { width, height, data, margin } = this.props
    const dataset = data.map(d => d.value)
    const xScale = getXscale(data, width, height, margin)
    const yScale = getYScale(dataset, width, height, margin)
    const container = this.props.id // 获取容器id
    // 创建svg
    const svg = select(`#${container}`)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
    // x轴
    svg.append('g')
      .classed('x-axis', true)
    // y轴
    svg.append('g')
      .classed('y-axis', true)
    // 柱子 bar
    svg.append('g')
      .classed('bars', true)
    this.svg = svg     
    // 渲染bar  
    this.renderBars(xScale, yScale) 
    // 渲染x轴
    this.renderXAxis(xScale, yScale)
    // 渲染y轴
    this.renderYAxis(xScale, yScale)
  }

  /**
   * 组件更新结束之后执行，在初始化render时不执行
   */
  componentDidUpdate() {
    const { width, height, data, margin } = this.props
    const dataset = data.map(d => d.value)
    const xScale = getXscale(data, width, height, margin)
    const yScale = getYScale(dataset, width, height, margin)

    this.renderBars(xScale, yScale)
    this.renderXAxis(xScale, yScale)
    this.renderYAxis(xScale, yScale)
  }

  /**
   * 卸载
   */
  componentWillUnmount() {
    if (this.svg) {
      this.svg.remove()
      this.svg = null
    }
  }

  /**
   * 渲染x轴 
   * @param {any} xScale 
   * @param {any} yScale 
   */
  renderXAxis(xScale, yScale) {
    const {data } = this.props
    const xAxis = this.svg.select('.x-axis')
    const ticks = xScale.domain()
      .map((entry, index) => (
        { x: xScale(index), value: data[index].name }
      ))  
    const bandwidth = xScale.bandwidth()
    const xRange = xScale.range()
    const yRange = yScale.range()

    // axis line
    const axisLine = [{
        x1: xRange[0],
        x2: xRange[xRange.length - 1],
        y1: yRange[0],
        y2: yRange[0],
      }]
    const axisLineGroup = xAxis.selectAll('.axis-line')
      .data(axisLine) 
    // 横坐标线
    const enter = axisLineGroup.enter()
      .append('line')
      .classed('axis-line', true)
      .attr('stroke', 'black')
    // 处理enter部分  
    enter
      .attr('x1', d => d.x1)
      .attr('x2', d => d.x2)
      .attr('y1', d => d.y1)
      .attr('y2', d => d.y2)
    
    // ticks
    const tickGroups = xAxis.selectAll('.tick')
      .data(ticks)
    const enterTick = tickGroups.enter()
      .append('g')
      .classed('tick', true)
    
    const text = enterTick.append('text')  
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'hanging')
    
    const line = enterTick.append('line')
      
      .attr('stroke', 'black');
    // enter    
    text.attr('x', d => d.x + bandwidth / 2)
    .attr('y', yRange[0] + 8)
    .text(d => d.value)
    // line
    line.attr('x1', d => d.x + bandwidth / 2)
    .attr('x2', d => d.x + bandwidth / 2)
    .attr('y1', yRange[0])
    .attr('y2', yRange[0] + 6)
    // exit部分
    tickGroups.exit().remove()
  }

  renderYAxis(xScale, yScale) {
    const yAxis = this.svg.select('.y-axis')
    const ticks = yScale.ticks(5)
      .map((entry) => (
        { y: yScale(entry), value: entry }
      ))
    const xRange = xScale.range()
    const yRange = yScale.range()
    
    // axis line
    const axisLine = [{
        x1: xRange[0],
        x2: xRange[0],
        y1: yRange[0],
        y2: yRange[1],
    }]

    const axisLineGroup = yAxis.selectAll('.axis-line')
    .data(axisLine)
    const enter = axisLineGroup.enter()
      .append('line')
      .classed('axis-line', true)
      .attr('stroke', 'black')
    // enter  
    enter.attr('x1', d => d.x1)
    .attr('x2', d => d.x2)
    .attr('y1', d => d.y1)
    .attr('y2', d => d.y2) 

    const tickGroups = yAxis.selectAll('.tick')
      .data(ticks)

      const enterTick = tickGroups.enter()
      .append('g')
      .classed('tick', true);

    const text = enterTick.append('text')
    .attr('text-anchor', 'end')
    .attr('dominant-baseline', 'central')
 
    const line = enterTick.append('line')
    .attr('stroke', 'black');
 
    text.attr('x', d => xRange[0] - 8)
    .attr('y', d => d.y)
    .text(d => d.value);

    line.attr('x1', xRange[0] - 6)
    .attr('x2', xRange[0])
    .attr('y1', d => d.y)
    .attr('y2', d => d.y);
    // exit
    tickGroups.exit().remove()
  }

  /**
   * 渲染柱子
   * @param {function} xScale x轴比例尺 
   * @param {function} yScale y轴比例尺
   */
  renderBars(xScale, yScale) {
    const self = this
    const {data, height, fill, margin } = this.props
    const barWidth = xScale.bandwidth()
    const yRange = yScale.range()

    const update = this.svg.select('.bars')
      .selectAll('.bar')
      .data(data)
    
    const enter = update.enter().append('g')
    
    enter.classed('bar', true)
      .attr('transform', (d, i) => `translate(${margin.left + i * barWidth}, 0)`)
    
    enter.append('rect')
      .attr('y', d => yScale(d.value))
      .attr('height', d => yRange[0] - yScale(d.value))
      .attr('width', d => barWidth - 1)
      .attr('fill', fill);

    update.attr('transform', (d, i) => `translate(${margin.left + i * barWidth}, 0)`)
      update.select('rect')
        .attr('y', d => yScale(d.value))
        .attr('height', d => yRange[0] - yScale(d.value))
        .attr('width', d => barWidth - 1)
        .attr('fill', fill)
    
        update.exit().remove();      

  }

  render() {
    return <div className="bar-chart" id={this.props.id}></div>
  }
}

export default BarCharts