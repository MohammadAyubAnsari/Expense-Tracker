// import { Component } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);

  const IncrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  };
  const DecrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const decreaseHandler = () => {
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={IncrementHandler}>Increment By 2</button>
        <button onClick={increaseHandler}>Increase By 5</button>

        <button onClick={DecrementHandler}>Decrement By 2</button>
        <button onClick={decreaseHandler}>Decrease By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
