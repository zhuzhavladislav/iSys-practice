import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Peoples_card({peoplesData}) {
  var id = peoplesData.url.match(/\d+/g)
  var url = peoplesData.url;
  return (
    <div className="people">
      <h3>{peoplesData.name}</h3>
      <p>Gender: {peoplesData.gender}</p>
      <p>Height: {peoplesData.height}</p>
      <p>Mass: {peoplesData.mass}</p>
      <p>Birth year: {peoplesData.birth_year}</p>
      <Link to={`/people/${id[0]}`} state={{url}}>
        <button className="main-button">More</button>
      </Link>
    </div>
  );
}

Peoples_card.propTypes = {
  peoplesData: PropTypes.object.isRequired,
};

export default Peoples_card;
