import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {

  
  return (
    <Fragment >
      <Header/>
      <main >
        <Outlet />
      </main>
      <Footer/>
    </Fragment>
  )
}

export default MainLayout