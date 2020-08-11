// React
import React, { Component } from "react";
// Styles - Home
import "./styles/Home.css";
// Components
import Layout from "../components/Layout";
import Poster from "../components/Poster";
import Count from "../components/Count";

export default class Home extends Component {
  render() {
    return (
      <Layout className="container_Home" >
        <Poster />
        <Count />
      </Layout>
    );
  }
}
