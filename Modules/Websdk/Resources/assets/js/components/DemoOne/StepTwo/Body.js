import React from 'react'
import { food } from '../../../data/food'
import ImageToggle from './ImageToggle'
// import globalStyles from '../../../globalStyles.module.scss'
// import styles from './StepTwo.module.scss'

export default function Body() {
  return (
    <>
      <h2 className="h2">
        Click a product below to reveal its barcode, then use your phone to scan
        it into your shopping cart.
      </h2>
      <p className="p">
        Scan as many as you like, you can even scan physical items you have
        around you.
        <br />
        Your smartphone should have our shopping demo open now, if not please go
        back and start over.
        <br />
        <br />
        Code&rsquo;s industry leading CortexDecoder WebSDK is running inside
        your phones web browser to enable this
      </p>
      <div className="demo-one-image-grid">
        {food.map((item, i) => (
          <div key={i}>
            <ImageToggle food={item} />
          </div>
        ))}
      </div>
    </>
  )
}
