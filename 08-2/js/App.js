import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Mock from 'mockjs'
import BarCharts from './charts/BarCharts'
import LineChart from './charts/LineChart'

const action = {
  display: 'inline-block',
  height: 30,
  lineHeight: '30px',
  padding: '0 20px',
  backgroundColor: '#0e7bef',
  color: '#fff',
  fontSize: 14,
  cursor: 'pointer',
  borderRadius: 3
}
   // 
class App extends Component {

  state = {
    data: this.generateData()
  } 

  generateData() {
    return Mock.mock({
      'code': 1,
        'msg': 'success',
        'result|8-12': [
          {
            'name': '@cname',
            'value|1-12000': 1 // 100以内随机整数
          }
        ]
    })
  }

  handleClick = () => {
    this.setState({
      data: this.generateData()
    })
  }

  render() {
    
    const { data } = this.state

    return(
      <div>
         <a style={action} onClick={this.handleClick}>Click to Update data</a>
        <BarCharts data={data.result} id="barcharts" />
        <LineChart data={data.result} width={400} height={300}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)