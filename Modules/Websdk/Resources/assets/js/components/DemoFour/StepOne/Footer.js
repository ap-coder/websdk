import React from 'react'
import PropTypes from 'prop-types'
// import globalStyles from '../../../globalStyles.module.scss'

export default function Footer({ next }) {
  return (
    <button className="btn-primary" onClick={next}>
      Start Scanning
    </button>
  )
}

Footer.propTypes = {
  next: PropTypes.func
}
