import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as CortexDecoder from 'cortexdecoder_web'
import Modal from '../../Modal'
import { items } from './data'
import Body from './Body'
import Footer from './Footer'
;(async function () {
  const license =
    'pMIFNx4hli3QxShSfhs19sQ5+liNx/jhXYVCogRC4LalzKY42+hq1zAtvcPntFCZC6tb5FBqlsDzKY5m8zacO5aKGa+Tc7sQjiRQhe/qcpHCZD89Zdzj6yqUkEIRIfvLrwmWK8YSvNWW/sy3CD5cN8lNOGQ3R2rAyeqQPod30LjEE3VLCEDfZaECeo+VPvbkoLrGuP1Im5xUvH9jT8qbdNAWEyK2teNi46lDLfiLRttuQGYuA4iPHRvEkbV28rELys/kwwujWS031sytMAd2Z3pe1QiRg2574yxXvM0Z2ttfuPPeiFWLVCbBliHl0peIrDqDF7G6Ez0jD/51GSFYuK92zFXIEEUeOv31OWS2gZCqLsD9G1YYbboTi5a69G/tH5J46+Fr/Kl3mWUays54aQ=='

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
