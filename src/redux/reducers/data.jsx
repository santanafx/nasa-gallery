const initialState = {
  filesApod: null,
  filesMarsRover: null,
};

export const data = (state = initialState, action) => {
  if (action.type === "STORE_DATA_APOD") {
    return { ...state, filesApod: action.payload };
  }
  if (action.type === "STORE_DATA_MARSROVER") {
    return { ...state, filesMarsRover: action.payload };
  }
  return state;
};
