import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed) 
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

/**
 * [mapStateToProps(state, [ownProps]): stateProps] (Function): 
 * 如果定义该参数，组件将会监听 Redux store 的变化
 * 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。
 * 该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。
 * @param {*} state 
 */
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = {
  onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList