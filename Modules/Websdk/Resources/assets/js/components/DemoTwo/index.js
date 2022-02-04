import React from 'react'
import PropTypes from 'prop-types'
import { Steps, Step } from 'react-step-builder'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
// GoCode steps
import StepFour from './StepFour'
// import StepFive from './StepFive'
// import StepSix from './StepSix'
import StepSeven from './StepSeven'

export default function DemoTwo({ modalToggle, setModalToggle }) {
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
      <Step
        component={StepFour}
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
      />
      <Step
        component={StepSeven}
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
      />
    </Steps>
  )
}

DemoTwo.propTypes = {
  modalToggle: PropTypes.bool,
  setModalToggle: PropTypes.func
}
