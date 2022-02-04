import React from 'react'
import PropTypes from 'prop-types'
// import globalStyles from '../../../globalStyles.module.scss'
import sdkWebLogo from '../../../images/sdk-web-logo@2x.png'

export default function StepFour({ jump }) {
  return (
    <>
      <img
        className="mobile-ending-logo"
        src={sdkWebLogo}
        alt=""
      />
      <p className="p">
        Thank you for experiencing the CortexDecoder WebSDK
        <br />
        <br />
        If you would like to experience the full capabilities of CortexDecoder,
        try out CortexScan in the Android Play Store or iOS App Store where you
        can explore the detailed configurations available within our decoder.
        <br />
        <br />
        Thank you! You may close this browser window now.
      </p>
      <div className="mobile-footer">
        <button
          className="btn-primary mobile-btn"
          onClick={() => jump(2)}
        >
          Start Demo Again
        </button>
      </div>
    </>
  )
}

StepFour.propTypes = {
  jump: PropTypes.func
}
