import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMOLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggoled = (id) => {
  return {
    type: TOGGLED,
    payload: id,
  };
};

export const colorSelected = (id, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      id,
      color,
    },
  };
};
export const deleted = (id) => {
  return {
    type: DELETED,
    payload: id,
  };
};
export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const clearCompleted = () => {
  return {
    type: CLEARCOMOLETED,
  };
};
