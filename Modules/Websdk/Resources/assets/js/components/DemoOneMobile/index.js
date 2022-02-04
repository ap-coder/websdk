import React, { useContext, useEffect, useState } from 'react'
import { Steps, Step } from 'react-step-builder'
import { BarcodeContext } from '../../Context'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
// import globalStyles from '../../globalStyles.module.scss'

export default function DemoOneMobile() {
  const [cart, setCart] = useState([])

  const {
    capturedBarcode: [, setCapturedBarcode]
  } = useContext(BarcodeContext)

  useEffect(() => {
    setCapturedBarcode(null)
    // eslint-disable-next-line
  }, [])

  return (
    <div className="mobile-container">
      <Steps>
        <Step component={StepOne} />
        <Step component={StepTwo} />
        <Step component={StepThree} cart={cart} setCart={setCart}/>
        <Step component={StepFour} />
      </Steps>
    </div>
  )
}
