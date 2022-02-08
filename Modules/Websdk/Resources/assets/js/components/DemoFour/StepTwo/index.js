import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as CortexDecoder from 'cortexdecoder_web'
import Modal from '../../Modal'
import { items } from './data'
import Body from './Body'
import Footer from './Footer'
;(async function () {
  const license = process.env.MIX_REACT_APP_WEB_SDK_LICENSE

  try {
    await CortexDecoder.CDDecoder.init()
    await CortexDecoder.CDLicense.activateLicense(license)
  } catch (e) {
    console.log(e)
  }
})()

export default function StepTwo({ modalToggle, setModalToggle, next, jump }) {
  const [list, setList] = useState(items)

  const toggleHandler = async (id) => {
    const barcodeImage = document.querySelector(`#barcode-image-id-${id}`)
    const decodingResults = await handleDecoding(barcodeImage, 1)

    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, toggle: !item.toggle, decodingResults }
      }

      return item
    })

    setList(newList)
  }

  const toggleAllHandler = async () => {
    const barcodeImage = document.querySelector(`#combined-barcodes`)
    const decodingResults = await handleDecoding(barcodeImage, 4)
    const toggleAllTrue = (status) => status.toggle

    const newList = list.map((item, i) => {
      if (list.every(toggleAllTrue)) {
        return {
          ...item,
          toggle: false,
          decodingResults: { results: [decodingResults.results[i]] }
        }
      } else {
        return {
          ...item,
          toggle: true,
          decodingResults: { results: [decodingResults.results[i]] }
        }
      }
    })

    setList(newList)
  }

  const handleDecoding = async (image, amt) => {
    try {
      await CortexDecoder.CDDecoder.setBarcodesToDecode(amt, true)
      return await CortexDecoder.CDDecoder.decode(image)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Modal
      jump={jump}
      setModalToggle={setModalToggle}
      modalToggle={modalToggle}
      body={<Body data={list} toggleHandler={toggleHandler} />}
      footer={<Footer next={next} toggleAllHandler={toggleAllHandler} />}
    />
  )
}

StepTwo.propTypes = {
  modalToggle: PropTypes.bool,
  setModalToggle: PropTypes.func,
  next: PropTypes.func,
  jump: PropTypes.func
}
