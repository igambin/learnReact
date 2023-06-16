const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  let newState = { ...state };

  newState.counter =
    action.type === "increment"
      ? state.counter + 1
      : action.type === "decrement"
      ? state.counter - 1
      : action.type === "reset"
      ? 0
      : state.counter;
  return newState;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "reset" });
