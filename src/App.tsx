import firebaseConfig from './firebaseConfig';

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
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'

function App() {

  return (
    <RouterProvider
      router={
        createBrowserRouter(createRoutesFromElements(

          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />

            <Route path="github" element={<Github />}>
              <Route path="project1" element={<Project1 />}/>
              <Route path="project2" element={<Project2 />}/>
              <Route path="project3" element={<Project3 />}/>
            </Route>

          </Route>

        ))
      }
    />
  )
}
export default App
