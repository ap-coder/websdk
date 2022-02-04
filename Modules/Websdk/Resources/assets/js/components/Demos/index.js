import React from 'react'
import DemoCard from '../DemoCard'
// import styles from './Demos.module.scss'
// import globalStyles from '../../globalStyles.module.scss'

const data = require('./db.json')

export default function Demos() {
  return (
    <>
      {data.demos.map((demo) => (
        <React.Fragment key={demo.id}>
          <h2 className="h4">{demo.type}</h2>
          <div className="demos">
            {demo.examples.map((example) => (
              <DemoCard
                key={example.id}
                id={example.id}
                heading={example.heading}
                requirements={example.requirements}
                description={example.description}
              />
            ))}
          </div>
        </React.Fragment>
      ))}
    </>
  )
}
