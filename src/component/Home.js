import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import './Home.scss'

function Home() {
  return (
    <div className='Home'>
        <Navbar/>
        <Main/> 
    </div>
  )
}

export default Home
