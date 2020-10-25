import React, { createContext, useReducer } from "react";
import { initialState, UserReducer } from "../reducers/useReducer";

//criar contexto do usuario
export const UserContext = createContext();
const [state, dispatch] = useReducer(UserReducer, initialState);
export default ({ children }) => {
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
