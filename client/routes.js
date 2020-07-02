import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch} from 'react-router-dom'
import {Howl, Howler} from 'howler'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    const sound = new Howl({
      src: [
        'https://storage.cloud.google.com/siqbeats-sounds/jump.wav?authuser=0&supportedpurview=project',
      ],
    })
    return (
      <div>
        <Switch>
          <div> Beets</div>
        </Switch>
        <button type="button" onClick={() => sound.play()}>
          Play!
        </button>
      </div>
    )
  }
}

export default withRouter(connect()(Routes))
