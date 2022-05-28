import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardInformation from "../../components/CardInformation";
import Loading from "../../components/Loading";
import "./character.css";
import { getSingleCharacter } from "../../services/character";

function Character() {
  const { id } = useParams();
  const [characterFilter, setCharacterFilter] = useState({});
  const singleCharacter = async () => {
    const character = await getSingleCharacter(id);
    setCharacterFilter(character);
  };
  useEffect(() => {
    singleCharacter();
  }, [id]);

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
