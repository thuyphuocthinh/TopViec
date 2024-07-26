import { GET_ALL_JOBS, UPDATE_JOB } from "../actionTypes/JobTypes";

const initialState = {
  jobs: [],
};

export const JobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_JOBS: {
      return { ...state, jobs: action.payload };
    }

    default:
      return state;
  }
};
