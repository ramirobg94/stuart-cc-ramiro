import React, { Component } from 'react'
import './Form.css'

import PropTypes from 'prop-types'

import Badge from './components/Badge'
import Input from './components/Input'
const WAIT_INTERVAL = 1000

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.timeout = 0

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (field, value) => {
    this.props.handleChange(field, value)
    if (this.timeout) clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.props.onBlur(field, value)
    }, WAIT_INTERVAL)
  };

  componentDidMount() {
    if (this.timeout) clearTimeout(this.timeout)
  }
  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout)
  }

  render() {
    const { pickUp, dropOff, onBlur, loading, postJob } = this.props
    return (
      <div className="Form">
        <div className="flex-column">
          <Badge id="pickUp" address={pickUp} />
          <Badge id="dropOff" address={dropOff} />
        </div>
        <div className="flex-column left-column">
          <Input
            id="pickUp"
            address={pickUp}
            placeholder="Pick up address"
            onChange={this.handleChange}
            onBlur={onBlur}
          />
          <Input
            id="dropOff"
            address={dropOff}
            placeholder="Drop up address"
            onChange={this.handleChange}
            onBlur={onBlur}
          />

          <button
            onClick={() => postJob()}
            disabled={!pickUp.valid || !dropOff.valid}
            className={`button ${
              loading || !pickUp.valid || !dropOff.valid ? 'loading' : ''
            }`}
          >
            {loading ? 'Creating...' : 'Create job'}
          </button>
        </div>
      </div>
    )
  }
}

Form.propTypes = {
  handleChange: PropTypes.func,
  onBlur: PropTypes.func,
  pickUp: PropTypes.object,
  dropOff: PropTypes.object,
  loading: PropTypes.bool,
  postJob: PropTypes.func
}
