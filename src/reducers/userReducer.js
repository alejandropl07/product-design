import { ADD_TO_FAVORITES, REMOVE_FAVORITES, SET_USER } from "../types";

const initialState = {
  user: null,
  favorites: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };

    default:
      return state;
  }
}
