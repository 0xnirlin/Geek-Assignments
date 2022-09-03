import React from 'react'
import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <React.Fragment>
    <Nav></Nav>

    <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
