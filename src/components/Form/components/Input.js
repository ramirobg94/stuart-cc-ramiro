import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ placeholder, id, address, onChange, onBlur }) => (
  <input
    className="input"
    placeholder={placeholder}
    id={id}
    value={
      address.error
        ? `An invalid ${placeholder.toLowerCase()}`
        : address.address
    }
    onChange={e => onChange(e.target.id, e.target.value)}
    onBlur={e => onBlur(e.target.id, e.target.value)}
    type="text"
  />
)

export default Input

Input.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  address: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}
