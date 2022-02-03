import React from 'react'
import PropTypes from 'prop-types'
// import globalStyles from '../../../globalStyles.module.scss'

export default function Footer({ jump }) {
  return (
    <button className="btn-primary" onClick={() => jump(3)}>
      Skip
    </button>
  )
}

Footer.propTypes = {
  jump: PropTypes.func
}
