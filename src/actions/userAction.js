import { ADD_TO_FAVORITES, REMOVE_FAVORITES, SET_USER } from "../types";

export const setUserAction = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

export const addToFavoritesAction = (item) => {
  return {
    type: ADD_TO_FAVORITES,
    payload: item,
  };
};

export const removeFavoritesAction = (id) => {
  return {
    type: REMOVE_FAVORITES,
    payload: id,
  };
};
