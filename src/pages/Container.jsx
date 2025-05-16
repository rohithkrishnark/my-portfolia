import { Box } from '@mui/joy'
import React from 'react'
import About from './About'
import Home from './Home'

const Container = () => {
  return (
    <Box sx={{width:"100%",minHeight:'100vh'}}>
      <Home />
      <About />
    </Box>
  )
}

export default Container
