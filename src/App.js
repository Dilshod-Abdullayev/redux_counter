import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCounter, resetCounter, DecrCounter } from "./redux/actions/index";
const App = () => {
  const { amount } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  const handleDecr = () => {
    dispatch(DecrCounter());
  };
  return (
    <div>
      <h4>{amount}</h4>
      <button onClick={handleAdd}> ADD </button>
      <br />
      <hr />
      <button onClick={handleDecr}> DECR </button>
      <br />
      <hr />
      <button onClick={handleReset}> RESET </button>
    </div>
  );
};

export default App;
