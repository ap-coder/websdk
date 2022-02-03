import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './MyApp.scss'

import Demos from './components/Demos'
import DemoOneMobile from './components/DemoOneMobile'
import DemoTwoMobile from './components/DemoTwoMobile'

function MyApp() {
  return (
    <Switch>
      <Route path="/websdk" component={Demos} exact />
      <Route path="/demo-one-mobile" component={DemoOneMobile} />
      <Route path="/demo-two-mobile" component={DemoTwoMobile} />
    </Switch>
  )
}

export default MyApp
