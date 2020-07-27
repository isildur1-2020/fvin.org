// Librería React - BrowserRouter
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Route path="/home" component={Home}/>
    </BrowserRouter>
  );
}
export default App
