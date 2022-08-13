import React from "react";
import PropTypes from "prop-types";

function Peoples_details_card({
  peopleData
}) {
  return (
    <div className="peopleDetail">
      <h3>{peopleData.name}</h3>
      <p>Height: {peopleData.height}</p>
      <p>Mass: {peopleData.mass}</p>
      <p>Hair color: {peopleData.hair_color}</p>
      <p>Skin color: {peopleData.skin_color}</p>
      <p>Eye color: {peopleData.eye_color}</p>
      <p>Birth year: {peopleData.birth_year}</p>
      <p>Gender: {peopleData.gender}</p>
      <p>Homeworld:</p>
      <ul>
        <li>{peopleData.homeworld}</li>
      </ul>
      <p>Films:</p>
      <ul>
        {peopleData.films.map((film) => {
          return <li key={film}>{film}</li>;
        })}
      </ul>
      <p>Species:</p>
      <ul>
        {peopleData.species.map((specie) => {
          return <li key={specie}>{specie}</li>;
        })}
      </ul>
      <p>Vehicles:</p>
      <ul>
        {peopleData.vehicles.map((vehicle) => {
          return <li key={vehicle}>{vehicle}</li>;
        })}
      </ul>
      <p>Starship:</p>
      <ul>
        {peopleData.starships.map((starship) => {
          return <li key={starship}>{starship}</li>;
        })}
      </ul>
    </div>
  );
}

Peoples_details_card.propTypes = {
  peopleData: PropTypes.object.isRequired
};

export default Peoples_details_card;
