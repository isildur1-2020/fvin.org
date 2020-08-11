import React from "react";
import { Link } from "react-router-dom";
import './styles/NavFirst.css'

const NavSecond = (props) => {
  const flexBox = {
    display: "flex",
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
  };

  return (
    <nav>
      <ul className="nav_Header ul_nav_Header" style={flexBox}>
        <li style={{ fontWeight: "bold" }} onClick={props.handleClick}>
          Volver...
        </li>
        <li>
          <Link to={"/home"}>Alabanza</Link>
        </li>
        <li>
          <Link to={"/home"}>Danzas</Link>
        </li>
        <li>
          <Link to={"/home"}>Grupos Familiares</Link>
        </li>
        <li>
          <Link to={"/home"}>Escuela Dominical</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavSecond;
