const initialState = {
  teste: 1,
};

export const teste = (state = initialState, action) => {
  if (action.type === "TESTE") {
    return { ...state, teste: "deu certo" };
  }
  return state;
};
