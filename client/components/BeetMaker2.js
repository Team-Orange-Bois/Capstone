/* eslint-disable complexity */
import React, {useState, useEffect} from 'react'
import * as Tone from 'tone'
import {Button, Form} from 'react-bootstrap'
import Tracks from './Tracks'
import uuid from 'uuid/v4'

Tone.context.latencyHint = 'fastest'
const woodblock = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fwoodblock.mp3?alt=media&token=c2192730-64fe-41e6-a744-0df8d7d99ca0'
}).toMaster()

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

const guitar1 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar1.mp3?alt=media&token=b830cdd5-fe9c-4812-94d1-79932eec7394'
}).toMaster()
const guitar2 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar2.mp3?alt=media&token=21b286b6-9f11-4777-a082-d084f85dff03'
}).toMaster()
const guitar3 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar3.mp3?alt=media&token=806e6b5a-5287-488c-9806-64c337749f6b'
}).toMaster()
const guitar4 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar4.mp3?alt=media&token=7691aebb-710a-42cf-80c4-fc115e565398'
}).toMaster()
const guitar5 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar5.mp3?alt=media&token=8dfc29b9-54f3-4bf7-9a52-553f801dd082'
}).toMaster()
const guitar6 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar6.mp3?alt=media&token=835d0c0b-78b4-4385-988a-6d96045cc1d4'
}).toMaster()
const guitar7 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar7.mp3?alt=media&token=28cce534-173f-4fba-9c1d-fb78780aaba7'
}).toMaster()
const guitar8 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar8.mp3?alt=media&token=e9bb46a2-1416-409d-be53-2aa16a0e06c5'
}).toMaster()
const guitar9 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar9.mp3?alt=media&token=a8a94c2c-0140-4999-afcb-cf75b275f58b'
}).toMaster()
const guitar10 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar10.mp3?alt=media&token=084873f0-d6ca-48cc-8e47-3f9a5507ca56'
}).toMaster()
const guitar11 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar11.mp3?alt=media&token=0e41ed79-4c78-46e6-acb5-fb9489ccbdb1'
}).toMaster()
const guitar12 = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/guitar%2Fguitar12.mp3?alt=media&token=0fd1ea8a-bd7a-4161-a8ae-5000ed3da5e8'
}).toMaster()

let keySounds = {
  '1': null,
  '2': null,
  '3': null,
  '4': null,
  '5': null,
  '6': null,
  '7': null,
  '8': null,
  '9': null,
  '0': null,
  '-': null,
  '=': null,
  q: kick,
  w: snare,
  e: hat,
  r: chord1,
  t: chord2,
  y: chord3,
  u: chord4,
  i: chord5,
  o: null,
  p: null,
  '[': null,
  ']': null,
  a: guitar2,
  s: guitar1,
  d: null,
  f: cmaj7,
  g: dmin7,
  h: emin7,
  j: fmaj7,
  k: g7,
  l: amin7,
  ';': bmin7b5,
  "'": cmaj7Oct,
  z: guitar11,
  x: guitar12,
  c: guitar3,
  v: guitar4,
  b: guitar5,
  n: guitar6,
  m: guitar7,
  ',': guitar8,
  '.': guitar9,
  '/': guitar10
}

let metronomeOn = false

const samples = {samples: []}

//Loop initialization. Activates on button click

