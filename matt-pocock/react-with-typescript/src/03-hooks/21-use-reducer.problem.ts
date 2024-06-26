import { useReducer } from "react";
import { Equal, Expect } from "../helpers/type-utils";

type ReducerState = {
  count: number;
};

type ReducerAction =
  | {
      type: "add";
      payload: number;
    }
  | {
      type: "subtract";
      payload: number;
    };

const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "add":
      return { count: state.count + action.payload };
    case "subtract":
      return { count: state.count - action.payload };
    default:
      throw new Error();
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

type tests = [Expect<Equal<typeof state.count, number>>];

dispatch({ type: "add", payload: 1 });

// @ts-expect-error
dispatch({ type: "SUBTRACT", subtract: 1 });

// @ts-expect-error
dispatch({ type: "add" });

// @ts-expect-error
dispatch({ type: "subtract", subtract: "123" });
