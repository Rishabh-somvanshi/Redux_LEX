import React from 'react'
import { connect } from 'react-redux'
import { callAddToDo } from '../actions'
let AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form className="form-horizontal" style={{"marginLeft":"325px"}}
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(callAddToDo(input.value))
          input.value = ''
        }}
      >
        <input style={{"height":"34px","position":"relative","top":"2px",
        "box-sizing":"border-box","padding":"5px"}} placeholder="Add new item"
          ref={node => {
            input = node
          }}
        />&nbsp;&nbsp;
        <button type="submit" className="btn btn-primary">
          Add Todo
        </button><br/><br/>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)
export default AddTodo
