import React from 'react'
import * as Tone from 'tone'

export default function TonePractice() {
  let loopBeat
  const bassSynth = new Tone.MembraneSynth().toMaster()

  function setup() {
    loopBeat = new Tone.Loop(song, '4n')
    Tone.Transport.bpm.value = 80
    Tone.Transport.bpm.rampTo(120, 10)
    Tone.Transport.start()
    loopBeat.start(0)
  }

  function song(time) {
    console.log(time)
    bassSynth.triggerAttackRelease('c1', '8n', time)
  }

  function changeVolume(value) {
    bassSynth.volume.value = value
    return bassSynth
  }

  return (
    <div>
      <button type="button" onClick={() => setup()}>
        Play example of ramp up loop
      </button>
      <input
        type="range"
        min="-30"
        max="10"
        id="volume"
        onChange={e => changeVolume(e.target.value)}
      ></input>
    </div>
  )
}
