import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice";
import { visibilityActions } from "../store/visibility-slice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.visibility.showCounter);

  const incrementHandler = (step = 1) => {
    dispatch(counterActions.increment({ step: +step }));
  };

  const decrementHandler = (step = 1) => {
    dispatch(counterActions.decrement({ step: +step }));
  };

  const resetCounterHandler = () => {
    dispatch(counterActions.reset());
  };

  const toggleCounterHandler = () => {
    dispatch(visibilityActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <button onClick={toggleCounterHandler}>Toggle</button>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() => decrementHandler()}>Decrement</button>
        <button onClick={() => decrementHandler(5)}>Decrease by 5</button>
        <button onClick={() => incrementHandler(5)}>Increase by 5</button>
        <button onClick={() => incrementHandler()}>Increment</button>
      </div>
      <button onClick={resetCounterHandler}>Reset</button>
    </main>
  );
};

export default Counter;
