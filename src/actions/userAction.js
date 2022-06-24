import { ADD_TO_FAVORITES, SET_USER } from "../types";

export const setUserAction = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const addToFavoritesAction = (id) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: id,
  };
};
