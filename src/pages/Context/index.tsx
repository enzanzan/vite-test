// import { createContext } from 'react';

// const Context = createContext({
//     message: 0,
//     setMessage: (_item: any) => {},
//     itemA: 0,
//     setItemA: (_item: any) => {}
// })

// export default Context;

import { createContext, useReducer } from "react";

export interface type {
    itemA: number,
    itemB: number,
    dispatch: any,
}

export const Context = createContext({
    itemA: 0,
    itemB: 0,
    dispatch: () => {},
});



const init = (init: any) => {
    return init;
}

const defaultValue = {
    itemB: 0,
    itemA: 0,
}

const reducer = (state: any, action: any) => {
  console.log("state", state);
  console.log("action", action);
  switch (action.type) {
    case "SET_ITEM_A":
      return {
        ...state,
        itemA: action.itemA,
      };
    case "SET_ITEM_B":
      return {
        ...state,
        itemB: action.itemB,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, defaultValue, init);
  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  );
};
