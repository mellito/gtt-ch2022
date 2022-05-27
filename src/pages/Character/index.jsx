import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

function Character() {
  const { id } = useParams();
  const characters = useSelector((state) => state.characterData);
  if (characters.results) {
    const filterCharacter = characters.results.filter(
      (character) => character.id === Number(id),
    );

    console.log(filterCharacter);
  }

  return (
    <Loading>
      <div>index</div>
    </Loading>
  );
}

export default Character;
