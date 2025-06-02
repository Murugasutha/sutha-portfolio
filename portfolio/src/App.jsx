import React, { useEffect } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Intro from './components/Intro'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Project'
import Footer from './components/Footer'
import AOS from 'aos'
import About from './components/About'


function App() {

  useEffect(() =>{
        AOS.init({
            duration: 1000,
            once: false,
            offset: 100,
        });
    },[])

  return (
    <>
    
      <Intro/>
      <About/>
      <Education/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
