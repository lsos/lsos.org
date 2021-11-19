import { useState } from "react";

export { useStateObject };

function useStateObject<State extends Object>(stateInitial: State) {
  const [state, setState] = useState<State>(stateInitial);
  const stateObject = { ...state };
  const stateProxy = new Proxy(stateObject, { set });
  return stateProxy;
  function set<T extends keyof State>(_: State, key: T, newVal: State[T]) {
    stateObject[key] = newVal;
    setState({ ...stateObject });
    return true;
  }
}
