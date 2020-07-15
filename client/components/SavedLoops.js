import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getSongsThunk, getSongThunk} from '../store/savedSongs'
import {setSamplesThunk} from '../store/sampler'
import axios from 'axios'

const SavedLoopsComponent = ({getSong, song, getSongs, songs}) => {
  useEffect(() => {
    getSongs()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    let songName = event.target.song.value
    await getSong(songName)
  }

  if (song.length) {
    console.log('de-songify the saved loop')
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
    setSamples: sample => dispatch(setSamplesThunk(sample))
  }
}

const mapState = state => {
  return {
    songs: state.savedSongs.songs,
    song: state.savedSongs.song
  }
}

export default connect(mapState, mapDispatch)(SavedLoopsComponent)
