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
                <section className="section_Principal_AboutUs"></section>
                <aside className="mision_AboutUs square_AboutUs"></aside>
                <aside className="vision_AboutUs square_AboutUs"></aside>
                <article className="article_top_AboutUs article_AboutUs"></article>
                <article className="article_bottom_AboutUs article_AboutUs"></article>
                <Footer />
            </div>
        )
    }
}