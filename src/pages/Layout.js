// React
import React, { Fragment } from "react";
// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
