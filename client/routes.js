import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch, Route} from 'react-router-dom'
import {Howl, Howler} from 'howler'
import Keyboard from 'react-simple-keyboard'
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
