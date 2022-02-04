import React, { createContext, useState } from 'react'

export const BarcodeContext = createContext(null)

export default function Context({ children }) {
  const [capturedBarcode, setCapturedBarcode] = useState(null)
  const store = {
    capturedBarcode: [capturedBarcode, setCapturedBarcode]
  }

  return (
    <BarcodeContext.Provider value={store}>{children}</BarcodeContext.Provider>
  )
}
