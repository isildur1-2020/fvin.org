// React
import React, { Fragment } from 'react'
// Components
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
    return(
        <Fragment>
            <Header/>
            <section className={props.className}>
                {props.children}
            </section>
            <Footer/>
        </Fragment>
    )
}
export default Layout