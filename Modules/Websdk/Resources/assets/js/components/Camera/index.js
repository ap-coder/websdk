import React, { useContext, useState, useRef, useEffect } from 'react'
import * as CortexDecoder from 'cortexdecoder_web'
import { BarcodeContext } from '../../Context'
// import styles from './Camera.module.scss'

const license =
  'pMIFNx4hli3QxShSfhs19sQ5+liNx/jhXYVCogRC4LalzKY42+hq1zAtvcPntFCZC6tb5FBqlsDzKY5m8zacO5aKGa+Tc7sQjiRQhe/qcpHCZD89Zdzj6yqUkEIRIfvLrwmWK8YSvNWW/sy3CD5cN8lNOGQ3R2rAyeqQPod30LjEE3VLCEDfZaECeo+VPvbkoLrGuP1Im5xUvH9jT8qbdNAWEyK2teNi46lDLfiLRttuQGYuA4iPHRvEkbV28rELys/kwwujWS031sytMAd2Z3pe1QiRg2574yxXvM0Z2ttfuPPeiFWLVCbBliHl0peIrDqDF7G6Ez0jD/51GSFYuK92zFXIEEUeOv31OWS2gZCqLsD9G1YYbboTi5a69G/tH5J46+Fr/Kl3mWUays54aQ=='

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
