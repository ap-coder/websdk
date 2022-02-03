import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { parse } from 'parse-usdl'
import { BarcodeContext } from '../../../Context'
import Modal from '../../Modal'
import Body from './Body'
import Footer from './Footer'

export default function StepThree({ modalToggle, setModalToggle, next, jump }) {
  const {
    capturedBarcode: [capturedBarcode]
  } = useContext(BarcodeContext)

  let dataParsed

  if (capturedBarcode?.results[0]?.barcodeData) {
    dataParsed = parse(capturedBarcode.results[0].barcodeData)
  }

  return (
    <Modal
      jump={jump}
      setModalToggle={setModalToggle}
      modalToggle={modalToggle}
      body={<Body dataParsed={dataParsed} />}
      footer={<Footer next={next} />}
    />
  )
}

StepThree.propTypes = {
  modalToggle: PropTypes.bool,
  setModalToggle: PropTypes.func,
  next: PropTypes.func,
  jump: PropTypes.func
}
