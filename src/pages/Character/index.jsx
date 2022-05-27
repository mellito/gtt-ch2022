import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardInformation from "../../components/CardInformation";
import Loading from "../../components/Loading";
import "./character.css";

function Character() {
  const { id } = useParams();
  const [characterFilter, setCharacterFilter] = useState({});
  const characters = useSelector((state) => state.characterData);

  useEffect(() => {
    if (characters.results) {
      const filterCharacter = characters.results.filter(
        (character) => character.id === Number(id),
      );
      setCharacterFilter(...filterCharacter);
    }
  }, [characters.results]);

  return (
    <Loading>
      <div className="information-container">
        {Object.keys(characterFilter).length > 0 ? (
          <CardInformation character={characterFilter} />
        ) : null}
      </div>
    </Loading>
  );
}

export default Character;
