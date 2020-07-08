import React from 'react'
//import {Howl} from 'howler'
import * as Tone from 'tone'
import {Button} from 'react-bootstrap'
import LoopStation from './Looper'

export default function BeetMaker2() {
  // let kick = new Howl({
  //   src: [
  //     'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fkick.mp3?alt=media&token=fc8bddf1-7ee7-4337-9a72-89459291bc89'
  //   ]
  // })
  // let snare = new Howl({
  //   src: [
  //     'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fsnare.mp3?alt=media&token=09b8ea4e-8b37-4c98-beb9-a2460cdf509c'
  //   ]
  // })
  // let hat = new Howl({
  //   src: [
  //     'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2FclosedHat.mp3?alt=media&token=dfdd2ffc-317b-465a-9499-55e4ac07a6b2'
  //   ]
  // })
  // let chord1 = new Howl({
  //   src: [
  //     'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fchord1.mp3?alt=media&token=57981212-6cec-4d07-989e-a0d53b8aa39b'
  //   ]
  // })
  // let chord2 = new Howl({
  //   src: [
  //     'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fchord2.mp3?alt=media&token=e2dfac36-7c86-4d8f-916b-d1f49f1068c1'
  //   ]
  // })
  // let chord3 = new Howl({
  //   src: [
  //     'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fchord3.mp3?alt=media&token=6bbb174c-b951-4eed-ae84-de4dd65535da'
  //   ]
  // })

  Tone.context.latencyHint = 'fastest'

  const kick = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fkick.mp3?alt=media&token=fc8bddf1-7ee7-4337-9a72-89459291bc89'
  }).toMaster()
  const snare = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fsnare.mp3?alt=media&token=09b8ea4e-8b37-4c98-beb9-a2460cdf509c'
  }).toMaster()
  const hat = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2FclosedHat.mp3?alt=media&token=dfdd2ffc-317b-465a-9499-55e4ac07a6b2'
  }).toMaster()
  const chord1 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fchord1.mp3?alt=media&token=57981212-6cec-4d07-989e-a0d53b8aa39b'
  }).toMaster()
  const chord2 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fchord2.mp3?alt=media&token=e2dfac36-7c86-4d8f-916b-d1f49f1068c1'
  }).toMaster()
  const chord3 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fchord3.mp3?alt=media&token=6bbb174c-b951-4eed-ae84-de4dd65535da'
  }).toMaster()

  const chord4 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/keys%2FdarkRoll.mp3?alt=media&token=20112326-6e5c-48c2-8dd5-ae4fd7ada4a7'
  }).toMaster()

  const chord5 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/keys%2FhappyRoll.mp3?alt=media&token=757b53a4-30e7-4ad7-991e-42d83c6cc0b8'
  }).toMaster()

  const cmaj7 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/keys%2Fcmaj7.mp3?alt=media&token=a5c2533d-de33-4cc0-b986-25a13caea4d8'
  }).toMaster()
  const dmin7 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/keys%2Fdmin7.mp3?alt=media&token=9f5e426c-5728-4b53-8de6-d455033055a4'
  }).toMaster()
  const emin7 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/keys%2Femin7.mp3?alt=media&token=4fa1c63d-2505-430e-8f9f-e4fca5393dd4'
  }).toMaster()
  const fmaj7 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/keys%2Ffmaj7.mp3?alt=media&token=27eaee4f-b96a-4819-8c49-b7d31cff2f04'
  }).toMaster()
  const g7 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/keys%2Fg7.mp3?alt=media&token=f39ab8b3-1628-4090-b136-6ce3f1f32313'
  }).toMaster()
  const amin7 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/keys%2Famin7.mp3?alt=media&token=98a0078e-5b4d-49f3-810e-aae19b4f6063'
  }).toMaster()
  const bmin7b5 = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/keys%2Fbdim7.mp3?alt=media&token=afc754a8-b1c7-4ca5-a911-1e641ca81d19'
  }).toMaster()
  const cmaj7Oct = new Tone.Sampler({
    C3:
      'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/keys%2Fcmaj7Oct.mp3?alt=media&token=cbf85501-0217-434e-8497-f97625364e9a'
  }).toMaster()

  let keySounds = {
    q: kick,
    w: snare,
    e: hat,
    r: chord1,
    t: chord2,
    y: chord3,
    u: chord4,
    i: chord5,
    f: cmaj7,
    g: dmin7,
    h: emin7,
    j: fmaj7,
    k: g7,
    l: amin7,
    ';': bmin7b5,
    "'": cmaj7Oct
  }

  const handleKeyDown = identifier => {
    if (keySounds[identifier]) {
      const button = document.getElementById(identifier)
      button.setAttribute('class', 'butts btn active-button')
      keySounds[identifier].triggerAttackRelease('C3', '1n')
      // keySounds[identifier].start()
    }
  }

  const handleKeyUp = identifier => {
    if (keySounds[identifier]) {
      const button = document.getElementById(identifier)
      button.setAttribute('class', 'butts btn btn-primary')
    }
  }

  document.addEventListener('keydown', e => {
    if (keySounds[e.key] && !e.repeat) handleKeyDown(e.key)
  })
  document.addEventListener('keyup', e => {
    if (keySounds[e.key]) handleKeyUp(e.key)
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
          flexDirection: 'row',
          borderRadius: '2px'
        }}
      >
        {Object.keys(keySounds).map(key => {
          return (
            <Button
              id={key}
              key={key}
              className="butts"
              onMouseDown={e => handleKeyDown(e.target.id)}
              onMouseUp={e => handleKeyUp(e.target.id)}
            >
              press {key}
            </Button>
          )
        })}
      </div>
      <LoopStation />
    </div>
  )
}
