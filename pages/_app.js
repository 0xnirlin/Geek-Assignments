import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <React.Fragment>
    <Nav></Nav>

    <Component {...pageProps} />
    <Footer></Footer>
    </React.Fragment>
  )
}

export default MyApp
