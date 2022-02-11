import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { ReactComponent as IconFiles } from './images/icon-files.svg'
import DemoOne from '../DemoOne'
import DemoTwo from '../DemoTwo'
import DemoThree from '../DemoThree'
import DemoFour from '../DemoFour'
// import globalStyles from '../../globalStyles.module.scss'
// import styles from './DemoCard.module.scss'

export default function DemoCard({ id, heading, requirements, description }) {
  const [modalToggle, setModalToggle] = useState(false)

  const imagePath = require(`../../images/icon-files.svg`)

  let demo

  switch (id) {
    case 'demo-1':
      demo = (
        <DemoOne modalToggle={modalToggle} setModalToggle={setModalToggle} />
      )
      break
    case 'demo-2':
      demo = (
        <DemoTwo modalToggle={modalToggle} setModalToggle={setModalToggle} />
      )
      break
    case 'demo-3':
      demo = (
        <DemoThree modalToggle={modalToggle} setModalToggle={setModalToggle} />
      )
      break
    case 'demo-4':
      demo = (
        <DemoFour modalToggle={modalToggle} setModalToggle={setModalToggle} />
      )
      break
    default:
      demo = null
  }

  return (
    <>
      <div
        className="card demo-card"
        onClick={() => setModalToggle(!modalToggle)}
      >
        <h3
          className="demo-card-heading my-0"
        >
          {heading}
        </h3>
        <p className="demo-card-requirements p p-sm">
          Required devices:{' '}
          <span className="color-primary">
            {requirements}
          </span>
        </p>
        <p className="demo-card-description p my-0">{description}</p>
        {/* <IconFiles className={styles['demo-card-icon']} /> */}
        <img src={imagePath} className="demo-card-icon" />
      </div>

      {demo}
    </>
  )
}

DemoCard.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string,
  requirements: PropTypes.string,
  description: PropTypes.string
}
