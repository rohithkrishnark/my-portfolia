import { Box } from "@mui/joy";
import { memo } from "react";
import '../../src/App.css'
import MilitaryTechTwoToneIcon from '@mui/icons-material/MilitaryTechTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import SupportAgentTwoToneIcon from '@mui/icons-material/SupportAgentTwoTone';

import aboutpic from '../assets/three.jpeg';
import aboutpic2 from '../assets/two.jpeg';

const About = () => {
  return (
    <Box
      className="flex items-center justify-center bg-black"
      sx={{ width: "100%", height: "100vh" }}>

      <div className="w-2/4 h-full flex items-center justify-end ">
        <div id="one" style={{ backgroundColor: '#212529' }} className="block w-[50%] h-[80%] rounded-md  py-3 flex items-center justify-center ">
          <img src={aboutpic} alt="Image 1" className="fade-img img1 rounded-md" />
          <img src={aboutpic2} alt="Image 2" className="fade-img img2" />
        </div>
      </div>
      <div className="w-3/4 h-full  ">
        <div className="w-[80%]  h-1/2  flex items-center flex-col gap-1 justify-center ">
          <div id="two" className="w-[90%] h-[20%]  block flex items-center ">
            <h2 className="font-robotoMono text-6xl text-white font-bold">AB<span className="text-green-400">O</span>UT ME</h2>
          </div>
          <div id="two" className="w-[90%] h-[50%]  block">
            <p className="font-robotoMono text-sm text-white text-justify">
              Hi, I'm Rohith Krishna, a software developer at Logiprompt Techno Solutions. I recently completed a MERN stack course, which deepened my skills in building modern, full-stack web applications. Currently, I'm working on a project involving React Native and Node.js, expanding my expertise in mobile and backend development.

              I'm passionate about leveraging technology to create practical, user-focused solutions. With hands-on experience in scalable app development, I’m always eager to take on new challenges, collaborate with fellow developers, and contribute to impactful projects.
            </p>
          </div>
        </div>
        <div className="w-[82%] h-1/2  flex items-start justify-center ">
          <div id="three" className="w-full h-[70%] block flex items-start justify-between  gap-2">
            <div className="flex items-center gap-2 bg-gray-700 py-5 px-3 rounded-md block">
              <div className="text-6xl font-bold text-white">2</div>
              <div>
                <p className="text-sm font-robotoMono text-white">years </p>
                <p className="text-sm font-robotoMono text-white"> Expreiance</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gray-700 py-5 px-3 rounded-md block">
              <div className="text-6xl font-bold text-white">4</div>
              <div>
                <p className="text-xs font-robotoMono text-white"> Projects </p>
                <p className="text-xs font-robotoMono text-white"> Completed</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gray-700 py-5 px-3 rounded-md">
              <div className="text-6xl font-bold text-white">7</div>
              <div>
                <p className="text-xs font-robotoMono text-white">Year</p>
                <p className="text-xs font-robotoMono text-white"> Coding Experiance</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-gray-700 py-5 px-3 rounded-md">
              <div className="text-6xl font-bold text-white">500</div>
              <div>
                <p className="text-xs font-robotoMono text-white"> Codes </p>
                <p className="text-xs font-robotoMono text-white"> Commited</p>
              </div>
            </div>
          </div>
          {/* <div id="four" className="w-[60%] h-[70%] bg-yellow-900 block"></div> */}
        </div>
      </div>
    </Box>
  );
};

export default memo(About);
