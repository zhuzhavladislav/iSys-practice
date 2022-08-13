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
          peopleData={people_details}
        />
        </div>
      )}
    </div>
  );
}

export default People_details;
