import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increaseByAmount, increment, reset } from "./CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increaseByAmount(5))}>IncreaseBy5</button>
    </div>
  );
};

export default Counter;
