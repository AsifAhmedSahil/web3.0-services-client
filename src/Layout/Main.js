import React from 'react'

import Footer from "../Pages/Shared/Footer/Footer"
import { Outlet } from 'react-router-dom'
import { Nav } from '../Pages/Shared/Nav/Nav'

const Main = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main