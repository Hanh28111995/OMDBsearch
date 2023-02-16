// // import { USER_INFO_KEY } from "../../constants/common";
import { SET_MOVIE_DETAIL, SET_MOVIE_LIST, TOGGLE_MODAL } from "../types/user.type";

const DEFAULT_STATE = {
  movieList:[],
  movieDetail:{},
  openModel: false,
};
export const userReducer = (state = DEFAULT_STATE, { type, payload }) => {
  switch (type) {
    case SET_MOVIE_DETAIL: {
      state.movieDetail = payload;
      return { ...state };
    }
    case SET_MOVIE_LIST: {
      state.movieList = payload;
      return { ...state };
    }
    case TOGGLE_MODAL: {
      state.openModel = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
