/* eslint-disable no-inner-declarations*/
import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {getSongsThunk} from '../store/savedSongs'
import axios from 'axios'

const SavedLoopsComponent = ({getSongs, songs}) => {
  const [savedSongs, setSavedSongs] = useState(songs)

  useEffect(() => {
    getSongs()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    let songName = event.target.song.value

    const {data} = await axios.get('/api/songs/' + songName)

    window.location.reload(false)
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
    getSongs: () => dispatch(getSongsThunk())
  }
}

const mapState = state => {
  return {
    songs: state.savedSongs.songs
  }
}

export default connect(mapState, mapDispatch)(SavedLoopsComponent)
