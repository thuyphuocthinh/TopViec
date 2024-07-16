const initialState = {
  cvs: [],
};

export const CVReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CVs":
      return { ...state };

    default:
      return state;
  }
};
