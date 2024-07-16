import {
  GET_COMPANIES,
  GET_COMPANY_BY_TOKEN,
  LOG_IN,
  SET_KEY,
} from "../actionTypes/CompanyTypes";

const initialState = {
  isLogin: false,
  companies: [],
  info: {},
  key: "1",
};

export const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES:
      return { ...state };

    case SET_KEY: {
      return {
        ...state,
        key: action.payload,
      };
    }

    case GET_COMPANY_BY_TOKEN: {
      return {
        ...state,
        info: action.payload,
      };
    }

    case LOG_IN: {
      return {
        ...state,
        isLogin: action.payload,
      };
    }

    default:
      return state;
  }
};
