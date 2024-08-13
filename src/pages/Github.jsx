import React from 'react'
import { Outlet } from 'react-router-dom'

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
        <div
          style={{
            backgroundColor: 'red',
          }}
        > project 1
        </div>
        <div
          style={{
            backgroundColor: 'blue',
          }}
        > project 2
        </div>
        <div
          style={{
            backgroundColor: 'yellow',
          }}
        > project 3
        </div>
        <div
          style={{
            backgroundColor: 'white',
          }}
        >

        </div>
      </div>

      <div
        style={{
          // display: 'grid',
          // gridTemplateColumns: '1fr 1.3fr 1.3fr 1.3fr',
          backgroundColor: 'green',
        }}
      >

      </div>




    </div>
  )
}

export default Github