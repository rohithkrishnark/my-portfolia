import { Box } from '@mui/joy'
import React from 'react'
import Header from '../layouts/Header'
import ParticlesComponent from '../Components/Paticle'
import '../../src/App.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import mypic from '../assets/final.png'
import OwnerDetails from '../Components/OwnerDetails'


const icons = [
  {
    name: "Linkedin", icon:
      <LinkedInIcon
        sx={{
          fontSize:23,
          color: 'white',
          cursor: 'pointer',
          transition: '0.3s',
          '&:hover': {
            color: '#0A66C2' // LinkedIn blue
          }
        }} />
  },
  {
    name: "GitHubIcon", icon: <GitHubIcon
      sx={{
        fontSize:23,
        color: 'white',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
          color: '#6e5494'
        }
      }}
    />
  },
  {
    name: "InstagramIcon", icon: <InstagramIcon
      sx={{
        fontSize:23,
        color: 'white',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
          color: '#E1306C'
        }
      }}
    />
  },
  {
    name: "EmailIcon", icon: <EmailIcon
      sx={{
        fontSize:23,
        color: 'white',
        cursor: 'pointer',
        transition: '0.3s',
        '&:hover': {
          color: '#D44638'
        }
      }}
    />
  }
]

const Home = () => {
  return (
    <Box sx={{width:'100%',height:'100vh'}} className="relative z-10  bg-black">
      {/* <ParticlesComponent id="particle" /> */}
      <div id="particle" className="absolute w-full h-full -z-10 pointer-events-none">
        <ParticlesComponent />
      </div>
      <Header />
      <div className='w-[100%] h-[85%] flex items-center justify-center'>
        <Box className=" h-full mx-auto flex flex-col lg:flex-row items-center justify-between"
          sx={{
            width:{ xs: '85%', md: '90%', lg: '70%', xl: '60%' },
            height: '90%',
          }}>
          <div id='first' className="order-2 md:order-1 w-full lg:w-[65%]  h-1/2 lg:h-full py-8 flex flex-col text-center sm:text-left  justify-center">
            <OwnerDetails
              desgination={"software Developer"}
              Name={"Rohith Krishna"}
              Description={"I'm Rohith Krishna, a passionate software developer.I love building clean and efficient web applications that solve real-world problems."}
              cv={"cv"} icons={icons} />
          </div>
          <div id='second' className="order-1 md:order-2  w-full lg:w-[35%] h-1/2 lg:h-full flex py-4  justify-center items-center">
            <div className="relative flex items-center  justify-center  w-[220px] h-[220px] lg:w-[320px] lg:h-[320px]">
              <div className="ring-border w-[230px] h-[230px] lg:w-[300px] lg:h-[300px]"></div>
              <div className="ring-border-secondary w-[230px] h-[230px] lg:w-[301px] lg:h-[301px]"></div>
              <img
                src={mypic}
                alt="Profile"
                className="w-[225px] h-[225px] lg:w-[295px] lg:h-[295px] object-cover bg-black rounded-full z-10 "
              />
            </div>
          </div>
        </Box>
      </div>
    </Box>
  )
}

export default Home
