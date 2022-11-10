import React from 'react'
import Feature from './Feature/Feature'
import Header from './Header/Header'
import Services from './Services/Services'
import { Team } from './Teams/Teams'

const Home = () => {
  return (
    <div>
      <Header/>
      <Services/>
      <Feature/>
      <Team/>
    </div>
  )
}

export default Home