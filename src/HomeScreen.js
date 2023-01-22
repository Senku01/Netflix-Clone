import React from 'react'
import Nav from './Nav.js'
import './HomeScreen.css'
import Banner from './Banner.js'
import requests from './Requests.js'
import Row from './Row'
function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Banner />

        <Row
          title ='Netflix Original'
          fetchUrl = {requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romance Movie' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Doocumentaries' fetchUrl={requests.fetchDocumentaries}/>
    
    </div>
  )
}

export default HomeScreen