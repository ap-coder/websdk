import React from 'react'
import PropTypes from 'prop-types'
// import globalStyles from '../../../globalStyles.module.scss'
export default function Footer({ next, toggleAllHandler }) {
  return (
    <>
    <button className="btn-primary" onClick={() => toggleAllHandler()}>
      Scan all
    </button>
    <button className="btn-secondary" onClick={next}>
      End demo
    </button>
  </>
  )
}

Footer.propTypes = {
  next: PropTypes.func,
  toggleAllHandler: PropTypes.func,
}
