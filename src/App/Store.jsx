import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Features/Counter/CounterSlice";
import PostReducer from "../Features/ToDos/PostSlice";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    posts: PostReducer,
  },
});

export default store;
