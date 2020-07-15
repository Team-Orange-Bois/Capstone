import React from 'react'
import Keyboard from 'react-simple-keyboard'
import {defaultBoard} from './toneSamples'
import DrumMachine from './DrumMachine'

let keySounds = defaultBoard

export default function BeetMaker() {
  const handleKeyDown = (row, identifier) => {
    keySounds[row][identifier].note.triggerAttackRelease('C3', '1m')
  }

  document.addEventListener('keydown', e => {
    Object.keys(keySounds).forEach(key => {
      if (keySounds[key][e.key]) {
        handleKeyDown(key, e.key)
      }
    })
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
              '1': 'kick',
              '2': 'snare',
              '3': 'closedHat',
              '4': 'lit',
              '5': 'sick',
              '6': 'hotDamn',
              '7': 'hahaha',
              '8': 'wow',
              '9': 'yeah',
              '0': 'youGotIt',
              '-': 'bigOof',
              '=': 'iCantSwim',
              q: 'badBitch',
              w: 'lettuceTurnipDaBeet',
              e: 'itsTime',
              r: 'turnip',
              t: 'daBeat',
              y: 'flowerPower',
              u: 'holyGuac',
              i: 'wikiWiki',
              o: 'oof',
              p: 'skrrt',
              '[': 'bonkers',
              ']': 'hummus',
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
              '/': null
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
