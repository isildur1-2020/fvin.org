// REACT
import React from "react";
import "./styles/Footer.css";
// REACT ROUTER
import { Link } from "react-router-dom";
// ICONS - SOCIAL NETWORKS
import fb from "../imgs/facebook.png";
import mg from "../imgs/messenger.png";
import maps from "../imgs/maps.png";

const Footer = () => {
  return (
    <footer className="container_Footer">
      <aside className="container_socialNetworks_Footer">
        <h4>Contáctanos</h4>
        <ul>
          <li>Cr 93 D # 49 C 80 sur</li>
          <li>iglesiafvin@fvin.com</li>
          <li>310 857 58 99</li>
        </ul>
        <div className="icons_socialNetworks_Footer">
          <button
            className="button_socialNetworks_Footer"
            onClick={() => {
              window.open(
                "https://www.facebook.com/FuentedevidainternacionalAD/"
              );
            }}
          >
            <img src={fb} alt="Facebook" />
          </button>
          <button className="button_socialNetworks_Footer">
            <img src={mg} alt="Messeger" />
          </button>
          <button className="button_socialNetworks_Footer">
            <Link to="/maps">
              <img src={maps} alt="Google-Maps" />
            </Link>
          </button>
        </div>
      </aside>
      <section className="section_links_Footer">
        <h4 className="title_links_Footer">Eres nuevo ?</h4>
        <ul>
          <li>
            <Link to={"/home"}>Soy nuevo</Link>
          </li>
          <li>
            <Link to={"/home"}>Quiénes Somos</Link>
          </li>
          <li>
            <Link to={"/home"}>Contáctanos</Link>
          </li>
          <li>
            <Link to={"/home"}>Inscríbete</Link>
          </li>
        </ul>
      </section>
      <aside className="container_services_Footer">
        <h4>Servicios</h4>
        <div className="services_days_Footer">
          <section className="section_hour_services_Footer">
            <h6 className="title_services_Footer">Domingo</h6>
            <ul className="ul_services_Footer">
              <li>06:30 am - 09:00 am</li>
              <li>09:00 am - 11:30 am</li>
              <li>11:30 am - 02:30 pm</li>
            </ul>
          </section>
          <section className="section_hour_services_Footer">
            <h6 className="title_services_Footer">Miércoles</h6>
            <ul className="ul_services_Footer">
              <li>07:00 pm - 09:00 pm</li>
            </ul>
          </section>
          <section className="section_hour_services_Footer">
            <h6 className="title_services_Footer">Sábado</h6>
            <ul className="ul_services_Footer">
              <li>09:00 am - 11:00 am</li>
            </ul>
          </section>
        </div>
      </aside>
    </footer>
  );
};
export default Footer;
