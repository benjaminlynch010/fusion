const partyReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_PARTY':
    return action.payload
    default:
      return state
  }
}

export default partyReducer