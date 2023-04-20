import React from "react";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  let counter = useSelector((state) => state.counter)
  let theme = useSelector((state) => state.theme)
  console.log(theme);
  const dispatch = useDispatch()
  const decr = () => {
    dispatch({ type: 'decr' })
  }
  return (
    <div className={`'p-10 container m-auto h-auto border rounded flex-col   flex justify-center items-center align-middle' ${theme ? 'bg-black text-white transition-shadow' : 'bg-white text-black transition-all'}`}>
      <h4 className="text-3xl  font-extrabold">{counter}</h4>
      <div className="mt-11"><button onClick={() => dispatch({ type: 'incr' })} class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full">
        Add
      </button>
        <button class="bg-blue-500 hover:bg-blue-700  font-bold py-2 px-4 rounded-full">
          RES
        </button>
        <button onClick={decr} class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-full">
          DECR
        </button></div>
      <button className="bg-slate-500 text-3xl rounded border mt-10" onClick={() => dispatch({ type: 'dark' })}>theme</button>
    </div>
  );
};

export default App;
