//Action Types
// const GET_SAMPLES = 'GET_SAMPLES'
const SET_SAMPLES = 'SET_SAMPLES'
const RESET_SAMPLES = 'RESET_SAMPLES'

//iniitial state

const defaultSamples = []

//Action Creators
// const getSamples = () => ({type: GET_SAMPLES})
const setSamples = sample => ({type: SET_SAMPLES, sample})
const resetSamples = () => ({type: RESET_SAMPLES})

export const setSamplesThunk = sample => dispatch => {
  try {
    dispatch(setSamples(sample))
  } catch (error) {
    console.error(error)
  }
}

export const resetSamplesThunk = () => dispatch => {
  try {
    dispatch(resetSamples())
  } catch (error) {
    console.error(error)
  }
}

export default function(state = defaultSamples, action) {
  switch (action.type) {
    case SET_SAMPLES:
      return [...state, action.sample]
    case RESET_SAMPLES:
      return
    default:
      return state
  }
}
