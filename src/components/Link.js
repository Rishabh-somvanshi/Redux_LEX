import React from 'react'
import PropTypes from 'prop-types'
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <div className="btn btn-primary" 
    style={{"display":"inline-block"}}>{children}</div>
  }
  return (
    <a className="btn btn-default"
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Link
