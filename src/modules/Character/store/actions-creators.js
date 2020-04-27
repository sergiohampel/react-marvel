import { INCREMENT, DECREMENT } from "./action-types";

export const increment = (value) => ({
  type: INCREMENT,
  value,
});

export const decrement = (value) => ({
  type: DECREMENT,
  value,
});
