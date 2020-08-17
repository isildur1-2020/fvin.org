//REACT - ROUTER
import React, { Component } from "react";
import { Link } from "react-router-dom";
//STYLES - HEADER
import "./styles/Header.css";
import "./mediaQuery/Header.css";
// COMPONENTS
import NavFirst from "./Header/NavFirst";
import NavSecond from "./Header/NavSecond";
// LOGOTIPO
import logotipo from "../imgs/logo.jpg";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMinistry: false,
    };
  }
  render() {
    return (
      <header className="container_Header">
        {/* CONTENEDOR IMAGENES */}
        <div className="img_container_Header">
          <img
            className="img_logo_Header"
            src={logotipo}
            alt="Logotipo - Iglesia Cristiana Fuente de Vida Internacional"
          />
        </div>

        <menu className="menu_main_Header">
          {/* CONTENEDOR MENU */}
          {this.containerSelect()}
        </menu>

        <section className="login_Header">
          <ul className="ul_nav_Header ul_login_Header">
            <li>
              <Link to={"/login"}>Iniciar Sesión</Link>
            </li>
            <li>
              <Link to={"/sign-up"}>Regístrate</Link>
            </li>
          </ul>
        </section>

        {/* NAV RESPONSIVE HEADER */}
        <div className="hamburguer_nav_Header" onClick={() => {}} >
          <div className="line_nav_responsive_Header"></div>
          <div className="line_nav_responsive_Header"></div>
          <div className="line_nav_responsive_Header"></div>
        </div>
      </header>
    );
  }
  containerSelect() {
    if (!this.state.isMinistry) {
      return (
        <NavFirst 
          justifyContent='space-evenly'
          alignItems='flex-end'
          handleClick={() => this.setState({ isMinistry: true })} />
      );
    }
    return (
      <NavSecond 
        justifyContent='space-evenly'
        alignItems='flex-end'
        handleClick={() => this.setState({ isMinistry: false })} />
    );
  }
}
