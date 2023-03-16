import { SET_USER_INFOR, SET_TITLE_HEADER } from "../types/user.type";
const setUserInfor = (user) => {
  return {
    type: SET_USER_INFOR,
    payload: user,
  }
};
const setTitleHeader = (title) => {
  return {
    type: SET_TITLE_HEADER,
    payload: title,
  }
};
export { setUserInfor, setTitleHeader }