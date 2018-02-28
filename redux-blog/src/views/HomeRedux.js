/* combineReducers 辅助函数的作用是，
  把一个由多个不同 reducer 函数作为 value 的 object，
  合并成一个最终的 reducer 函数，
  然后就可以对这个 reducer 调用 createStore。
*/
import { combineReducers } from 'redux'
import list from '../componenst/Home/PreviewListRedux'

export default combineReducers({
  list
})

export * as listAction from '../componenst/Home/PreviewListRedux'