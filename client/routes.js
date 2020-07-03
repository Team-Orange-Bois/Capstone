import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'

import BeetMaker from './components/BeetMaker'
import BeetMaker2 from './components/BeetMaker2'
import GuestHome from './components/GuestHome'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={GuestHome} />
        <Route exact path="/beetmaker" component={BeetMaker} />
        <Route exact path="/beetmaker2" component={BeetMaker2} />
      </Switch>
    )
  }
}

export default withRouter(connect()(Routes))
