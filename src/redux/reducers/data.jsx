const initialState = {
  files: null,
};

export const data = (state = initialState, action) => {
  if (action.type === "STORE_DATA") {
    return { ...state, files: action.payload };
  }
  return state;
};
