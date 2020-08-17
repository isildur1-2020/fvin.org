// React
import React from "react";
// Styles CSS
import "./styles/Home.css";
// Components
import Poster from "../components/Poster";
import Count from "../components/Count";

const Home = (props) => {
  return (
    <section className="container_Home">
      <Poster />
      <Count />
    </section>
  );
};
export default Home;
