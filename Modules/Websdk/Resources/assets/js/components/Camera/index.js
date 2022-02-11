import React, { useContext, useState, useRef, useEffect } from 'react'
import * as CortexDecoder from 'cortexdecoder_web'
import { BarcodeContext } from '../../Context'
// import styles from './Camera.module.scss'


let license

  if (process.env.MIX_REACT_APP_WEB_SDK_LICENSE) {
    license = process.env.MIX_REACT_APP_WEB_SDK_LICENSE
  } else {
    license =
    'Whr//4Tw5vzO74KHsrAteWwm3Aj1ZAzR21WGeo2enAJKM1Ohfl9g/oakdckrprM3UCJP55U+cey+87FTj3dVxla/+cC3O4TDRFK1Png5QCqrdpucpwefjP+m7MlPxDIt9gAhaw2E0Xko9gVjJq7ook9iN3hhLVjhXXqnkS6wEK3J/Cw0T1LVweiv4YAgI5MtYI6nQ9ArU3XGjOtdMrQzI30QYSiThv0AHYtjNbt4ZXQSoTNZLdKT4sgmV1ea00SaVubHmKLPanhdtBIn+TNBtBfRRTt26N0A6eO2Ao4jRO8PaWw/ecWtx96IftQyuF3SnCwK4pca4lZotn2oogmLUtSfM31KG9Kjnui5EWyJLDCFAXVg/uEU3uUG2BXv0B6HwDsPmOGdisPvlL31hO8fsA=='
  }

CortexDecoder.CDDecoder.init().then(() => {
  console.log('Cortex Decoder library initialized')
  CortexDecoder.CDLicense.activateLicense(license)
    .then((res) => console.log(res))
    .catch((e) => console.log('Why:', e))
})

export default function Camera({ dl = 0 }) {
  const [errorFetchedChecker, setErrorFetchedChecker] = useState(false)
  const [connectedCameras, setConnectedCameras] = useState({})
  const [cameraOptionValue, setCameraOptionValue] = useState('')
  const { capturedBarcode } = useContext(BarcodeContext)

  const videoRef = useRef(null)
  const selectVideosRef = useRef(null)

  useEffect(() => {
    let mounted = true

    CortexDecoder.CDCamera.init(videoRef.current)
      .then(() => {
        if (mounted) {
          setConnectedCameras({
            connectedCameras: CortexDecoder.CDCamera.getConnectedCameras(),
            supportedResolutions: CortexDecoder.CDResolution
          })

          CortexDecoder.CDSymbology.QR.enable = true

          const dataParsingConfig =
            '00008788979099018588320328448320308138108688979169018329119028328669059149169048588320331091845584578138108729019059039049168588320341129029169059108138108719019109009019148588320700'
          CortexDecoder.CDDecoder.setdataParsing(dl, dataParsingConfig)

          if (dl) {
            CortexDecoder.CDSymbology.Code128.enable = 0
          }

          setCameraOptionValue(selectVideosRef.current.value)
          getCameraPreview()
        }
      })
      .catch((e) => {
        errorFetchedChecker && console.error(e)
        setErrorFetchedChecker(() => true)
      })

    return () => {
      mounted = false
      CortexDecoder.CDCamera.stopPreview()
    }
    // eslint-disable-next-line
  }, [errorFetchedChecker])

  const setCameraDevice = () => {
    CortexDecoder.CDCamera.setCamera(cameraOptionValue)
  }

  const getCameraPreview = () => {
    CortexDecoder.CDCamera.setCamera(cameraOptionValue)
    CortexDecoder.CDCamera.getPreview(getResult)
  }

  const getResult = (result) => {
    capturedBarcode[1](result)
  }

  let cameras =
    connectedCameras.connectedCameras &&
    connectedCameras.connectedCameras.length > 0 &&
    connectedCameras.connectedCameras.map((item, i) => {
      return (
        <option key={i} value={item.id}>
          {item.label}
        </option>
      )
    })

  return (
    <>
      <select
        name="cameradevices"
        id="cameradevices"
        onChange={setCameraDevice}
        ref={selectVideosRef}
        style={{ display: 'none' }}
      >
        {cameras}
      </select>
      <video
        className="camera"
        id="video"
        ref={videoRef}
        width="640"
        height="480"
        playsInline
      ></video>
    </>
  )
}
