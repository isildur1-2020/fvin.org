// React - BrowserRouter
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
//Styles CSS - Generales
import "./App.css";

// Componentes
import Layout     from "./pages/Layout";

import Home       from "./pages/Home";
import AboutUs    from "./pages/AboutUs";
import Events     from "./pages/Events";
import Preaching  from "./pages/Preaching";
import SignUp     from "./pages/SignUp";
import SignIn     from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/home"       component={Home}     />
        <Route       path="/about-us"   component={AboutUs}  />
        <Route       path="/preaching"  component={Preaching}/>
        <Route       path="/sign-up"    component={SignUp}   />
        <Route       path="/login"      component={SignIn}   />
        <Route       path="/events"     component={Events}   />
      </Layout>
    </BrowserRouter>
  );
}
export default App;
