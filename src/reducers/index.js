import {combineReducers} from 'redux'
import psalmsReducer from './psalmsReducer'

const rootReducers = combineReducers({
  psalms: psalmsReducer,
})

export default rootReducers
