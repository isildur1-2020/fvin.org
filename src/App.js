// Librería React - BrowserRouter
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/home/about-us" component={AboutUs}/>
    </BrowserRouter>
  );
}
export default App
