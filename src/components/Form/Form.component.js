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

  render() {


    return (
      <div className="Form">
        <div className="flex-column">
            <img className="badge" src={PickUpBlank}/>
            <img className="badge" src={DropOffBlank}/>
        </div>
        <div className="flex-column left-column">
            <input className="input" placeHolder="Pick up address" type="text"/>
            <input className="input" placeHolder="Drop off address" type="text"/>
            <button className="button">Create job</button>
        </div>
      </div>
    )
  }
}