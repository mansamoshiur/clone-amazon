import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ProductsData } from './api/api';

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/Home';
import Signin from './pages/Signin';

const Layout = ()=>{
  return (<div>
      <Header />
      <Outlet />
      <Footer />
  </div>
)}

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index  element={<Home />} loader={ProductsData}></Route>
      <Route path='/signin' element={<Signin />}></Route>
    </Route>
  ))
  return (
    <div className='font-bodyFont'> 
    <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App