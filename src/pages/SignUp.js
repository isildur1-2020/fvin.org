// React - Libraries
import React from "react";
// Styles CSS
import "./styles/FormMain.css";

const SignUp = (props) => {
  return (
    <section className="container_Form_main">
      <form className="form_main" action="/signUp" method="POST">
        <h1>Regístrate</h1>
        <input type="text"      name="name"       placeholder="Nombres Completos"/>
        <input type="text"      name="lastName"   placeholder="Apellidos Completos"/>
        <input type="email"     name="email"      placeholder="Correo Electrónico"/>
        <input type="text"      name="id"         placeholder="Identificación"/>
        <input type="text"      name="birth"      placeholder="Fecha de Nacimiento"/>
        <imput type="password"  name="password"   placeholder="Contraseña"/>
        <button
          onClick={(ev) => {
            ev.preventDefault();
          }}
        >
          Enviar
        </button>
      </form>
    </section>
  );
};
export default SignUp;
