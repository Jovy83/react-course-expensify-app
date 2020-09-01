import { createStore } from "redux";

// Action generators - functions that return action objects

// if no argument is passed, default is an empty object
// if no incrementBy is passed,  default value is 1
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
  // incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});

// this is not a pure function because the output of this depends on the global variable 'a' which could indeed change.
// we don't want this for our reduces as they need to compute the new state based off the old state and the action
let a = 10;
const add = (b) => {
  return a + b;
};

// we also don't want to change things outside of the reducer
let result;
const add2 = (a, b) => {
  result = a + b;
};

// Reducers
// 1. Reducers are pure functions. the output is only determined by the input
// 2. Never change state or action. we don't want to directly change these things. you should just bee reading off both of those, returning an object that represents the new state
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };

    case "SET":
      return {
        count: action.count,
      };

    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};

// note: default state
const store = createStore(countReducer);

// will be called every time the store changes
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 101 }));

// call if you want to unsubscribe to store changes
// unsubscribe()
