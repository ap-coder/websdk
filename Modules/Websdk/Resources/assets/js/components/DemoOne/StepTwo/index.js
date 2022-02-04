import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import Body from './Body'
import Footer from './Footer'

export default function StepTwo({ next, jump, setModalToggle, modalToggle }) {
  return (
    <Modal
      jump={jump}
      setModalToggle={setModalToggle}
      modalToggle={modalToggle}
      body={<Body />}
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
