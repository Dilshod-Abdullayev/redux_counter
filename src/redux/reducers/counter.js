import { ADD_COUNTER, RESET_COUNTER,DECR_COUNTER } from "../actions/actions.types";

const initalState = {
  amount: 0,
  name: "kelvin"
};

const counter = (state = initalState, action) => {
  switch (action.type) {
    case ADD_COUNTER:
      return {
        amount: action.count
      };
    case RESET_COUNTER:
      return {
        amount: action.count
      };
      case DECR_COUNTER:
        return {
          amount:action.count
        }
    default:
      return state;
  }
};

export default counter;
