const initialState = {
  jobs: [],
};

export const JobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return { ...state };

    default:
      return state;
  }
};
