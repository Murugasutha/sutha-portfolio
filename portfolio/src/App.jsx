import React, { useEffect } from 'react'
import './App.css'
import AOS from 'aos'
import Intro from './components/Intro'
import Experience from './components/Experience'
import Projects from './components/Project'
import Footer from './components/Footer'
import About from './components/About'
import Skill from './components/Skill'
import Resume from './Resume'
import ScrollToTopButton from './components/ScrollToTopButton'
import FloatingActionButton from './FloatingActionButton'


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
    <main>    
      <Intro/>
      <About/>
      <Experience/>
      <Resume/>
      <Skill/>
      <Projects/>
      <Footer/>
      <ScrollToTopButton/>
      <FloatingActionButton/>
    </main>
    </>
  )
}

export default App
