import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// compose(...functions) 从右到左来组合多个函数
const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore)

const reducer = combineReducers(Object.assign({}, rootReducer, {
  routing: routerReducer,
}))

export default function configureStore(initalState) {
  const store = finalCreateStore(reducer, initalState)
  return store
}