import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './Form.css';

import PickUpBlank from '../../statics/pickUpBadgeBlank.svg'
import PickUpError from '../../statics/pickUpBadgeError.svg'
import PickUpPresent from '../../statics/pickUpBadgePresent.svg'
import DropOffBlank from '../../statics/dropOffBadgeBlank.svg'
import DropOffError from '../../statics/dropOffBadgeError.svg'
import DropOffPresent from '../../statics/dropOffBadgePresent.svg'

export default class Form extends Component {

  constructor(props){
    super(props)
    this.state = {
      pickUp: '',
      dropOff: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (field, value) => {
    this.setState({[field]: value})
    this.props.handleChange(field)
  }

  render() {

    const { pickUp, dropOff, onBlur } = this.props

    return (
      <div className="Form">
        <div className="flex-column">
            <img className="badge" src={
              pickUp.address === '' && pickUp.error === false ? PickUpBlank :
                (pickUp.error ? PickUpError : PickUpPresent)
              }/>
              <img className="badge" src={
              dropOff.address === '' && dropOff.error === false ? DropOffBlank :
                (dropOff.error ? DropOffError : DropOffPresent)
              }/>
        </div>
        <div className="flex-column left-column">
            <input
              className="input"
              placeholder="Pick up address"
              id='pickUp'
              value={pickUp.error ? 'An invalid pick up address' : this.state.pickUp}
              onChange={e=> this.handleChange(e.target.id,e.target.value)}
              onBlur={e=>onBlur(e.target.id, e.target.value)}
              type="text"/>

            <input
              className="input"
              placeholder="Drop off address"
              id='dropOff'
              value={dropOff.error ? 'An invalid drop off address' : this.state.dropOff}
              onChange={e=> this.handleChange(e.target.id,e.target.value)}
              onBlur={e=>onBlur(e.target.id, e.target.value)}
              type="text"/>

            <button className="button">Create job</button>
        </div>
      </div>
    )
  }
}

