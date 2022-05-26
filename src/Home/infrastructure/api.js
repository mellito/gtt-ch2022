import { handleResponse } from "../../services/character";
import url from "./backendUrl";

const getCharacter = () => {
  const requestOption = { method: "GET" };
  return fetch(url, requestOption).then(handleResponse);
};

export default getCharacter;
