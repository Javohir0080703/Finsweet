import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Features from './pages/Features'
import Pricing from './components/Pricing'
import Faq from './pages/Faq'
import FaqDetail from './pages/FaqDetail'
import Blog from './pages/BlogAbout'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route  element={<MainLayout/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/faq" element={<Faq/>} />
        <Route path="/users/:id" element={<FaqDetail/>} />
        <Route path="/about/:id" element={<BlogDetail/>} />
        <Route path="/Blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Route>
    )
   )
   
  return (
    <RouterProvider router={router} />
  )
}

export default App