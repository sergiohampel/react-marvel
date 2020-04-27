const createReducer = (initalState, handleActions) => (
  state = initalState,
  action
) =>
  handleActions.hasOwnProperty(action.type)
    ? handleActions[action.type](state, action)
    : state;

export default createReducer;
