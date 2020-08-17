// React
import React from "react";
// Styles CSS
import "./styles/Live.css";
// Icons Live
import facebook from "../../imgs/Live/facebook.png";
import youtube from "../../imgs/Live/youtube.png";

const URL_FB = "https://www.facebook.com/FuentedevidainternacionalAD/live/";
const URL_YT = "https://www.facebook.com/FuentedevidainternacionalAD/live/";

const Live = (props) => {
  return (
    <div className="container_Live">
      <img
        onClick={() => {
          window.open(URL_FB);
        }}
        src={facebook}
        alt="Facebook - En Vivo"
      />
      <h1>¡ Estamos en vivo !</h1>
      <img
        onClick={() => {
          window.open(URL_YT);
        }}
        src={youtube}
        alt="Youtube - En Vivo"
      />
    </div>
  );
};
export default Live;
