import React from "react";
import { Link } from 'react-router-dom'
import "./styles/NavFirst.css";

const NavFirst = props => {
  const flexBox = {
    display: 'flex',
    justifyContent: props.justifyContent,
    alignItems: props.alignItems
  }
  return (
    <nav>
      <ul className="nav_Header ul_nav_Header" style={flexBox}>
        <li>
          <Link to={"/home"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/about-us"}>Quiénes Somos</Link>
        </li>
        <li>
          <Link to={"/preaching"}>Prédicas</Link>
        </li>
        <li>
          <Link to={"/events"}>Eventos</Link>
        </li>
        <li
          style={{ fontWeight: "bold" }}
          onClick={props.handleClick}
        >
          Ministerios
        </li>
        <li>Escuela de Música</li>
      </ul>
    </nav>
  );
};
export default NavFirst;
