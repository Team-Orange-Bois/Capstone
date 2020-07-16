//Action Types
// const GET_SAMPLES = 'GET_SAMPLES'
const SET_SAMPLES = 'SET_SAMPLES'
const RESET_SAMPLES = 'RESET_SAMPLES'

const SET_ARRAY = 'SET_ARRAY'

//iniitial state

const defaultSamples = []

//Action Creators
// const getSamples = () => ({type: GET_SAMPLES})
const setSamples = sample => ({type: SET_SAMPLES, sample})
const resetSamples = () => ({type: RESET_SAMPLES})

const setArray = sampleArr => ({type: SET_ARRAY, sampleArr})

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

export const setArrayThunk = sampleArr => dispatch => {
  try {
    dispatch(setArray(sampleArr))
  } catch (error) {
    console.log(error)
  }
}

export default function(state = defaultSamples, action) {
  switch (action.type) {
    case SET_SAMPLES:
      return [...state, action.sample]
    case RESET_SAMPLES:
      return []
    case SET_ARRAY:
      return action.sampleArr
    default:
      return state
  }
}
