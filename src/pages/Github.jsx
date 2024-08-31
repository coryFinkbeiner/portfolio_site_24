import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Github() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateRows: '1fr 20fr',
        backgroundColor: 'black',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '.3fr 1fr 1fr 1fr .3fr',
          backgroundColor: 'black',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
          }}
        > icon
        </div>


        <Link to='/github/project1'
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              backgroundColor: 'black',
              height: '100%'
            }}
          >Project1
          </div>
        </Link>
        <Link to='/github/project2'
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              backgroundColor: 'blue',
              height: '100%'
            }}
          >Project2
          </div>
        </Link>
        <Link to='/github/project3'
          style={{ textDecoration: 'none' }}
        >
          <div
            style={{
              backgroundColor: 'red',
              height: '100%'
            }}
          >project3
          </div>
        </Link>




        <div
          style={{
            backgroundColor: 'white',
          }}
        > link

        </div>
      </div>

      <Outlet />



    </div>
  )
}

export default Github