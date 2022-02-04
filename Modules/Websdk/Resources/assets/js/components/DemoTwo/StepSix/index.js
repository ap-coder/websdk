import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import Body from './Body'
import Footer from './Footer'

export default function StepSix({ modalToggle, setModalToggle, next, jump }) {
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

StepSix.propTypes = {
  modalToggle: PropTypes.bool,
  setModalToggle: PropTypes.func,
  next: PropTypes.func,
  jump: PropTypes.func
}
