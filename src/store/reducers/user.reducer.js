import { SET_USER_INFOR, SET_TITLE_HEADER, SET_DETAIL_DAYOFF } from "../types/user.type";

let userInfor = localStorage.getItem("WLC_LOGIN");
if (userInfor) {
  userInfor = JSON.parse(userInfor);
}
const DEFAULT_STATE = {
  userInfor,
  userPosition: 'HR',
  titleHeader: '',
  detailDayOff: [],
};
export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SET_USER_INFOR: {
      state.userInfor = payload;
      return { ...state };
    }
    case SET_TITLE_HEADER: {
      state.titleHeader = payload;
      return { ...state };
    }
    case SET_DETAIL_DAYOFF: {
      state.detailDayOff = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
