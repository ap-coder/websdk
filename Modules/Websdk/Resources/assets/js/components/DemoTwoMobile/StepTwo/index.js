import React from 'react'
import PropTypes from 'prop-types'
// import globalStyles from '../../../globalStyles.module.scss'

export default function StepTwo({ prev, next }) {
  return (
    <div className="mobile-scanning-layout">
      <div className="mobile-scanning-screen">
        <p className="alert" role="alert">
          Scan an item to add it to your shopping cart.
        </p>
      </div>
      <div className="mobile-scanning-footer">
        <button className="mobile-scanning-btn-back" onClick={() => prev()}>
          Back
        </button>
        <button className="mobile-scanning-btn-cart" onClick={() => next()}>
          <span className="sr-only">Cart</span>
        </button>
      </div>
    </div>
  )
}

StepTwo.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func
}
