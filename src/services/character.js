const API_URL = "https://rickandmortyapi.com/api/character/";

export const getAddCharacters = async (id) => {
  try {
    const response = await fetch(`${API_URL}?page=${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const characters = await response.json();

    return characters;
  } catch (error) {
    return console.error(error);
  }
};

export const getSingleCharacter = async (id) => {
  try {
    const response = await fetch(`${API_URL}${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const character = await response.json();

    return character;
  } catch (error) {
    return console.error(error);
  }
};
