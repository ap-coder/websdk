import React from 'react'
import { Link } from 'react-router-dom'
import fpoQr from './images/fpo-qr@2x.png'
// import globalStyles from '../../../globalStyles.module.scss'
// import styles from './StepOne.module.scss'

export default function Body() {
  return (
    <>
      <h2 className="h1 my-0">
        Welcome to Code WebSDK Retail Shopping Experience Demo!
      </h2>
      <p className="p">
        We recommend you run this portion on a PC and use your smartphone to
        scan the QR code below to open a 2nd browser on your mobile device so
        that we may simulate a shopping experience.
        <br />
        <br />
        Imagine walking into a retail store with signs asking you to scan a QR
        code to begin shopping on your phone. Scan the QR code below using your
        SmartPhone to begin the shopping demo.
        <br />
        <br />
        After you have the shopping cart open on your phone, click the Next
        button.
      </p>
      <Link to="/demo-one-mobile">
        <img className="demo-one-qr-code" src={fpoQr} alt="" />
      </Link>
    </>
  )
}
