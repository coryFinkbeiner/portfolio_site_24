import { useState } from 'react'
import React from 'react'
import './App.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import Layout from './pages/Layout'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Github from './pages/Github'

function App() {
  return (
    <RouterProvider
      router={
        createBrowserRouter(createRoutesFromElements(

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/github" element={<Github />}
            >
            </Route>
          </Route>

        ))
      }
    />
  )
}
export default App
