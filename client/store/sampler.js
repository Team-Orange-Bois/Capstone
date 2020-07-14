//Action Types
// const GET_SAMPLES = 'GET_SAMPLES'
const SET_SAMPLES = 'SET_SAMPLES'

//iniitial state

const defaultSamples = []

//Action Creators
// const getSamples = () => ({type: GET_SAMPLES})
const setSamples = sample => ({type: SET_SAMPLES, sample})

export const setSamplesThunk = sample => dispatch => {
  try {
    dispatch(setSamples(sample))
  } catch (error) {
    console.error(error)
  }
}

export default function(state = defaultSamples, action) {
  switch (action.type) {
    case SET_SAMPLES:
      console.log(state)
      return [...state, action.sample]
    default:
      return state
  }
}
