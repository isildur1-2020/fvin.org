//REACT
import React, { Component } from "react";
import { Link } from 'react-router-dom'
//STYLES
import "./styles/Header.css";

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
            src={this.props.logotipo}
            alt="Logotipo"
          />
        </div>
        {/* CONTENEDOR MENU */}
        {this.containerSelect()}
      </header>
    );
  }
  containerSelect() {
    if (!this.state.isMinistry) {
      return (
        <nav>
          <ul className="nav_Header">
            <li className="ministry_Header" onClick={() => this.setState({ isMinistry: true })}>
              Ministerios
            </li>
            <li>Eventos</li>
            <li>Prédicas</li>
            <li><Link to={'/home/about-us'}>Quienes Somos</Link></li>
            <li>Escuela de Música</li>
          </ul>
        </nav>
      );
    }
    return (
      <nav>
        <ul className="nav_Header">
          <li className="ministry_Header" onClick={() => this.setState({ isMinistry: false })}>
            Menú Principal
          </li>
          <li>Alabanza</li>
          <li>Grupos Familiares</li>
          <li>Escuela Dominical</li>
        </ul>
      </nav>
    );
  }
}
