import React from 'react'
import Nav from './Nav.js'
import './HomeScreen.css'
import Banner from './Banner.js'
function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner />
        <Row />
    
    </div>
  )
}

export default HomeScreen