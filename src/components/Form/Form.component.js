import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './Form.css';

import PickUpBlank from '../../statics/pickUpBadgeBlank.svg'
import PickUpError from '../../statics/pickUpBadgeError.svg'
import PickUpPresent from '../../statics/pickUpBadgePresent.svg'
import DropOffBlank from '../../statics/dropOffBadgeBlank.svg'
import DropOffError from '../../statics/dropOffBadgeError.svg'
import DropOffPresent from '../../statics/dropOffBadgePresent.svg'

const WAIT_INTERVAL = 1000;

const icons = {
  pickUp:{
    blank: PickUpBlank,
    error: PickUpError,
    present: PickUpPresent,
  },
  dropOff:{
    blank: DropOffBlank,
    error: DropOffError,
    present: DropOffPresent,
  }
}

export default class Form extends Component {

  constructor(props){
    super(props)
    this.timeout =  0;

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (field, value) => {
    this.props.handleChange(field, value)
    if(this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.onBlur(field, value)
    }, WAIT_INTERVAL);
  }

  componentDidMount(){
    if(this.timeout) clearTimeout(this.timeout);
  }
  componentWillUnmount(){
    if(this.timeout) clearTimeout(this.timeout);
  }


  render() {
    const { pickUp, dropOff, onBlur } = this.props
    return (
      <div className="Form">
        <div className="flex-column">              
              <Badge id='pickUp' address={pickUp} />
              <Badge id='dropOff' address={dropOff} />
        </div>
        <div className="flex-column left-column">
          <Input
              id='pickUp'
              address={pickUp}
              placeholder="Pick up address"
              onChange={this.handleChange}
              onBlur={onBlur}
          />
          <Input
              id='dropOff'
              address={dropOff}
              placeholder="Drop up address"
              onChange={this.handleChange}
              onBlur={onBlur}
          />
            

            <button onClick={()=>this.props.postJob()} className={`button ${this.props.loading || pickUp.error ||  dropOff.error ? 'loading' : ''}`}>{this.props.loading  ? 'Creating...' : 'Create job'}</button>
        </div>
      </div>
    )
  }
}

const Badge = ({id, address}) =>
  <img
    className="badge" 
    src={ 
      address.error ? icons[id].error : (address.valid ? icons[id].present : icons[id].blank) 
    }
  />

const Input = ({placeholder, id, address, onChange, onBlur}) => 
  <input
    className="input"
    placeholder={placeholder}
    id={id}
    value={address.error ? `An invalid ${placeholder.toLowerCase() }` : address.address}
    onChange={e=> onChange(e.target.id,e.target.value)}
    onBlur={e=>onBlur(e.target.id, e.target.value)}
    type="text"/>

