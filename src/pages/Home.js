import React  from "react";
import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div className="home">
        <Link to="/peoples">
          <button>Peoples</button>
        </Link>
        <Link to="/planets">
          <button>Planets</button>
        </Link>
        <Link to="/films">
          <button>Films</button>
        </Link>
        <Link to="/species">
          <button>Species</button>
        </Link>
        <Link to="/vehicles">
          <button>Vehicles</button>
        </Link>
        <Link to="/starships">
          <button>Starships</button>
        </Link>
      </div>
    );
  }
}

export default Main;
