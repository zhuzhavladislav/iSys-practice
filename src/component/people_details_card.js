import React from "react";
import PropTypes from "prop-types";

function Peoples_card({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  homeworld,
  films,
  species,
  vehicles,
  starships,
}) {
  return (
    <div className="peopleDetail">
      <h3>{name}</h3>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Hair_color: {hair_color}</p>
      <p>Skin_color: {skin_color}</p>
      <p>Eye_color: {eye_color}</p>
      <p>Birth_year: {birth_year}</p>
      <p>Gender: {gender}</p>
      <p>Homeworld:</p>
      <ul>
        <li>{homeworld}</li>
      </ul>
      <p>Films:</p>
      <ul>
        {films.map((film) => {
          return <li>{film}</li>;
        })}
      </ul>
      <p>Species:</p>
      <ul>
        {species.map((specie) => {
          return <li>{specie}</li>;
        })}
      </ul>
      <p>Vehicles:</p>
      <ul>
        {vehicles.map((vehicle) => {
          return <li>{vehicle}</li>;
        })}
      </ul>
      <p>Starship:</p>
      <ul>
        {starships.map((starship) => {
          return <li>{starship}</li>;
        })}
      </ul>
    </div>
  );
}

Peoples_card.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  mass: PropTypes.string.isRequired,
  birth_year: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Peoples_card;
