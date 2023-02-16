import {SET_MOVIE_DETAIL, SET_MOVIE_LIST, TOGGLE_MODAL } from "../types/user.type";
  const setMovieDetail = (movie) => {
    return {
        type: SET_MOVIE_DETAIL,
        payload: movie,
    }
 };
 const setMovieList = (list) => {
    return {
        type: SET_MOVIE_LIST,
        payload: list,
    }
 };
 const setModal = (toggle) => {
  return {
      type: TOGGLE_MODAL,
      payload: toggle,
  }
};

 export {setMovieDetail, setMovieList, setModal}