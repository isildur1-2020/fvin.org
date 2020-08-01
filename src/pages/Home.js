// React
import React, { Component } from "react";
// Styles
import "./styles/Home.css";
// Components
import Header from "../components/Header";
import Poster from "../components/Poster";
import Footer from "../components/Footer";
import Count from "../components/Count";
// Logotipo
import logotipo from "../imgs/logo.jpg";

export default class App extends Component {
  render() {
    return (
      <div className="container_Home">
        <Header logotipo={logotipo} />
        <Poster />
        <Count />
        <Footer />
      </div>
    );
  }
}
