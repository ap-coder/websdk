import React from 'react'
import symbology from './images/fpo-symbology.png'
// import globalStyles from '../../../globalStyles.module.scss'

export default function Body() {
  return (
    <>
    <h2 className="color-black my-0">Scan Your GoCode using your phone</h2>
    <p className="my-0">
      Imagine taking this GoCode to a pharmacy or your doctor who has a scanner
      authorized to read your GoCode and providing this information to them in a
      secure way.
    </p>
    <div className="demo-two-step-six-qr">
      <img src={symbology} alt="" />
    </div>
  </>
  )
}
