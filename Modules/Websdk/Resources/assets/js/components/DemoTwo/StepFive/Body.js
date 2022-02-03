import React from 'react'
import { Link } from 'react-router-dom'
import qrCode from './images/fpo-qr-code.png'
// import globalStyles from '../../../globalStyles.module.scss'
// import styles from './StepFive.module.scss'

export default function Body() {
  return (
    <>
      <h2 className="color-black my-0">
        Scan to open CortexDecoder WebSDK on your phone which has the ability to
        scan your GoCode
      </h2>
      <p className="my-0">
        Using your smartphone, scan the QR code below to open CortexDecoder
        WebSDK within the browser on your phone. This will allow your phone to
        read the GoCode which contains your private data.
      </p>
      <div className="demo-two-step-five-qr">
        <Link to="/demo-two-mobile">
          <img src={qrCode} alt="" />
        </Link>
      </div>
    </>
  )
}
