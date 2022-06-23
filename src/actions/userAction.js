import { SET_USER } from "../types";

export const setUserAction = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};
