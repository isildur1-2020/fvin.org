// REACT
import React from "react";
//STYLES CSS
import "./styles/Poster.css";
import "./mediaQuery/Poster.css"
// IMAGENES POSTER
import img_Poster_1 from "../imgs/poster/img_Poster_1.jpg";
import img_Poster_2 from "../imgs/poster/img_Poster_2.jpg";
import img_Poster_3 from "../imgs/poster/img_Poster_3.jpg";

const Poster = () => {
  const textAlt = "Imagen informativa Fuente de Vida Internacional"
  return(
    <section className="container_Poster">
        <img className="img_Poster_1 img_Poster" src={img_Poster_1} alt={textAlt} />
        <img className="img_Poster_2 img_Poster" src={img_Poster_2} alt={textAlt} />
        <img className="img_Poster_3 img_Poster" src={img_Poster_3} alt={textAlt} />
    </section>
  )
}
export default Poster

