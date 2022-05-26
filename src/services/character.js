import { ERROR_ON_REQUEST, SERVER_SIDE_ERROR } from "../constant/messages";

export const API_URL = process.env.REACT_APP_API_BASE_URL;

export const handleResponse = (response) =>
  response.json().then((data) => {
    if (!response.ok) {
      const unknowMessage =
        response.status >= 500 ? SERVER_SIDE_ERROR : ERROR_ON_REQUEST;
      let error = (data && (data.error || data.message)) || unknowMessage;
      if (response.status === 404) {
        error = "NOT_FOUND";
      }
      return Promise.reject(data.error_type ? data : error);
    }
    return data;
  });
