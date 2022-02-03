import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../Modal'
import Body from './Body'
import Footer from './Footer'

export default function StepThree({ jump, setModalToggle, modalToggle }) {
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

StepThree.propTypes = {
  modalToggle: PropTypes.bool,
  setModalToggle: PropTypes.func,
  jump: PropTypes.func
}
