import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/menu'

export default function DetailLayout() {
  return (
    <div className='homepage-container'>
      <div className='moviedetail-container'>
            <Menu />
            <div  className='test' >
            <Outlet />
            </div>
            
        
        </div>  
    </div>
  )
}
