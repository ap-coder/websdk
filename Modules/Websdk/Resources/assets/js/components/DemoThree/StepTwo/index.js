import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import * as CortexDecoder from 'cortexdecoder_web'
import { BarcodeContext } from '../../../Context'
import Modal from '../../Modal'
import Body from './Body'
import Footer from './Footer'

export default function StepTwo({ modalToggle, setModalToggle, next, jump }) {
  const [showCamera, setShowCamera] = useState(true)

  const {
    capturedBarcode: [capturedBarcode]
  } = useContext(BarcodeContext)

  useEffect(() => {
    if (capturedBarcode && capturedBarcode.results.length > 0) {
      const checkForKey =
        capturedBarcode.results[0] &&
        'barcodeData' in capturedBarcode.results[0]

      if (checkForKey) {
        CortexDecoder.CDCamera.stopPreview()
        setShowCamera(false)

        setTimeout(() => {
          const barcode = capturedBarcode.results[0].barcodeData;
          window.open(`https://www.google.com/search?q=${barcode}`, '_blank')
          next()
        }, 1000);
      }
    }
    // eslint-disable-next-line
  }, [capturedBarcode])

  return (
    <Modal
      jump={jump}
      setModalToggle={setModalToggle}
      modalToggle={modalToggle}
      body={<Body showCamera={showCamera}/>}
      footer={<Footer next={next} />}
    />
  )
}

StepTwo.propTypes = {
  modalToggle: PropTypes.bool,
  setModalToggle: PropTypes.func,
  next: PropTypes.func,
  jump: PropTypes.func
}
