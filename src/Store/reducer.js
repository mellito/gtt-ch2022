const initialState = {
  characterData: [],
  loading: false,
  url: "1",
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CHARACTERS": {
      return { ...state, characterData: action.payload, loading: true };
    }
    case "URL_ID": {
      return { ...state, url: action.payload };
    }
    case "LOADING": {
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
}

export default reducer;
