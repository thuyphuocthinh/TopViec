import { GET_ALL_JOBS, UPDATE_JOB } from "../actionTypes/JobTypes";

export const getAllJobsAction = (result) => {
  return {
    type: GET_ALL_JOBS,
    payload: result,
  };
};

export const getJobsUpdatedAction = (result) => {
  return {
    type: UPDATE_JOB,
    payload: result,
  };
};
