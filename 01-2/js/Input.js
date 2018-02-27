/*
 * @Author: zhanghongqiao@hiynn.com 
 * @Date: 2018-02-26 14:33:38 
 * @Description: 两种input
 * @Last Modified by: zhanghongqiao@hiynn.com
 * @Last Modified time: 2018-02-26 16:09:57
 */

import React, { Component, PropTypes } from 'react'

export default class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      textareaValue: '',
      radioValue: '',
      coffee: [],
      area: ''
    }
    this.handleRadioChange = this.handleRadioChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleTextareaChange = this.handleTextareaChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  /**
   * 单选按钮事件
   * @param {any} e 
   */
  handleRadioChange(e) {
    this.setState({
      radioValue: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    // 当然，也可以使用原生的接口，如 document.querySelector
    const { value } = this.refs.name
    console.log('value', value)
  }

  /**
   * 
   * @returns  
   */
  getForm() {
    return (
      <form>
        <input ref="name" type="text" defaultValue="Hangzhou" />
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </form>
    )
  }

  /**
   * 单行输入框事件
   * @param {any} e 
   */
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  /**
   * 多行输入框事件
   * @param {any} e 
   */
  handleTextareaChange(e) {
    this.setState({
      textareaValue: e.target.value
    })
  }

  /**
   * @description 
   * @param {any} e 
   */
  handleCheckboxChange(e) {
    const { checked, value } = e.target
    let { coffee } = this.state
   
    if(checked && coffee.indexOf(value) === -1){
      coffee.push(value)
    }else{
      coffee = coffee.filter(i => i !== value)
    }
    this.setState({
      coffee
    })
    console.log(coffee)
  }

  /**
   * select
   * @param {any} e 
   */
  handleSelectChange(e) {
    this.setState({
      area: e.target.value
    })

    console.log(e.target.value)
  }

  /**
   * select 元素
   * @returns  
   */
  getSelect() {
    const { area } = this.state
    let data = [
      {
        name: '北京',
        key: 'beijing'
      }, {
        name: '上海',
        key: 'shanghai'
      }, {
        name: '杭州',
        key: 'hangzhou'
      }
    ]
    return(
      //  select 元素设置  multiple={true}
      <select value={area} onChange={this.handleSelectChange}>
      {
        data.map((d) => {
          return <option value={d.key}>{d.name}</option> 
        })
      }
      </select>  
    )
  }

  /**
   * 复选按钮
   * @returns  
   */
  getCheckbox() {
    const { coffee } = this.state
    let data = ['Cappuccino', 'CafeMocha', 'Caffè Latte', 'Machiatto']
    return(
      <div style={{marginBottom: '30px'}}>
        <p>请选择你最喜欢的咖啡：</p>
        {
          data.map((d) => {
            return (
            <label>
              <input type="checkbox" value={d} onChange={this.handleCheckboxChange} />{d} 
              <br />  
            </label>
          )
          })
        }
      </div>  
    )
  }

  /**
   * 单选按钮
   * @returns  
   */
  getRadio() {
    const { radioValue } = this.state
    return(
      <div>
        <p>gender:</p>
        <label>
          male: 
          <input
            type="radio"
            value="male"
            checked={radioValue === 'male'}
            onChange={this.handleRadioChange}
          />
        </label>

        <label>
          female:
          <input
          type="radio"
          value="female"
          checked={radioValue === 'female'}
          onChange={this.handleRadioChange}
          />
        </label>
      </div>  
    )
  }

  /**
   * 文本输入框
   * @returns  
   */
  getTextInput() {
    const { inputValue, textareaValue } = this.state
    return(
      <div>
        <p>单行输入框：<input type="text" value={inputValue} 
        onChange={this.handleInputChange} /></p>
        <p>多行输入框：<textarea type="text" value={textareaValue} 
        onChange={this.handleTextareaChange} /></p>
      </div>  
    )
  }

  /**
   * 渲染
   * @returns  
   */
  render() {
    return(
      <div className="inputs">
        {this.getTextInput()}
        {this.getRadio()}
        {this.getCheckbox()}
        {this.getSelect()}
        {this.getForm()}
      </div>
    )  
  }
}