import React from 'react'
import PropTypes from 'prop-types'
// import globalStyles from '../../../globalStyles.module.scss'
// import styles from './StepTwo.module.scss'

export default function Body({ data, toggleHandler }) {
  const combinedBarcodesPath = require('../../../images/food-barcodes/7-8-4-6.png')

  return (
    <>
      <h2 className="h2">Click a Barcode to Scan</h2>
      <p className="p">
        Click on the barcode to "scan" the randomly generated barcodes
        information using Code’s JavaScript WebSDK decoder.
      </p>
      <img
        src={combinedBarcodesPath.default}
        alt=""
        id="combined-barcodes"
        style={{ display: 'none' }}
      />
      <div className="grid-2 barcodes">
        {data.map((item) => {
          const barcodePath = require(`../../../images/food-barcodes/${item.image}`)

          return (
            <div
              className={`card barcode ${item.toggle ? 'toggled' : ''}`}
              onClick={() => toggleHandler(item.id, item.image)}
              key={item.id}
            >
              <img
                className="barcode-img"
                src={barcodePath}
                alt=""
                id={`barcode-image-id-${item.id}`}
              />
              <div className="barcode-info">
                {item.decodingResults && (
                  <>
                    <h3 className="h5 color-black my-0">
                      Barcode Data:{' '}
                      {item.decodingResults.results[0].barcodeData}
                    </h3>
                    <p className="color-black my-0">
                      Symbology Name:{' '}
                      {item.decodingResults.results[0].symbologyName}
                    </p>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

Body.propTypes = {
  data: PropTypes.array,
  toggleAllHandler: PropTypes.func,
}
