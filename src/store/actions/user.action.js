import { SET_USER_INFOR, SET_TITLE_HEADER, SET_DETAIL_DAYOFF, SET_TOGGLE_DARK_LIGHT } from "../types/user.type";
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

const setDetailDayOff = (user) => {
  return {
    type: SET_DETAIL_DAYOFF,
    payload: user,
  }
};

const setToggleDarkLight = (user) => {
  return {
    type: SET_TOGGLE_DARK_LIGHT,
    payload: user,
  }
};

export { setUserInfor, setTitleHeader, setDetailDayOff, setToggleDarkLight }