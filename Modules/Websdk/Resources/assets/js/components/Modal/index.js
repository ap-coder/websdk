import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { BarcodeContext } from '../../Context'
// import styles from './Modal.module.scss'
// import globalStyles from '../../globalStyles.module.scss'

export default function Modal({
  modalToggle,
  setModalToggle,
  jump,
  body,
  footer
}) {
  let {
    capturedBarcode: [, setCapturedBarcode]
  } = useContext(BarcodeContext)

  const handleModalClose = () => {
    jump(1)
    setModalToggle(!modalToggle)
    setCapturedBarcode(null)
  }

  return (
    
    <div
      className={`modal-overlay ${modalToggle ? 'active' : ''}`}
      onClick={handleModalClose}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={handleModalClose}
        >
          <span className="sr-only">Close modal</span>
        </button>

        <div className="modal-body">{body}</div>

        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  modalToggle: PropTypes.bool,
  setModalToggle: PropTypes.func,
  jump: PropTypes.func,
  body: PropTypes.element,
  footer: PropTypes.element
}
