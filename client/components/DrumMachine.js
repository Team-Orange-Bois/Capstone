import React from 'react'
import {Form} from 'react-bootstrap'
import * as Tone from 'tone'

export default function DrumMachine() {
  let Pattern = {
    kick: '1n',
    snare: '2n',
    hat: '4n'
  }
  let kick = new Tone.Sampler(
    {
      c4:
        'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fkick.mp3?alt=media&token=fc8bddf1-7ee7-4337-9a72-89459291bc89'
    },
    () => console.log('loaded kick')
  ).toMaster()

  let snare = new Tone.Sampler(
    {
      c4:
        'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2Fsnare.mp3?alt=media&token=09b8ea4e-8b37-4c98-beb9-a2460cdf509c'
    },
    () => console.log('loaded snare')
  ).toMaster()

  let hat = new Tone.Sampler(
    {
      c4:
        'https://firebasestorage.googleapis.com/v0/b/siqbeets-23b66.appspot.com/o/lofi-siq-beets%2FclosedHat.mp3?alt=media&token=dfdd2ffc-317b-465a-9499-55e4ac07a6b2'
    },
    () => console.log('loaded hat')
  ).toMaster()

  function hatFunc() {
    hat.triggerAttackRelease('c4', '8n')
  }

  function kickFunc() {
    kick.triggerAttackRelease('c4', '8n')
  }

  function snareFunc() {
    snare.triggerAttackRelease('c4', '8n')
  }

  function loopDrums() {
    Tone.Transport.cancel()
    let loopKick = new Tone.Loop(kickFunc, Pattern.kick)
    let loopSnare = new Tone.Loop(snareFunc, Pattern.snare)
    let loopHat = new Tone.Loop(hatFunc, Pattern.hat)
    Tone.Transport.start()
    loopKick.start(0)
    loopSnare.start(0)
    loopHat.start(0)
  }

  function stopLoop() {
    Tone.Transport.cancel()
    Tone.Transport.stop()
  }
  function changeVolume(value) {
    Tone.Master.volume.value = value
    console.log(Tone.Master.volume.value)
  }

  function changeTempo(value) {
    Tone.Transport.bpm.value = value
  }

  function changePattern(target) {
    Pattern[target.name] = target.value
    loopDrums()
  }

  return (
    <div id="controlContainer">
      <div id="controlSliders">
        <button type="button" onClick={() => loopDrums()}>
          Play simple drum loop
        </button>
        <button type="button" onClick={() => stopLoop()}>
          Stop drum loop
        </button>
        <Form>
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
      </div>
      <div id="controlOptions" onChange={e => changePattern(e.target)}>
        <div>
          <label>Kick Pattern:</label>
          <select name="kick">
            <option value="null">None</option>
            <option selected value="1n">
              Whole Notes
            </option>
            <option value="2n">Half Notes </option>
            <option value="4n">Quarter Notes</option>
            <option value="8n">Eighth Notes</option>
          </select>
        </div>
        <div>
          <label>Snare Pattern:</label>
          <select name="snare">
            <option value="null">None</option>
            <option value="1n">Whole Notes</option>
            <option selected value="2n">
              Half Notes{' '}
            </option>
            <option value="4n">Quarter Notes</option>
            <option value="8n">Eighth Notes</option>
          </select>
        </div>
        <div>
          <label>Hat Pattern:</label>
          <select name="hat">
            <option value="null">None</option>
            <option value="1n">Whole Notes</option>
            <option value="2n">Half Notes </option>
            <option selected value="4n">
              Quarter Notes
            </option>
            <option value="8n">Eighth Notes</option>
            <option value="16n">Sixteenth Notes</option>
          </select>
        </div>
      </div>
    </div>
  )
}
