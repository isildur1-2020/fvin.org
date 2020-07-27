// REACT
import React, { Component } from "react";
//STYLES CSS
import "./styles/Poster.css";
// PARTICLES JS
import Particles from "react-particles-js";
import configParticles from "../config.json";
// IMAGENES POSTER
import morado from "../imgs/poster/morado.jpg";
import ring from "../imgs/poster/ring.jpg";
import sky from "../imgs/poster/sky.jpg";
import water from "../imgs/poster/water.jpg";

export default class Poster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexPoster: 0
    };
    this.imgPoster = [morado, ring, sky, water]
  }
  componentDidMount() {
    this.intervalPoster = setInterval(this.setImgPoster, 6000)
  }
  componentWillUnmount () {
    clearInterval(this.intervalPoster)
  }
  render() {
    return (
      <div className="container_Poster">
        <Particles width="100vw" height='100vh' params={configParticles} />
        <img className="poster_imgs" src={this.imgPoster[this.state.indexPoster]} alt="Imágenes - Info" />
      </div>
    );
  }
  setImgPoster = () => {
    let currentIndex = this.state.indexPoster
    if(currentIndex < 3) {
      currentIndex++
      this.setState({indexPoster: currentIndex})
      return
    }
    this.setState({indexPoster: 0})
  }
}

