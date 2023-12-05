import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
   <div className="App">
      <Outlet />
   </div>
  )
}

export default AppLayout