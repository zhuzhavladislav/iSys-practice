import React, { useState, useCallback } from "react";
import axios from "axios";
import Peoples_card from "../component/peoples_card";
import "./Peoples.css"

class Peoples extends React.Component {
  state = {
    isLoading: true,
    peoples: [],
  };

  getPeople = async () => {
    const {
      data: { results },
    } = await axios.get("https://swapi.dev/api/people/");
    this.setState({ peoples: results, isLoading: false });
  };

  componentDidMount() {
    this.getPeople();
  }

  render() {
    const { isLoading, peoples } = this.state;
    return (
      <div>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Загрузка...</span>
          </div>
          ) : ( <div className="peoples">
            {peoples.map((people) => (
                <Peoples_card
                  key={people.url}
                  name={people.name}
                  gender={people.gender}
                  height={people.height}
                  mass={people.mass}
                  birth_year={people.birth_year}
                  url={people.url}
                  
                />
          ))}
          </div>
        )}
      </div>
    );
  }
}

export default Peoples;
