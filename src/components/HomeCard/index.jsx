import React from "react";
import PropTypes from "prop-types";
import "./homeCard.css";

function HomeCard({ character }) {
  const { image, name } = character;

  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}

HomeCard.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
export default HomeCard;
