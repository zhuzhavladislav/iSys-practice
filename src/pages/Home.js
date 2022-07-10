import React  from "react";
import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div className="home">
        <Link to="/people">
          <button>Peoples</button>
        </Link>
        <Link to="/planet">
          <button>Planets</button>
        </Link>
        <Link to="/film">
          <button>Films</button>
        </Link>
        <Link to="/specie">
          <button>Species</button>
        </Link>
        <Link to="/vehicle">
          <button>Vehicles</button>
        </Link>
        <Link to="/starship">
          <button>Starships</button>
        </Link>
      </div>
    );
  }
}

export default Main;
