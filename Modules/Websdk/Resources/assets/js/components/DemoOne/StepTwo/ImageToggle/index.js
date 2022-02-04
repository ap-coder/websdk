import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import styles from './ImageToggle.module.scss'

export default function ImageToggle({ food }) {
  const [toggle, setToggle] = useState(false)
  const imagePath = require(`../../../../images/food/${food.image}`)
  const barcodePath = require(`../../../../images/food-barcodes/${food.barcode}`)

  return (
    <div
      className={`image-toggle ${toggle ? 'active' : ''}`}
      onClick={() => setToggle(!toggle)}
    >
      <img className="image-toggle-img" src={imagePath} alt={food.name} />

      <div className="image-toggle-info">
        <div className="image-toggle-info-header">
          <div>{food.name}</div>
          <div>${food.price}</div>
        </div>
        <img src={barcodePath} alt='' />
      </div>
    </div>
  )
}

ImageToggle.defaultProps = {
  name: 'Name',
  price: '$0.00',
}

ImageToggle.propTypes = {
  food: PropTypes.object
}
