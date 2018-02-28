import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})
// 上面的写法和下面完全等价：
// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }
export default todoApp

/* combineReducers() 所做的只是生成一个函数，这个函数来调用你的一系列 reducer，
  每个 reducer 根据它们的 key 来筛选出 state 中的一部分数据并处理，
  然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象。
  没有任何魔法。正如其他 reducers，
  如果 combineReducers() 中包含的所有 reducers 都没有更改 state，
  那么也就不会创建一个新的对象。
*/