export default function BeetMaker2() {
  const [samplerObj, setSamplerObj] = useState(samples)

  useEffect(() => {
    console.log('updated samplerArr...hopefully')
  }, [samplerObj.samples])

  const beatLoop = function(time, value) {
    value.note.triggerAttackRelease(value.tone)
  }

  let parts
  let isPlaying = false

  function startLoop() {
    isPlaying = true
    Tone.Transport.cancel()
    Tone.Transport.stop()
    Tone.Transport.loop = true
    Tone.Transport.loopEnd = '1m'
    Tone.Transport.start()
    parts = new Tone.Part(beatLoop, samplerObj.samples).start(0)
  }

  const handleKeyDown = function(identifier) {
    let button = document.getElementById(identifier)
    button.setAttribute('class', 'butts btn active-button')
    if (!isPlaying) keySounds[identifier].triggerAttackRelease('C3', '1m')

    // find the current transport time
    let beat = Tone.Transport.position.split(':')[1]

    // //convert current transport time sixteenths into nearest 32n for timing
    let sixteenths

    if (
      parseInt(Tone.Transport.position.split(':')[2], 10) > 0 &&
      parseInt(Tone.Transport.position.split(':')[2], 10) <= 2
    ) {
      sixteenths = '2'
    } else if (parseInt(Tone.Transport.position.split(':')[2], 10) > 2) {
      sixteenths = '4'
    } else {
      sixteenths = '0'
    }

    if (sixteenths === '4') {
      beat = (parseFloat(beat) + 1).toString()
      sixteenths = '0'
    }

    if (beat === '4') {
      beat = '0'
    }

    const timing = `0:${beat}:${sixteenths}`

    //ensure note currently does not reside within the same beat, to prevent stacking
    const filteredNotes = samplerObj.samples.filter(
      item => item.note === keySounds[identifier] && item.time === timing
    )

    if (!filteredNotes.length && isPlaying) {
      // setSamplerArr(samplerArr.push({time: timing, tone: 'C3', note: keySounds[identifier]}))
      // const tempArrOfSamples = [
      //   {time: timing, tone: 'C3', note: keySounds[identifier]}
      // ]

      samplerObj.samples = [
        ...samplerObj.samples,
        {time: timing, tone: 'C3', note: keySounds[identifier]}
      ]

      setSamplerObj({
        ...samplerObj,
        samples: [...samplerObj.samples]
      })

      console.log('BEETMAKER2 SAMPLES: ', samplerObj.samples)
      parts.add({time: timing, tone: 'C3', note: keySounds[identifier]})
    }
  }
  function stopLoop() {
    Tone.Transport.cancel()
    Tone.Transport.stop()
  }

  const metronome = new Tone.Event(function(time) {
    woodblock.triggerAttackRelease('C4', '4n')
    woodblock.triggerAttackRelease('C3', '4n', '+4n')
    woodblock.triggerAttackRelease('C3', '4n', '@2n')
    woodblock.triggerAttackRelease('C3', '4n', '@2n.')
  })
  metronome.loop = true
  metronome.loopEnd = '1m'

  function changeVolume(value) {
    Tone.Master.volume.value = value
  }

  function changeTempo(value) {
    Tone.Transport.bpm.value = value
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
        className="dropzoneContainer draggable-dropzone--occupied"
        style={{
          backgroundColor: '#490769',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          borderRadius: '2px',
          flexWrap: 'wrap'
        }}
      >
        {Object.keys(keySounds).map(key => {
          return (
            <div key={key} className="">
              <Button
                id={key}
                className="butts sample"
                onMouseDown={e => handleKeyDown(e.target.id)}
                onMouseUp={e => handleKeyUp(e.target.id)}
              >
                press {key}
              </Button>
            </div>
          )
        })}
      </div>
      <Button onClick={() => startLoop()} className="butts">
        Play loop
      </Button>
      <Button onClick={() => stopLoop()} className="butts">
        Stop loop
      </Button>
      <Button
        onClick={() => {
          metronomeOn = !metronomeOn

          if (metronomeOn) {
            metronome.start(0)
          } else {
            metronome.cancel()
            metronome.stop()
          }
        }}
        className="butts"
      >
        Toggle Metronome
      </Button>
      <Form style={{color: '#fe1bcb'}}>
        <Form.Group>
          <Form.Label>Volume</Form.Label>
          <Form.Control
            name="Volume"
            type="range"
            min="-50"
            max="5"
            id="volume"
            list="volTicks"
            defaultValue="0"
            step="0.5"
            onChange={e => changeVolume(e.target.value)}
          />
          <datalist id="volTicks">
            <option value="-50" />
            <option value="0" />
            <option value="5" />
          </datalist>
        </Form.Group>
        <Form.Group>
          <Form.Label>Speed</Form.Label>
          <Form.Control
            name="BPM"
            type="range"
            min="60"
            max="200"
            id="bpm"
            list="bpmTicks"
            defaultValue="120"
            step="1"
            size="lg"
            onChange={e => changeTempo(e.target.value)}
          />
          <datalist id="bpmTicks">
            <option value="60" />
            <option value="120" />
            <option value="200" />
          </datalist>
        </Form.Group>
      </Form>
      <Tracks samplerObj={samplerObj} setSamples={setSamplerObj} />
    </div>
  )
}
