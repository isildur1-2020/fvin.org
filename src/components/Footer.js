// REACT - ROUTER
import React from "react";
import { Link } from "react-router-dom";
// STYLES
import "./styles/Footer.css";
import "./mediaQuery/Footer.css"
// ICONS - SOCIAL NETWORKS
import fb from "../imgs/footer/facebook.png";
import mg from "../imgs/footer/messenger.png";
import maps from "../imgs/footer/maps.png";

const Footer = () => {
  return (
    <footer className="container_Footer">
      <aside className="container_services_Footer title_container_Footer">
        <div className="services_days_Footer">
          <section className="section_hour_services_Footer">
            <h6>Domingo</h6>
            <ul className="ul_Footer">
              <li>06:30 am - 09:00 am</li>
              <li>09:00 am - 11:30 am</li>
              <li>11:30 am - 02:30 pm</li>
            </ul>
          </section>
          <section className="section_hour_services_Footer">
            <h6>Miércoles</h6>
            <ul className="ul_Footer">
              <li>07:00 pm - 09:00 pm</li>
            </ul>
          </section>
          <section className="section_hour_services_Footer">
            <h6>Sábado-Ayuno</h6>
            <ul className="ul_Footer">
              <li>09:00 am - 11:00 am</li>
            </ul>
          </section>
        </div>
      </aside>
      <section className="section_links_Footer title_container_Footer">
        <h4>Regístrate</h4>
        <ul className="ul_Footer">
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
      <aside className="container_socialNetworks_Footer title_container_Footer">
        <h4>Contáctanos</h4>
        <ul className="ul_Footer">
          <li>Cr 93 D # 49 C 80 sur</li>
          <li>iglesiafvin@fvin.com</li>
          <li>310-857-58-99</li>
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
    </footer>
  );
};
export default Footer;
