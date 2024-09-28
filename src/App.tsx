import React, { useState, useEffect } from 'react'

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



import { storage } from './firebaseConfig';

import { ref, getDownloadURL } from 'firebase/storage';

function App() {

  useEffect(() => {

    const storageRef = ref(storage, 'test/4_13 Resume .pdf');
    console.log({storageRef})

    getDownloadURL(storageRef)
      .then((url) => {
        // setImageUrl(url);
        console.log(url)
      })
      .catch((error) => {
        console.error('Error getting download URL:', error);
      });

  }, []);

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
