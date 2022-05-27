import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../../components/HomeCard";

function Home() {
  const characters = useSelector((state) => state.characterData);
  const loading = useSelector((state) => state.loading);
  return loading ? (
    <div>
      {characters.results &&
        characters.results.map((character) => (
          <HomeCard character={character} key={character.id} />
        ))}
    </div>
  ) : (
    <img
      src="https://cdn.dribbble.com/users/1897588/screenshots/3887258/media/0f0e5623ca821abf1a521fa9b1e5e474.gif"
      alt="loading"
    />
  );
}

export default Home;
