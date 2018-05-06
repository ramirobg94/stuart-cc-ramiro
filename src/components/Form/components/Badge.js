import React from 'react'

import PropTypes from 'prop-types'

import PickUpBlank from '../../../statics/pickUpBadgeBlank.svg'
import PickUpError from '../../../statics/pickUpBadgeError.svg'
import PickUpPresent from '../../../statics/pickUpBadgePresent.svg'
import DropOffBlank from '../../../statics/dropOffBadgeBlank.svg'
import DropOffError from '../../../statics/dropOffBadgeError.svg'
import DropOffPresent from '../../../statics/dropOffBadgePresent.svg'

const icons = {
  pickUp: {
    blank: PickUpBlank,
    error: PickUpError,
    present: PickUpPresent
  },
  dropOff: {
    blank: DropOffBlank,
    error: DropOffError,
    present: DropOffPresent
  }
}

const Badge = ({ id, address }) => (
  <img
    className="badge"
    alt={id}
    src={
      address.error
        ? icons[id].error
        : address.valid
          ? icons[id].present
          : icons[id].blank
    }
  />
)

export default Badge

Badge.propTypes = {
  id: PropTypes.string,
  address: PropTypes.object
}
