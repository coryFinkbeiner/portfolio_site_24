import React from 'react'
import { Link } from "react-router-dom"


function Sidebar() {
  return (
    <div
      style={{
        backgroundColor: 'yellow',
        display: 'grid',
        gridTemplateRows: '1fr  1.4fr',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          display: 'grid',
          gridTemplateRows: '1fr 1fr 1fr 1fr',
        }}

      >
        <Link to='/'
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              backgroundColor: 'orange',
              height: '100%'
            }}
          >Home
          </div>
        </Link>
        <Link to='/resume'
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              backgroundColor: 'black',
              height: '100%'
            }}
          >Resume
          </div>
        </Link>
        <Link to='/contact'
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              backgroundColor: 'blue',
              height: '100%'
            }}
          >Contact
          </div>
        </Link>
        <Link to='/github'
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              backgroundColor: 'white',
              height: '100%'
            }}
          >Github
          </div>
        </Link>

      </div>
      <div
        style={{
          backgroundColor: 'blue',
        }}
      >

      </div>
    </div>
  )
}

export default Sidebar