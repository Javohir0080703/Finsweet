import React from 'react'
import HomeHero from '../components/HomeHero'
import HowWork from '../components/HowWork'
import OurWork from '../components/OurWork'
import Features from '../components/Features'
import Clients from '../components/Clients'
import HomeAccordion from '../components/HomeAccordion'
import Cta from '../components/Cta'
import Accardion from '../components/Accardion'

const Home = () => {
  return (
    <>
     <HomeHero/>
     <HowWork/>
     <OurWork/>
     <Features/>
     <Clients/>
     <Accardion/>
     <HomeAccordion/>
     <Cta/>
    </>
  )
}

export default Home