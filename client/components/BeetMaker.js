import React from 'react'
import Keyboard from 'react-simple-keyboard'
import {defaultBoard} from './toneSamples'
import DrumMachine from './DrumMachine'

let keySounds = defaultBoard

export default function BeetMaker() {
  const handleKeyDown = (row, identifier) => {
    if (identifier === '0') {
      keySounds.numberRow.k0.note.triggerAttackRelease('C3', '1m')
    }
    if (!row) {
      Object.keys(keySounds).forEach(keyRow => {
        Object.keys(keySounds[keyRow]).forEach(key => {
          if (key === identifier) {
            keySounds[keyRow][key].note.triggerAttackRelease('C3', '1m')
          }
        })
      })
    } else {
      keySounds[row][identifier].note.triggerAttackRelease('C3', '1m')
    }
  }

  document.addEventListener('keydown', e => {
    if (e.key === '0') {
      handleKeyDown('numberRow', 'k0')
    } else {
      Object.keys(keySounds).forEach(key => {
        if (keySounds[key][e.key]) {
          handleKeyDown(key, e.key)
        }
      })
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
              '1': 'Kick',
              '2': 'Snare',
              '3': 'Hat',
              '4': 'Lit',
              '5': 'Sick',
              '6': 'Hot Damn',
              '7': 'Hehehehe',
              '8': 'Wow!',
              '9': 'Yeah',
              '0': 'You got it!',
              '-': 'Big Oof',
              '=': 'Swim',
              q: 'Bad Bitch',
              w: 'Lettuce',
              e: 'Thyme',
              r: 'Turnip',
              t: 'Da Beat',
              y: 'Flowers!',
              u: 'Guac',
              i: 'Wiki',
              o: 'Oof',
              p: 'Skrrt!',
              '[': 'Bonkers!',
              ']': 'Hummus!',
              a: 'guitarGroove1',
              s: 'guitarGroove2',
              d: 'guitarGroove3',
              f: 'guitarLick1',
              g: 'guitarLick2',
              h: 'guitarLick3',
              j: 'guitarLick4',
              k: 'guitarLick5',
              l: 'guitarLick6',
              ';': 'guitarLick7',
              "'": 'guitarLick8',
              z: 'keysCmaj7',
              x: 'keysDmin7',
              c: 'keysEmin7',
              v: 'keysFmaj7',
              b: 'keysG7',
              n: 'keysAmin7',
              m: 'keysBm7b5',
              ',': 'keysCmaj7Oct',
              '.': 'minRoll',
              '/': 'Oh Yeah'
            }}
            style={{
              backgroundColor: '#35054C',
              color: '#24C0F9'
            }}
            layoutName="default"
            onKeyPress={button => handleKeyDown(null, button)}
          />
        </div>
      </form>
      <DrumMachine />
    </div>
  )
}
