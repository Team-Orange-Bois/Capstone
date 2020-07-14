/* eslint-disable complexity */
import React from 'react'
import * as Tone from 'tone'
import {Button, Form} from 'react-bootstrap'
import Tracks from './Tracks'
import {defaultBoard} from './toneSamples'
import {connect} from 'react-redux'
import {setSamplesThunk, resetSamplesThunk} from '../store/sampler'

Tone.context.latencyHint = 'fastest'
const woodblock = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fwoodblock.mp3?alt=media&token=c2192730-64fe-41e6-a744-0df8d7d99ca0'
}).toMaster()

const keySounds = defaultBoard

const samplerObj = {samples: []}
let metronomeStatus = false
let recordStatus = false
let playStatus = false

const beatLoop = function(time, value) {
  value.note.triggerAttackRelease(value.tone)
}

export let newParts = new Tone.Part(beatLoop, samplerObj.samples)

const metronome = new Tone.Event(function(time) {
  woodblock.triggerAttackRelease('C4', '4n')
  woodblock.triggerAttackRelease('C3', '4n', '+4n')
  woodblock.triggerAttackRelease('C3', '4n', '@2n')
  woodblock.triggerAttackRelease('C3', '4n', '+2n.')
})

const rowClasses = ['number-row', 'q-row', 'a-row', 'z-row']
let rowIndex = -1
let buttonIndex = -1

export function BeetMaker2(props) {
  function startLoop() {
    playStatus = true
    Tone.Transport.cancel()
    Tone.Transport.stop()
    Tone.Transport.loop = true
    Tone.Transport.loopEnd = '4m'
    Tone.Transport.start()
    newParts.start(0)
    // setParts(newParts)
  }

  const handleKeyDown = (row, identifier) => {
    const button = document.getElementById(identifier)
    button.setAttribute('class', 'butts btn active-button')

    const timingArr = Tone.Transport.position.split(':')

    let measure = timingArr[0]

    // find the current transport time
    let beat = timingArr[1]

    // //convert current transport time sixteenths into nearest 32n for timing
    let sixteenths = timingArr[2]

    if (parseFloat(sixteenths) >= 1 && parseFloat(sixteenths) <= 2) {
      sixteenths = '2'
    } else if (parseFloat(sixteenths) >= 3) {
      beat = (parseFloat(beat) + 1).toString()
      sixteenths = '0'
    } else if (parseFloat(sixteenths) > 2 && parseFloat(sixteenths) < 3) {
      sixteenths = '2'
      keySounds[row][identifier].note.triggerAttackRelease('C3')
    } else {
      sixteenths = '0'
      keySounds[row][identifier].note.triggerAttackRelease('C3')
    }

    if (beat === '4') {
      measure = (parseInt(measure, 10) + 1).toString()
      beat = '0'
    }

    if (measure === '4') {
      measure = '0'
    }

    const timing = `${measure}:${beat}:${sixteenths}`

    //ensure note currently does not reside within the same beat, to prevent stacking

    const filteredNotes = samplerObj.samples.filter(
      item =>
        item.note === keySounds[row][identifier].note && item.time === timing
    )

    if (!filteredNotes.length && recordStatus) {
      samplerObj.samples.push({
        time: timing,
        tone: 'C3',
        note: keySounds[row][identifier].note
      })

      newParts.add({
        time: timing,
        tone: 'C3',
        note: keySounds[row][identifier].note
      })

      props.setSamples({
        time: timing,
        tone: 'C3',
        note: keySounds[row][identifier].note
      })
    }
  }
  function stopLoop() {
    Tone.Transport.cancel()
    Tone.Transport.stop()
    playStatus = false
    recordStatus = false
  }

  function changeVolume(value) {
    Tone.Master.volume.value = value
  }

  function changeTempo(value) {
    Tone.Transport.bpm.value = value
  }

  const handleKeyUp = (row, identifier) => {
    const button = document.getElementById(identifier)
    button.setAttribute('class', 'butts btn btn-primary')
  }

  document.addEventListener('keydown', e => {
    Object.keys(keySounds).forEach(key => {
      if (keySounds[key][e.key]) {
        handleKeyDown(key, e.key)
      }
    })
  })

  document.addEventListener('keyup', e => {
    Object.keys(keySounds).forEach(key => {
      if (keySounds[key][e.key]) {
        handleKeyUp(key, e.key)
      }
    })
  })

  return (
    <div className="outercontainer">
      <h1 style={{color: '#FE1BCB'}}>Siq Beets</h1>
      <div className="keyboard-wrap">
        <div className="keyboard">
          {Object.keys(keySounds).map(key => {
            rowIndex++
            return (
              <div key={key} className={rowClasses[rowIndex]}>
                {Object.keys(keySounds[key]).map(button => {
                  buttonIndex++
                  return (
                    <div key={button} id={`${buttonIndex}`}>
                      <Button
                        id={button}
                        key={button}
                        className="butts sample"
                        onMouseDown={e => handleKeyDown(key, e.target.id)}
                        onMouseUp={e => handleKeyUp(key, e.target.id)}
                      >
                        {button === 'k0'
                          ? `${keySounds[key][button].label}\n(0)`
                          : `${keySounds[key][button].label}\n(${button})`}
                      </Button>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div>
          <Button
            className="butts"
            onClick={() => {
              startLoop()
            }}
          >
            <i className="material-icons">play_arrow</i>
          </Button>
          <Button
            onClick={() => {
              recordStatus = !recordStatus
              startLoop()
            }}
            className="butts"
          >
            <i className="material-icons">fiber_manual_record</i>
          </Button>
          <Button onClick={() => stopLoop()} className="butts">
            <i className="material-icons">stop</i>
          </Button>
          <Button
            onClick={() => {
              samplerObj.samples = []
              newParts.removeAll()
              stopLoop()
              props.resetSamples()
            }}
            className="butts"
          >
            Clear Loop
          </Button>
          <Button
            onClick={() => {
              if (playStatus) {
                metronomeStatus = !metronomeStatus
                if (metronomeStatus) {
                  metronome.start(0)
                  metronome.loop = true
                  metronome.loopEnd = '1m'
                } else {
                  metronome.cancel().stop()
                }
              }
            }}
            className="butts"
          >
            Toggle Metronome
          </Button>
        </div>
        <div>
          <Form>
            <Form.Group>
              <Form.Label>Volume</Form.Label>
              <Form.Control
                name="Volume"
                type="range"
                min="-20"
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
        </div>
      </div>
      <Tracks />
    </div>
  )
}

const mapDispatch = dispatch => {
  return {
    setSamples: sample => dispatch(setSamplesThunk(sample)),
    resetSamples: () => dispatch(resetSamplesThunk())
  }
}

const mapState = state => {
  return 'boop'
}

export default connect(mapState, mapDispatch)(BeetMaker2)
