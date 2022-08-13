import React, { useState, useCallback } from "react";
import axios from "axios";
import Peoples_card from "../component/peoples_card";
import "./Peoples.css";

class Peoples extends React.Component {
  state = {
    isLoading: true,
    peoples: [],
  };

  getPeople = async () => {
    var count_records = 1;
    for (var i = 1; i < count_records/10+1; i++) {
      const {
        data: { results },
        data: {count}
      } = await axios.get("https://swapi.dev/api/people/?page=" + i);
      count_records = count;
      this.setState({ peoples: [...this.state.peoples, ...results]});
      // this.setState({ isLoading: false });
    }
    this.setState({ isLoading: false });
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
        ) : (
          <div className="peoples">
            {peoples.map((people) => (
              <Peoples_card
                key={people.url}
                peoplesData = {people}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Peoples;
