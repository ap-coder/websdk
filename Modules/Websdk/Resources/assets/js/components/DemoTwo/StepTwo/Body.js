import React from 'react'
import PropTypes from 'prop-types'
import Camera from '../../Camera'
// import globalStyles from '../../../globalStyles.module.scss'
// import styles from './StepTwo.module.scss'

export default function Body({ showCamera }) {
  return (
    <>
      <h2 className="demo-two-step-two-heading">Drivers License</h2>
      {!showCamera && (
        <p className="my-0 scanning">
          Scanning…
        </p>
      )}
      <div className="demo-two-step-two-camera">
        <Camera dl={1} />
      </div>
      <p className="p">
        *None of your information is being collected or saved outside of this
        personalized demo.
        <br />
        <br />
        If you do not wish to scan your Drivers License, click the SKIP button
        and we’ll simulate the experience.
      </p>
    </>
  )
}

Body.propTypes = {
  showCamera: PropTypes.bool
}
