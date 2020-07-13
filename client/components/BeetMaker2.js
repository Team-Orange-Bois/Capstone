/* eslint-disable complexity */
import React, {useState, useEffect} from 'react'
import * as Tone from 'tone'
import {Button, Form} from 'react-bootstrap'
import Tracks from './Tracks'
import {defaultBoard} from './toneSamples'

Tone.context.latencyHint = 'fastest'
const woodblock = new Tone.Sampler({
  C3:
    'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fwoodblock.mp3?alt=media&token=c2192730-64fe-41e6-a744-0df8d7d99ca0'
}).toMaster()

const keySounds = defaultBoard
// let parts
// let metronomeOn = false
// let isPlaying = false

const samples = {samples: []}

const metronome = new Tone.Event(function(time) {
  woodblock.triggerAttackRelease('C4', '4n')
  woodblock.triggerAttackRelease('C3', '4n', '+4n')
  woodblock.triggerAttackRelease('C3', '4n', '@2n')
  woodblock.triggerAttackRelease('C3', '4n', '@2n.')
})
metronome.loop = true
metronome.loopEnd = '1m'

const rowClasses = ['number-row', 'q-row', 'a-row', 'z-row']
let rowIndex = -1
let buttonIndex = -1

export default function BeetMaker2() {
  const [samplerObj, setSamplerObj] = useState(samples)
  const [metronomeStatus, setMetronomeStatus] = useState(false)
  const [playStatus, setPlayStatus] = useState(false)
  const [recordStatus, setRecordStatus] = useState(false)
  const [parts, setParts] = useState({})

  useEffect(() => {
    //metronome
    if (metronomeStatus) {
      metronome.start(0)
    } else {
      metronome.cancel()
      metronome.stop()
    }

    rowIndex = -1
    buttonIndex = -1
  }, [samplerObj, metronomeStatus, playStatus, recordStatus, parts])

  const beatLoop = function(time, value) {
    value.note.triggerAttackRelease(value.tone)
  }

  function startLoop() {
    setPlayStatus(true)
    Tone.Transport.cancel()
    Tone.Transport.stop()
    Tone.Transport.loop = true
    Tone.Transport.loopEnd = '1m'
    Tone.Transport.start()
    let newParts = new Tone.Part(beatLoop, samplerObj.samples).start(0)
    setParts(newParts)
  }

  const handleKeyDown = (row, identifier) => {
    const button = document.getElementById(identifier)
    button.setAttribute('class', 'butts btn active-button')

    keySounds[row][identifier].note.triggerAttackRelease('C3', '1m')

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
      item =>
        item.note === keySounds[row][identifier].note && item.time === timing
    )

    if (!filteredNotes.length && playStatus) {
      samplerObj.samples = [
        ...samplerObj.samples,
        {
          time: timing,
          tone: 'C3',
          note: keySounds[row][identifier].note
        }
      ]

      setSamplerObj({
        ...samplerObj,
        samples: [...samplerObj.samples]
      })
      parts.add({
        time: timing,
        tone: 'C3',
        note: keySounds[row][identifier].note
      })
      setParts(parts)
    }
  }
  function stopLoop() {
    Tone.Transport.cancel()
    Tone.Transport.stop()
    setPlayStatus(false)
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
            onClick={() => {
              rowIndex = -1
              buttonIndex = -1
              startLoop()
            }}
            className="butts"
          >
            Play loop
          </Button>
          <Button onClick={() => stopLoop()} className="butts">
            Stop loop
          </Button>
          <Button
            onClick={() => {
              if (playStatus) {
                setMetronomeStatus(!metronomeStatus)
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
      <Tracks samplerObj={samplerObj} setSamples={setSamplerObj} />
    </div>
  )
}
