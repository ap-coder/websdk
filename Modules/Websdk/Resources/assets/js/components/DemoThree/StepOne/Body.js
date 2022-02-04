import React from 'react'
// import globalStyles from '../../../globalStyles.module.scss'

export default function Body() {
  return (
    <>
      <h2 className="h1">Welcome to Code WebSDK Scan to Search!</h2>
      <p className="p">
        Hold anything with a barcode up to your camera and CortexDecoder WebSDK
        will scan it and send the results into a google search.
      </p>
      <p className="p">
        Your browser might block the tab we are opening to popular the google
        search, if this happens please follow the instructions in your browser
        to allow the tab to open
      </p>
    </>
  )
}
