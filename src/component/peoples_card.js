import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Peoples_card({ name, gender, height, mass, birth_year, url }) {
  return (
    <div className="people">
      <h3>{name}</h3>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Birth year: {birth_year}</p>
      <Link
        to={{
          pathname: "/people-details",
          state: {
            url,
          },
        }}
      >
        <button className="main-button">More</button>
      </Link>
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
