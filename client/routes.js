import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'

import BeetMaker from './components/BeetMaker'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/beetmaker" component={BeetMaker} />
      </Switch>
    )
  }
}

export default withRouter(connect()(Routes))
