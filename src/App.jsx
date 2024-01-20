import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Pricing from './components/Pricing'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<MainLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/features" element={<Features/>} />
      </Route>
    )
   )
   
  return (
    <RouterProvider router={router} />
  )
}

export default App