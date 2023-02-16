import axios from 'axios';
import { BASE_URL } from '../constants/common';

export const request = axios.create({
    baseURL: BASE_URL,
})

//Setting for request to API 
request.interceptors.request.use((config) => {
    return config;
})
//Setting for response from API
request.interceptors.response.use((response) => {
    return response;
})