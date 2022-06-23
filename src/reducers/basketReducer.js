import { ADD_TO_BASKET, REMOVE_ITEM, EMPTY_BASKET } from "../types";

const initialState = {
  basket: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case REMOVE_ITEM:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("Can't remove product");
      }
      return {
        ...state,
        basket: newBasket,
      };

    case EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
}
