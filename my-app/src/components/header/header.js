import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  return (
    <div className="header d-flex">
      <h2>
        <Link to="/">StarDB</Link>
      </h2>
      <ul className="d-flex">
        <li>
          <Link to="/peoples">People</Link>
        </li>
        <li>
          <Link to="/planets">Planets</Link>
        </li>
        <li>
          <Link to="/starships">Starships</Link>
        </li>
      </ul>
      );
    </div>
  );
};

export default Header;
