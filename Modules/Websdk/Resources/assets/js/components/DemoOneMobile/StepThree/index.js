import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BarcodeContext } from '../../../Context'
import { food } from '../../../data/food'
// import globalStyles from '../../../globalStyles.module.scss'

export default function StepThree({ prev, next, cart, setCart }) {
  const {
    capturedBarcode: [capturedBarcode, setCapturedBarcode]
  } = useContext(BarcodeContext)
  let cartTotal = 0

  useEffect(() => {
    setCart([...cart, capturedBarcode])
    // eslint-disable-next-line
  }, [])

  cart.forEach((cartItem) =>
    food.forEach((foodItem) => {
      if (cartItem?.results[0].barcodeData === foodItem.barcodeNumber) {
        cartTotal = cartTotal + foodItem.price
      }
    })
  )

  const handleContinueShopping = (stepAction) => {
    setCapturedBarcode(null)
    stepAction()
  }

  return (
    <>
      <h2 className="h1 mobile-heading">
        Cart
      </h2>
      <div className="mobile-table">
        <table className="table">
          <thead>
            <tr>
              <td>
                <span className="sr-only">Food</span>
              </td>
              <td>
                <span className="sr-only">Price</span>
              </td>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) =>
              food.map((foodItem) => {
                if (
                  cartItem?.results[0].barcodeData === foodItem.barcodeNumber
                ) {
                  return (
                    <tr key={foodItem.barcodeNumber}>
                      <td>{foodItem.name}</td>
                      <td>{foodItem.price}</td>
                    </tr>
                  )
                }

                return null
              })
            )}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{cartTotal}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="mobile-footer">
        <button
          className="btn-primary mobile-btn"
          onClick={() => handleContinueShopping(prev)}
        >
          Continue Shopping
        </button>
        <button
          className="btn-secondary mobile-btn"
          onClick={() => next()}
        >
          Check Out
        </button>
      </div>
    </>
  )
}

StepThree.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
  cart: PropTypes.array,
  setCart: PropTypes.func
}
