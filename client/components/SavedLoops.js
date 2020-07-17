/* eslint-disable no-inner-declarations*/
import React, {useEffect, useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getSongsThunk} from '../store/savedSongs'
import axios from 'axios'
import {object} from 'prop-types'

const SavedLoopsComponent = ({getSongs, songs}) => {
  const [savedSongs, setSavedSongs] = useState(songs)

  useEffect(() => {
    getSongs()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    let songName = event.target.song.value

    const {data} = await axios.get(`/api/songs?song=${songName}`)

    window.location.reload(false)
  }

  return (
    <div>
      {songs.length ? (
        <Form
          onSubmit={e => handleSubmit(e)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center'
          }}
        >
          <Form.Control as="select" name="song">
            <option defaultValue>Load a Saved Loop</option>
            {songs.length &&
              songs[0].map(songLoop => (
                <option key={songLoop.name}>{songLoop.name}</option>
              ))}
          </Form.Control>
          <Button className="butts" type="submit" style={{height: '33%'}}>
            Load Sample
          </Button>
        </Form>
      ) : (
        <h1 style={{color: '#FE1BCB'}}>No saved Loops</h1>
      )}
    </div>
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
