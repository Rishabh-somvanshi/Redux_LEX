import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
const TodoList = ({ todos, onTodoClick }) => (
  <ul style={{"marginLeft":"285px","display":"inline-block"}}><br/>
    <li 
     style={{"listStyleType":"none","fontSize":"16px","fontWeight":"bold"}}>
     My action items:</li>
     {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
     ))}
  </ul>
)
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}
export default TodoList
