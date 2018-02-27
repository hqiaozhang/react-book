import React, { Component, PropTypes } from 'react'

class ListItem extends Component {
  static defaultProps = {
    text: '',
    checked: false
  }

  render() {
    return(
      <li>
        <input type="checkbox" checked={this.props.checked}
        onChange={this.props.onChange} />
        <span>{this.props.value}</span>
      </li>  
    )
  }
}

class List extends Component {
  static defaultProps = {
    list: [],
    handleItemChange: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      list: this.props.list.map(entry => ({
        text: entry.text,
        checked: entry.checked
      }))
    } 
  }

  onItemChange(entry) {
    const { list } = this.state
    this.setState({
      list: list.map(prevEntry => ({
        text: prevEntry.text,
        checked: prevEntry.text === entry.text ?
          !prevEntry.checked : prevEntry.checked
      }))
    })
    this.props.handleItemChange(entry)
  }

  render() {
    return(
      <div>
        <ul>
          {this.state.list.map((entry, index) => (
            <ListItem
              key={`list-${index}`}
              value={entry.text}
              checked={entry.checked}
              onChange={this.onItemChange.bind(this, entry)}
            />
          ))}
        </ul>  
        <List1 list={[{text: 1}, {text: 2}]} />
      </div>  
    )
  }
}

///-------------------跨级组件通信
class ListItem2 extends Component {
  static contextTypes = {
    color: PropTypes.string
  }
  render() {
    const { value } = this.props
    return(
      <li style={{background: this.context.color}}>
        <span>{value}</span>
      </li>
    )
   
  }
}

class List1 extends Component {
  static childContextTypes = {
    color: PropTypes.string
  }
  getChildContext() {
    return {
      color: 'red'
    }
  }

  render() {
    const { list } = this.props
    return(
      <ul>
        {
          list.map((entry, index) => (
            <ListItem2 key={`list-${index}`} value={entry.text} />
          )) 
        }
      </ul> 
    )
  }
}

export default List