const personaReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PERSONAS':
      return action.payload;
    default:
      return state;
  }
};

export default personaReducer