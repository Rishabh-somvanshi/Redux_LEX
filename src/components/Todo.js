import React from 'react'
import PropTypes from 'prop-types'
const Todo = ({ onClick, completed, text }) => (
<div>
   <input type="checkbox" style={{"position":"relative","top":"2px"}}
   onClick={onClick}/>
   <li
    style={{
      "listStyleType":"none","display":"inline-block",textDecoration: completed   ? 'line-through' : 'none'
    }}>
     <span style={{"paddingLeft":"5px"}}>{text}</span>
  </li>
)
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
export default Todo
