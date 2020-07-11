import React from 'react'
import Keyboard from 'react-simple-keyboard'
import {keySounds} from './toneSamples'
import DrumMachine from './DrumMachine'

export default function BeetMaker() {
  const handleKeyDown = identifier => {
    keySounds[identifier].triggerAttackRelease('C3', '1m')
  }

  document.addEventListener('keydown', e => {
    if (keySounds[e.key] && !e.repeat) handleKeyDown(e.key)
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
      <form
        style={{
          backgroundColor: '#490769',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          borderRadius: '2px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          <Keyboard
            display={{
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
              q: 'kick',
              w: 'snare',
              e: 'hat',
              r: 'chord1',
              t: 'chord2',
              y: 'chord3',
              u: 'chord4',
              i: 'chord5',
              o: null,
              p: null,
              '[': null,
              ']': null,
              a: 'guitar2',
              s: 'guitar1',
              d: null,
              f: 'cmaj7',
              g: 'dmin7',
              h: 'emin7',
              j: 'fmaj7',
              k: 'g7',
              l: 'amin7',
              ';': 'bmin7b5',
              "'": 'cmaj7Oct',
              z: 'guitar11',
              x: 'guitar12',
              c: 'guitar3',
              v: 'guitar4',
              b: 'guitar5',
              n: 'guitar6',
              m: 'guitar7',
              ',': 'guitar8',
              '.': 'guitar9',
              '/': 'guitar10'
            }}
            style={{
              backgroundColor: '#35054C',
              color: '#24C0F9'
            }}
            layoutName="default"
            onKeyPress={button => handleKeyDown(button)}
          />
        </div>
      </form>
      <DrumMachine />
    </div>
  )
}
