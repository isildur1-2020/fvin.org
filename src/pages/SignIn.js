// React
import React from "react";
// Styles CSS
import "./styles/FormMain.css";

const SignIn = (props) => {
  return (
    <section className="container_Form_main">
      <form className="form_main">
        <h1>Inica Sesión</h1>
        <input type="email" placeholder="Correo Electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button>Enviar</button>
      </form>
    </section>
  );
};
export default SignIn;
