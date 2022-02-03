import React from 'react'
import PropTypes from 'prop-types'
// import globalStyles from '../../../globalStyles.module.scss'
// import styles from './StepThree.module.scss'

const defaultData = {
  lastName: "Doe",
  firstName: "John",
  dateOfBirth: "1/1/1990",
  addressStreet: "123 Main Street",
  addressCity: "San Francisco",
  addressState: "CA",
  addressPostalCode: "94016"
}
export default function Body({ dataParsed = defaultData }) {
  const {
    lastName,
    firstName,
    dateOfBirth,
    addressStreet,
    addressCity,
    addressState,
    addressPostalCode
  } = dataParsed

  function toTitleCase(str) {
    if (str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    }

    return str
  }

  if (Object.keys(dataParsed).length > 0) {
    return (
      <>
        <h2 className="h2">Your Information</h2>
        <div className="demo-two-step-three-info">
          <p className="p">
            {toTitleCase(firstName)} {toTitleCase(lastName)}
          </p>
          <p className="p">{dateOfBirth}</p>
          <address>
            {toTitleCase(addressStreet)}
            <br />
            {toTitleCase(addressCity)} {addressState}{' '}
            {toTitleCase(addressPostalCode).slice(0, 5)}
          </address>
        </div>
        <p className="p">You have been prescribed the two following medications:</p>
        <div className="demo-two-step-three-grid grid-2">
          <div className="demo-two-step-three-card card">
            <h3 className="color-primary">Atorvastatin</h3>
            <p className="p-sm">Treats: high cholesterol</p>
          </div>
          <div className="demo-two-step-three-card card">
            <h3 className="color-primary">Albuterol</h3>
            <p className="p p-sm">Treats: asthma</p>
          </div>
        </div>
      </>
    )
  }
}

Body.propTypes = {
  dataParsed: PropTypes.object
}
