/* eslint-disable no-inner-declarations*/
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getSongsThunk, getSongThunk} from '../store/savedSongs'
import {setArrayThunk} from '../store/sampler'
import {defaultBoard} from './toneSamples'
import axios from 'axios'

const SavedLoopsComponent = ({
  getSong,
  song,
  getSongs,
  songs,
  setArrayOnRedux
}) => {
  useEffect(() => {
    getSongs()
  }, [])

  //helper for finding the Tone.sampler obj to reconstruct the samplerObj
  function findSample(label) {
    let sample
    Object.keys(defaultBoard).forEach(row =>
      Object.keys(defaultBoard[row]).forEach(key => {
        if (defaultBoard[row][key].label === label) {
          sample = defaultBoard[row][key].note
        }
      })
    )
    return sample
  }
  //will be the sample array we set to redux state
  let loadedSong

  //if getSong thunk set a song to redux on submit
  if (song.length) {
    //song is an arr of an arr of length 1
    let dataToConvert = song[0][0]

    loadedSong = dataToConvert.samples.map(sample => ({
      time: sample.time,
      tone: sample.tone,
      label: sample.label,
      note: findSample(sample.label)
    }))
    async function fireSetSamples() {
      await setArrayOnRedux(loadedSong)
    }
    fireSetSamples()
  }

  const handleSubmit = async e => {
    e.preventDefault()
    let songName = event.target.song.value

    await getSong(songName)
  }

  return (
    <>
      {songs.length ? (
        <form onSubmit={e => handleSubmit(e)}>
          <select name="song">
            <option defaultValue>Load a Saved Loop</option>
            {songs[0].map(songLoop => (
              <option key={songLoop.name}>{songLoop.name}</option>
            ))}
          </select>
          <button type="submit">Load Sample</button>
        </form>
      ) : (
        <h1 style={{color: '#FE1BCB'}}>No saved Loops</h1>
      )}
    </>
  )
}

const mapDispatch = dispatch => {
  return {
    getSongs: () => dispatch(getSongsThunk()),
    getSong: songName => dispatch(getSongThunk(songName)),
    setArrayOnRedux: sample => dispatch(setArrayThunk(sample))
  }
}

const mapState = state => {
  return {
    songs: state.savedSongs.songs,
    song: state.savedSongs.song
  }
}

export default connect(mapState, mapDispatch)(SavedLoopsComponent)
