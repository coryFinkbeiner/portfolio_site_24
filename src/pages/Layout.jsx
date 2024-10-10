import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'

function Layout() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '93vh',
        width: '100vw',
        display: 'grid',
        gridTemplateColumns: '1fr 5.5fr',
        overflow: 'hidden' // Prevent overall container from scrolling
      }}
    >
      <Sidebar />

      <div style={{
        overflow: 'auto', // Enable scrolling for Outlet content
        height: '100%' // Ensure the Outlet container takes full height
      }}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout