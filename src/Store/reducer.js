const initialState = {
  characterData: [],
  loading: false,
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CHARACTERS": {
      return { ...state, characterData: action.payload, loading: true };
    }
    default:
      return state;
  }
}

export default reducer;
