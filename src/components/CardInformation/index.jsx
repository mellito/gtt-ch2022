/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import "./cardinformation.css";

function CardInformation({ character }) {
  const {
    name,
    status,
    species,
    gender,
    origin: { name: nameOrigin },
    location: { name: nameLocation },
    image,
  } = character;

  return (
    <div className="card-information-container">
      <img src={image} alt={name} />
      <section className="container_data">
        <p>Name: {name}</p>
        <p>State: {status}</p>
        <p>Spaecies:{species}</p>
        <p>Gender:{gender}</p>
        <p>Origin:{nameOrigin}</p>
        <p>Location: {nameLocation}</p>
      </section>
    </div>
  );
}

CardInformation.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
    status: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.shape({
      nameOrigin: PropTypes.string,
    }),
    location: PropTypes.shape({
      nameLocation: PropTypes.string,
    }),
  }).isRequired,
};

export default CardInformation;
