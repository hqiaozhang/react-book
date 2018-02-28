import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './redux/configureStore'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { hashHistory } from 'react-router'
import routes from './routes'
let obj = {'a': 'aa', 'b': 'bb'}
console.log({...obj})

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render((
  <Provider store={store}>
    {routes(history)}  
  </Provider>
), document.getElementById('root'))
