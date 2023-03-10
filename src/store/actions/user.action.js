import { SET_USER_INFOR } from "../types/user.type";
const setUserInfor = (movie) => {
  return {
    type: SET_USER_INFOR,
    payload: movie,
  }
};

export { setUserInfor }