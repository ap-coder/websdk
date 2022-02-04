import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import Body from './Body'
import Footer from './Footer'

export default function StepSeven({ modalToggle, setModalToggle, jump }) {
  return (
    <Modal
      jump={jump}
      setModalToggle={setModalToggle}
      modalToggle={modalToggle}
      body={<Body />}
      footer={<Footer />}
    />
  )
}

StepSeven.propTypes = {
  modalToggle: PropTypes.bool,
  setModalToggle: PropTypes.func,
  jump: PropTypes.func
}
