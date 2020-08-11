// React - BrowserRouter
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Preaching from './pages/Preaching'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/about-us" component={AboutUs}/>
      <Route exact path="/preaching" component={Preaching}/>
    </BrowserRouter>
  );
}
export default App
