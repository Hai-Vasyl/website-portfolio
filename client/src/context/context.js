import React, { createContext, useReducer } from "react"
import { menuReducer, initialMenu } from "./menu/menuReducer"

export const Context = createContext()

export const MainProvider = (props) => {
  const [menu, dispatchMenu] = useReducer(menuReducer, initialMenu)

  return (
    <Context.Provider
      value={{
        menu,
        dispatchMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  )
}
