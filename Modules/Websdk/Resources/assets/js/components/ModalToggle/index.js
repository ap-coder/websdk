import React from 'react'
// import globalStyles from '../../globalStyles.module.scss'
// import styles from './ModalToggle.module.scss'

export default function ModalToggle({jump, setModalToggle, modalToggle}) {
  return (
    <>
      <div
        className="modal-overlay-toggle"
        onClick={() => {
          jump(1)
          setModalToggle(!modalToggle)
        }}
      ></div>
      <button
        className="modal-close-btn"
        onClick={() => {
          jump(1)
          setModalToggle(!modalToggle)
        }}
      >
        <span className="sr-only">Close modal</span>
      </button>
    </>
  )
}
