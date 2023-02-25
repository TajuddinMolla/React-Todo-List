import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import { initialState } from "./initialState";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };
    case COLORCHANGED:
      const { color, changeType } = action.payload;
      if (changeType === "added") {
        return {
          ...state,
          colors: [...state.colors, color],
        };
      } else if (changeType === "remove") {
        return state.colors.filter((oldColor) => oldColor !== color);
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default reducer;
