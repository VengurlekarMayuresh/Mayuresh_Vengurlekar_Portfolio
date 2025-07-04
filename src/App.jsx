import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import VantaFog from './components/background'
import Downlaod from './components/button'
import Main from './components/Main'
import VantaClouds from './components/background'
import AboutMe from './components/About'
import SkillsSlider from './components/skills-slider'



function App() {


  return (
  
  <>
<VantaClouds/>
  <Header/>

<section id="home">
        <Main/>
      </section>

 <section>
   {/* <About/> */}
    <section id="about">
        <AboutMe />
      </section>

   <SkillsSlider/>

 </section>
 
  </>
  )
}

export default App
