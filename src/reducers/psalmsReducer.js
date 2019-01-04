import types from '../actions/actionTypes'
import initialState from './initialState'

const psalmsReducer = (state = initialState.psalms, action)=> {
  switch (action.type) {
    case types.LOAD_PSALMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default psalmsReducer
