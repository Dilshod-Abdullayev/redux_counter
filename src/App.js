import { useSelector, useDispatch } from "react-redux";
import darkTheme from "./state/actions/darkTheme";
import { increment } from "./state/actions/counter";
import { decrement } from "./state/actions/counter";

export default function App() {
  const themeReduc = useSelector((state) => state.darkThemeReducer);
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  let theme = themeReduc.darkThemeOn
  return (
    <div className={` h-screen ${theme ? "text-white bg-black" : 'bg-white text-black'}`}>
      <button className="px-8 py-3 bg-sky-900 mb-7 rounded" onClick={() => dispatch(darkTheme())}> {theme ? 'Dark' : 'Light'} </button>
      <br />
      <button className="px-10 text-3xl rounded bg-sky-800  font-extrabold" onClick={() => dispatch(increment(10))}>+ </button>
      <span className="text-3xl">{counter.count} </span>
      <button className="px-10 text-3xl rounded bg-sky-800 font-extrabold" onClick={() => counter.count > 0 && dispatch(decrement(24))}>
        -
      </button>
    </div>
  );
}
