const initialState = {
  tags: [],
};

export const TagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TAGS":
      return { ...state };

    default:
      return state;
  }
};
