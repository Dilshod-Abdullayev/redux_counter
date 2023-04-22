import actionTypes from "../actionTypes";

export function increment(count) {
  return {
    type: actionTypes.INCREMENT,
    payload: count || 1
  };
}

export function decrement(count) {
  return {
    type: actionTypes.DECREMENT,
    payload: count || 1
  };
}
