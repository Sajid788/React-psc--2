import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Product from '../Pages/Product'
import Contact from '../Pages/Contact'
import NotFoundPage from '../Pages/NotFoundPage'
import About from '../Pages/About'
import SingleProductPage from '../Pages/SingleProductPage'

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/product' element = {<Product/>}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
        <Route path='/*' element = {<NotFoundPage/>}></Route>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/products/:id' element = {<SingleProductPage/>}></Route>
      </Routes>
    </div>
  )
}

export default AllRouter
