import createReducer from "../../../store/create-reducer";

import { INCREMENT, DECREMENT } from "./action-types";

const initialState = 0;

const reduce = createReducer(initialState, {
  [INCREMENT]: (state, { value }) => state + value,

  [DECREMENT]: (state, { value }) => state - value,
});

export default reduce;
