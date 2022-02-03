import React from 'react'
import PropTypes from 'prop-types'
import Camera from '../../Camera'
// import globalStyles from '../../../globalStyles.module.scss'
// import styles from './StepTwo.module.scss'

export default function Body({ showCamera }) {
  return (
    <>
      {!showCamera && <p className="my-0 scanning">Opening a new tab</p>}
      <div className="demo-three-step-two-camera">
        <Camera />
      </div>
      <p className="mt-0">
        If you don’t have a camera or would prefer to not scan a barcode, click
        the button below.
      </p>
    </>
  )
}

Body.propTypes = {
  showCamera: PropTypes.bool
}
