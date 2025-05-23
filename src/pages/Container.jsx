import { Box } from '@mui/joy'
import React from 'react'
import About from './About'
import Home from './Home'
import Skill from './Skill';
import Contact from './Contact';
import Projects from './Projects';
import UpComponent from '../Components/UpComponent';

const Container = () => {
  return (
    <Box sx={{ width: "100%", minHeight: '100vh' }}>
      <UpComponent/>
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skill />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </Box>
  )
}

export default Container
