import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function AppLayout() {
    return (
      <div className='flex min-h-screen'>
        {/* Sidebar */}
        <div className='w-64 text-white'>
          <Sidebar />
        </div>
  
        {/* Main content / Outlet */}
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
    );
  }  

export default AppLayout
