import React from 'react'
import './styles/Footer.css'

// LOGOS HREF
import fb from '../imgs/facebook.png'
import mg from '../imgs/messenger.png'
import wa from '../imgs/whatsapp.png'

const Footer = props => {
    return(
        <footer className="container_Footer">
            <img src={fb}></img>
            <img src={mg}></img>
            <img src={wa}></img>
        </footer>
    )
}
export default Footer