import React from 'react'
import PropTypes from 'prop-types'
import sdkWebLogo from '../../../images/sdk-web-logo@2x.png'
// import globalStyles from '../../../globalStyles.module.scss'

export default function StepOne({ next }) {
  return (
    <div className="mobile-intro">
      <img className="mobile-intro-logo" src={sdkWebLogo} alt="" />
      <h1 className="h2">Welcome</h1>
      <p className="p-sm">
        During this demo you will use your phone to scan items on your computer
        screen and simulate a retail shopping experience. Your computer is the
        store, and your phone is the online shopping cart.
        <br />
        <br />
        Code’s CortexDecoder is now running inside this web browser ready to
        scan items into your shopping cart.
        <br />
        <br />
        Click Next to Proceed.
      </p>
      <div className="mobile-footer">
        <button className="btn-primary mobile-btn" onClick={() => next()}>
          Next
        </button>
      </div>
    </div>
  )
}

StepOne.propTypes = {
  next: PropTypes.func
}
