import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BarcodeContext } from '../../../Context'
// import globalStyles from '../../../globalStyles.module.scss'
import Camera from '../../Camera'

export default function StepTwo({ prev, next }) {
  const {
    capturedBarcode: [capturedBarcode]
  } = useContext(BarcodeContext)

  useEffect(() => {
    if (capturedBarcode && capturedBarcode.results.length > 0) {
      const checkForKey =
        capturedBarcode.results[0] &&
        'barcodeData' in capturedBarcode.results[0]
      if (checkForKey) {
        next()
      }
    }
    // eslint-disable-next-line
  }, [capturedBarcode])

  return (
    <div className="mobile-scanning-layout">
      <div className="mobile-scanning-screen">
        <p className="alert" role="alert">
          Scan an item to add it to your shopping cart.
        </p>
        <Camera></Camera>
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
