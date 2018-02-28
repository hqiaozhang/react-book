import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
// 引入请求middleware 的工厂方法
import createFetchMiddleware from 'redux-composable-fetch'
import rootReducer from './reducers'

// 创建一个请求 middleware的示例
const fetch = createFetchMiddleware()

const finalCreateStore = compose(
  applyMiddleware(
    thunk,
    // 将请求的middleware注入store增强器中
    fetch
  ))(createStore)
const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer
}))

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState)
  return store
}