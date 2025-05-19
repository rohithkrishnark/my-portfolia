import { Box } from '@mui/joy'
import React from 'react'
import About from './About'
import Home from './Home'
import Header from '../layouts/Header';
import Skill from './Skill';

const Container = () => {
  return (
    <Box sx={{width:"100%",minHeight:'100vh'}}>
         {/* <Header /> */}
      <Home />
      <About />
      <Skill/>
    </Box>
  )
}

export default Container
