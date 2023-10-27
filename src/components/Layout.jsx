import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div className='py-4 px-8 flex flex-col min-h-screen'>
        <Header />
        <Outlet />
        <ToastContainer  transition={Zoom} />
    </div>
  )
}

export default Layout