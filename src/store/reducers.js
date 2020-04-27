import { combineReducers } from "redux";

import modules from "../modules/";

const reducers = modules.map((module) => {
  if (module.store) {
    return {
      [module.store.name]: module.store.reducer,
    };
  }

  return false;
})[0];

export default combineReducers(reducers);
