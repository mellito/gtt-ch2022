const API_URL = "https://rickandmortyapi.com/api/character/";

const getAddCharacters = async () => {
  try {
    const response = await fetch(`${API_URL}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const characters = await response.json();

    return characters;
  } catch (error) {
    return console.error(error);
  }
};
export default getAddCharacters;
