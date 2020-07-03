import React from 'react'
import {Howl} from 'howler'
import {Button} from 'react-bootstrap'

export default function BeetMaker2() {
  let chord = new Howl({
    src: [
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fchord1.mp3?alt=media&token=57981212-6cec-4d07-989e-a0d53b8aa39b'
    ]
  })

  // const handleKeyPress = event => {
  //   chord.play()
  // }
  let count = 0
  document.addEventListener('keydown', e => {
    if (e.key === 'r' && count < 1) {
      const r = document.getElementById('chord')
      r.setAttribute('class', 'poop btn active-button')
      chord.play()
      count++
    }
    document.addEventListener('keyup', e => {
      if (e.key === 'r') {
        const r = document.getElementById('chord')
        r.setAttribute('class', 'poop btn btn-primary')
        count = 0
      }
    })
  })

  document.addEventListener('keyup', e => {
    if (e.key === 'r') {
      const r = document.getElementById('chord')
      r.setAttribute('class', 'poop btn btn-primary')
    }
  })

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
        <Button id="chord" className="poop">
          press r
        </Button>
      </div>
    </div>
  )
}
