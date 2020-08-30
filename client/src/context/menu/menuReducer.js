import { TOGGLE_DROP_MENU, TOGGLE_POPUP_MENU, RESET_MENU } from "./menuTypes"

export const initialMenu = {
  drop: false,
  popup: false,
}

export const menuReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_DROP_MENU:
      return {
        drop: !state.drop,
        popup: false,
      }
    case TOGGLE_POPUP_MENU:
      return {
        drop: false,
        popup: !state.popup,
      }
    case RESET_MENU:
      return initialMenu
    default:
      return state
  }
}
