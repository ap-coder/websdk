import React from 'react'
import symbology from './images/fpo-symbology.png'
// import globalStyles from '../../../globalStyles.module.scss'
// import styles from './StepFour.module.scss'

export default function Body() {
  return (
    <>
      <h2 className="color-black my-0">
        GoCode is a proprietary symbology which can be used to secure
        information.
      </h2>
      <p className="my-0">
        GoCode can be used to encode data in a format that is only readable by
        authorized devices. This is handy when you want to encode sensitive data
        into a code and have control over who can read the data. Below is a
        sample image of a GoCode.
      </p>
      <h3
        className="h4 color-black tac"
      >
        John Doe’s GoCode
      </h3>
      <div className="demo-two-step-four-qr">
        <img src={symbology} alt="" />
      </div>
    </>
  )
}
