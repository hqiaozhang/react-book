/**
 * 接收旧的 state 和 action，返回新的 state。
 * 不直接修改 state 中的字段，而是返回新对象。
 * 新的 todos 对象就相当于旧的 todos 在末尾加上新建的 todo。
 * 而这个新的 todo 又是基于 action 中的数据创建的。
 * @param {*} state 
 * @param {*} action 
 */
const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          flag: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => 
        (todo.id === action)
        ? {...todo, flag: !todo.flag}
        : todo
      )
    default:
      return state  
  }
}
export default todos