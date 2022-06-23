import { ADD_TO_BASKET, REMOVE_ITEM, EMPTY_BASKET } from "../types";

export const addToBasketAction = (item) => {
  return {
    type: ADD_TO_BASKET,
    payload: item,
  };
};

export const removeItemAction = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

export const emptyBasketAction = () => {
  return {
    type: EMPTY_BASKET,
  };
};
