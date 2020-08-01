// React - Libraries
import React, { Component } from 'react'
// Styles CSS
import './styles/AboutUs.css'
// Components
import Header from '../components/Header'
import Footer from '../components/Footer'
// Images
import logotipo from '../imgs/logo.jpg'

export default class AboutUs extends Component {
    render() {
        return(
            <div className="container_AboutUs">
                <Header logotipo={logotipo}/>
                <div className="square_AboutUs square1"></div>
                <div className="square_AboutUs square2"></div>
                <div className="square_AboutUs square3"></div>
                <div className="mision"></div>
                <div className="vision"></div>
                <Footer />
            </div>
        )
    }
}