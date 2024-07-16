import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { CityReducer } from "./reducers/CityReducer";
import { CompanyReducer } from "./reducers/CompanyReducer";
import { CVReducer } from "./reducers/CVReducer";
import { JobsReducer } from "./reducers/JobsReducer";
import { TagsReducer } from "./reducers/TagsReducer";

const rootReducers = combineReducers({
  CityReducer,
  CompanyReducer,
  CVReducer,
  TagsReducer,
  JobsReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});
