import React from 'react'
import Navbar  from '../components/Navbar'
import {Hero} from '../components/Hero'
import  Footer  from '../components/Footer'


export const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home;
