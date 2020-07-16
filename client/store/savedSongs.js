import axios from 'axios'
//Action Types
// const GET_SONG = 'GET_SONG'
const GET_SONGS = 'GET_SONGS'

//Action Creators
// const getSong = song => ({
//   type: GET_SONG,
//   song
// })

const getSongs = songs => ({
  type: GET_SONGS,
  songs
})

//DONT DROP THAT THUNK THUNK THUNK
export const getSongsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/songs')
    if (data.length) {
      dispatch(getSongs(data))
    } else return
  } catch (error) {
    console.log(error)
  }
}

// export const getSongThunk = songName => async dispatch => {
//   try {
//     const {data} = await axios.get('/api/songs/' + songName)
//     dispatch(getSong(data))
//   } catch (error) {
//     console.log(error)
//   }
// }

const defaultState = {songs: [], song: []}

export default function(state = defaultState, action) {
  switch (action.type) {
    case GET_SONGS:
      return {...state, songs: [action.songs]}
    // case GET_SONG:
    //   return {...state, song: [action.song]}
    default:
      return state
  }
}
