import React from 'react'
import PropTypes from 'prop-types'
import { Steps, Step } from 'react-step-builder'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

export default function DemoFour({ modalToggle, setModalToggle }) {
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

DemoFour.propTypes = {
  modalToggle: PropTypes.bool,
  setModalToggle: PropTypes.func
}
