import React from 'react'
import {Howl} from 'howler'
import {Button} from 'react-bootstrap'

export default function BeetMaker2() {
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

  let keySounds = {
    q: [kick, 'kick'],
    w: [snare, 'snare'],
    e: [hat, 'hat'],
    r: [chord1, 'chord1'],
    t: [chord2, 'chord2'],
    y: [chord3, 'chord3']
  }
  let count = 0
  document.addEventListener('keydown', e => {
    if (keySounds[e.key] && count < 1) {
      const key = document.getElementById(keySounds[e.key][1])
      key.setAttribute('class', 'butts btn active-button')
      keySounds[e.key][0].play()
      count++
    }
    document.addEventListener('keyup', e => {
      if (keySounds[e.key]) {
        const key = document.getElementById(keySounds[e.key][1])
        key.setAttribute('class', 'butts btn btn-primary')
        count = 0
      }
    })
  })

  // document.addEventListener('keyup', e => {
  //   if (e.key === 'r') {
  //     const r = document.getElementById('chord')
  //     r.setAttribute('class', 'poop btn btn-primary')
  //   }
  // })

  return (
    <div
      className="outercontainer"
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#490769',
        height: '100vh'
      }}
    >
      <h1 style={{color: '#FE1BCB'}}>Siq Beets</h1>
      <div
        style={{
          backgroundColor: '#490769',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          borderRadius: '2px'
        }}
      >
        <Button id="chord1" className="butts">
          press r
        </Button>
      </div>
    </div>
  )
}
