import { Box } from '@mui/joy'
import React from 'react'
import Header from '../layouts/Header'
import ParticlesComponent from '../Components/Paticle'
import '../../src/App.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import mypic from '../assets/final.png'


const icons = [
  {
    name: "Linkedin", icon:
      <LinkedInIcon
        sx={{
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
    <Box className="relative z-10 w-screen h-screen bg-black">
      {/* <ParticlesComponent id="particle" /> */}
      <div id="particle" className="absolute w-full h-full -z-10 pointer-events-none">
        <ParticlesComponent />
      </div>

      <Header />

      <div className='w-[100%] h-3/4 flex items-center justify-center '>
        <div className="max-w-4xl mx-auto  flex items-center justify-between h-3/4 ">
          <div className="w-[65%] h-full py-8">
            <p className='font-robotoMono text-white'>software Developer</p>
            <h2 className='font-robotoMono text-white text-6xl'>Hello I'm</h2>
            <h2 className='font-robotoMono text-green-400 text-6xl font-bold'>Rohith Krishna</h2>
            <p className='font-robotoMono text-white'>I'm Rohith Krishna, a passionate software developer</p>
            <p className='font-robotoMono text-white'>I love building clean and efficient web applications that solve real-world problems.</p>
            <div className='w-[60%] h-[50px]  flex items-center justify-between mt-2'>
              <div className='w-[35%] h-full flex items-center justify-center cursor-pointer '>
                <div className='w-full h-[80%]  rounded-[20px] flex items-center justify-center border border-[1px] border-green-400 hover:border-[2px] gap-1 '>
                  <p className='font-robotoMono text-white text-xs '>DOWNLOAD CV</p>
                  <DownloadTwoToneIcon
                    sx={{
                      color: 'white',
                      cursor: 'pointer',
                      fontSize:19
                    }} />
                </div>
              </div>
              <div className='w-[60%] h-full flex items-center justify-around'>
                {
                  icons?.map((item) => (
                    <div className='cursor-pointer'>{item?.icon}</div>
                  ))
                }
              </div>

            </div>
          </div>
          <div className="w-[35%] h-full flex py-4">
            <div className="relative flex items-center  justify-center w-[320px] h-[320px]">
              {/* Animated Rings */}
              <div className="ring-border"></div>
              <div className="ring-border-secondary"></div>
              <div className="ring-border-tertiary"></div>

              {/* Profile Image */}
              <img
                src={mypic}
                alt="Profile"
                className="w-[295px] h-[295px] object-cover bg-black rounded-full z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </Box>
  )
}

export default Home
