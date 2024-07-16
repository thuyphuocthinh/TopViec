import {
  GET_COMPANY_BY_TOKEN,
  LOG_IN,
  UPDATE_COMPANY,
} from "../actionTypes/CompanyTypes";

export const loginAction = (result) => {
  return {
    type: LOG_IN,
    payload: result,
  };
};

export const getCompanyByTokenAction = (result) => {
  return {
    type: GET_COMPANY_BY_TOKEN,
    payload: result,
  };
};

export const updateCompanyAction = (result) => {
  return {
    type: UPDATE_COMPANY,
    payload: result,
  };
};
