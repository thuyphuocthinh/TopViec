const initialState = {
  cities: [],
};

export const CityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CITY":
      return { ...state };

    default:
      return state;
  }
};
