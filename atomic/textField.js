import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text']),
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  className: PropTypes.string,
  innerLabel: PropTypes.string,

}

const defaultProps = {
  type: 'text',
  className: '',
  innerLabel: '',
  value: ''
}

const TextField = (props) => {
  const [value, setValue] = useState(props.value)

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const handleChange = (e) => {
    setValue(e.currentTarget.value)
    props.onChange(e.currentTarget.value)
  }

  return (
    <div className="form-group">
      <div className={'input-group ' + props.className}>
        {
          props.innerLabel !== '' ? (
            <div className="input-group-prepend">
              <span className="input-group-text">
                {props.innerLabel}
              </span>
            </div>
          ) : (
            null
          )
        }
        <div className="form-control position-static">
          <input
            id={props.id}
            type={props.type}
            className={'w-100' + (value || props.innerLabel !== '' ? ' has-value' : '')}
            onChange={(e) => handleChange(e)}
            value={value}
          />
          <label className="form-label" htmlFor={props.id}>
            {props.label}
          </label>
        </div>
      </div>
    </div>
  )
}

TextField.propTypes = propTypes

TextField.defaultProps = defaultProps

export default TextField
