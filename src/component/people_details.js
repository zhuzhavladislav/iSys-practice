import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import People_details_card from "../component/people_details_card";
import "./People_details.css";

function People_details() {
  const [people_details, setDetail] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const location = useLocation();
  let url = null;
  var id = null;

  if (location.state == undefined) {
  } else {
    url = location.state.url;
    id = url.match(/\d+/g)
  }

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDetail(data);
        setLoading(false);
      });
  }, []);

  
  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Загрузка...</span>
        </div>
      ) : (
        <div className="onePeople">
        <People_details_card
          id={id[0]}
          key={id[0]}
          name={people_details.name}
          height={people_details.height}
          mass={people_details.mass}
          hair_color={people_details.hair_color}
          skin_color={people_details.skin_color}
          eye_color={people_details.eye_color}
          birth_year={people_details.birth_year}
          gender={people_details.gender}
          homeworld={people_details.homeworld}
          films={people_details.films}
          species={people_details.species}
          vehicles={people_details.vehicles}
          starships={people_details.starships}
        />
        </div>
      )}
    </div>
  );
}

export default People_details;
