import initialState from './initialState'

const rehydrateReducer = (state = initialState.rehydrate, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

export default rehydrateReducer;
