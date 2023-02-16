import { request } from "../configs/axios";

export const fetchDetailMovieAPI = (title) => {
  return request({
    url: `${title}`,
    method: "GET",
  });
};

export const fetchListMovieAPI = (keyword) => {
  return request({
    url: `${keyword}`,
    method: "GET",
  });
};
