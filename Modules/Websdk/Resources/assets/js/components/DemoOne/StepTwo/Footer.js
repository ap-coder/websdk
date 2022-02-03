import React from 'react'
import PropTypes from 'prop-types'
// import globalStyles from '../../../globalStyles.module.scss'

export default function Footer({ next }) {
  return (
    <button className="btn-secondary" onClick={next}>
      Checkout
    </button>
  )
}

Footer.propTypes = {
  next: PropTypes.func,
}
