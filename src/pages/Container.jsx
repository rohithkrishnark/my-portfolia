import { Box } from '@mui/joy'
import React from 'react'
import About from './About'
import Home from './Home'
import Header from '../layouts/Header';
import Skill from './Skill';

const Container = () => {
  return (
    <Box sx={{ width: "100%", minHeight: '100vh' }}>
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skill />
      </section>
    </Box>
  )
}

export default Container
