import React, { useContext, useEffect } from 'react'
import { BarcodeContext } from '../../Context'
import PropTypes from 'prop-types'
import { Steps, Step } from 'react-step-builder'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

export default function DemoThree({ modalToggle, setModalToggle }) {
  const {
    capturedBarcode: [, setCapturedBarcode]
  } = useContext(BarcodeContext)

  useEffect(() => {
    setCapturedBarcode(null)
    // eslint-disable-next-line
  }, [])

  return (
    <Steps>
      <Step
        component={StepOne}
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
      />
      <Step
        component={StepTwo}
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
      />
      <Step
        component={StepThree}
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
      />
    </Steps>
  )
}

DemoThree.propTypes = {
  modalToggle: PropTypes.bool,
  setModalToggle: PropTypes.func
}
