import { useState } from "react";
import { increment, decrement, incrementValue } from "../features/counterSlice";
import { useSelector, useDispatch } from "react-redux";

function CounterUi() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [num, setNum] = useState();
  return (
    <div>
      <h1>The counter App</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <p>Count:{count}</p>
      <button onClick={() => dispatch(decrement())}>-</button> <br />
      <input
        type="number"
        value={num}
        placeholder="Enter the value to increase"
        onChange={(e) => {
          setNum(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementValue(num));
        }}
      >
        Increase
      </button>
    </div>
  );
}

export default CounterUi;
