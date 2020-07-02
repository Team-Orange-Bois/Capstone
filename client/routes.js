import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Switch} from 'react-router-dom'
import {Howl, Howler} from 'howler'
import Keyboard from 'react-simple-keyboard'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    let kick = new Howl({
      src: [
        'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fkick.mp3?alt=media&token=fc8bddf1-7ee7-4337-9a72-89459291bc89'
      ]
    })
    let snare = new Howl({
      src: [
        'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fsnare.mp3?alt=media&token=09b8ea4e-8b37-4c98-beb9-a2460cdf509c'
      ]
    })
    let hat = new Howl({
      src: [
        'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2FclosedHat.mp3?alt=media&token=dfdd2ffc-317b-465a-9499-55e4ac07a6b2'
      ]
    })
    let chord1 = new Howl({
      src: [
        'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fchord1.mp3?alt=media&token=57981212-6cec-4d07-989e-a0d53b8aa39b'
      ]
    })
    let chord2 = new Howl({
      src: [
        'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fchord2.mp3?alt=media&token=e2dfac36-7c86-4d8f-916b-d1f49f1068c1'
      ]
    })
    let chord3 = new Howl({
      src: [
        'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fchord3.mp3?alt=media&token=6bbb174c-b951-4eed-ae84-de4dd65535da'
      ]
    })

    const handleKeyPress = event => {
      if (event.key === 'q') {
        kick.play()
      }
      if (event.key === 'w') {
        snare.play()
      }
      if (event.key === 'e') {
        hat.play()
      }
      if (event.key === 'r') {
        chord1.play()
      }
      if (event.key === 't') {
        chord2.play()
      }
      if (event.key === 'y') {
        chord3.play()
      }
    }

    const handleKeyboardPress = button => {
      if (button === 'q') {
        kick.play()
      }
      if (button === 'w') {
        snare.play()
      }
      if (button === 'e') {
        hat.play()
      }
      if (button === 'r') {
        chord1.play()
      }
      if (button === 't') {
        chord2.play()
      }
      if (button === 'y') {
        chord3.play()
      }
    }

    // const handleClickSong = () => {
    //   kick.off()
    //   snare.off()
    //   hat.off()
    //   kick.play()
    //   kick.on('end', function() {
    //     hat.play()
    //   })
    //   hat.on('end', function() {
    //     snare.play()
    //   })
    //   snare.on('end', function() {
    //     hat.play()
    //     hat.off()
    //   })
    // }

    return (
      <div
        id="outercontainer"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#490769',
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          overflow: 'auto'
        }}
      >
        <h1 style={{color: '#FE1BCB'}}>Siq Beets</h1>
        <form
          style={{
            backgroundColor: '#490769',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: '2px'
          }}
        >
          <input
            style={{
              backgroundColor: '#35054C',
              color: '#24C0F9'
            }}
            type="text"
            placeholder="Click here to use keyboard"
            value=""
            onKeyPress={e => handleKeyPress(e)}
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Keyboard
              display={{
                q: 'kick',
                w: 'snare',
                e: 'hat',
                r: 'chord1',
                t: 'chord2',
                y: 'chord3'
              }}
              style={{
                backgroundColor: '#35054C',
                color: '#24C0F9'
              }}
              layoutName="default"
              onKeyPress={button => handleKeyboardPress(button)}
            />
          </div>
        </form>
        {/* <div>
          <button type="button" onClick={() => handleClickSong()}>
            Play Song
          </button>
        </div> */}
      </div>
    )
  }
}

export default withRouter(connect()(Routes))
