import React from 'react'
import PropTypes from 'prop-types'
// import globalStyles from '../../../globalStyles.module.scss'
// import styles from './StepThree.module.scss'

export default function StepThree({ jump }) {
  return (
    <>
      <div className="card demo-two-mobile-last-card">
        John Doe
        <br />
        1/1/1990
        <br />
        111-11-1111
        <br />
        123 Main Street
        <br />
        Anywhere, USA 123456
        <br />
        <br />
        Medications:
        <br />
        <span className="color-black">Atorvastatin</span>
        <br />
        <span className="color-black">Albuterol</span>
        <br />
      </div>
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
        <button className="btn-primary mobile-btn" onClick={() => jump(1)}>
          Start Demo Again
        </button>
      </div>
    </>
  )
}

StepThree.propTypes = {
  jump: PropTypes.func
}
