import { Box } from "@mui/joy";
import { memo } from "react";
import '../../src/App.css'

import aboutpic from '../assets/three.jpeg';
import aboutpic2 from '../assets/two.jpeg';
import aboutpic3 from '../assets/four.jpeg';
import AboutDescription from "../Components/AboutDescription";
import StatsSection from "../Components/StatsSection ";




const About = () => {
  return (
    <Box className="flex md:flex-row flex-col items-center justify-center bg-black " sx={{ width: "100%", minHeight: "100%" }}>

      <div className="order-2 md:order-1 w-full md:w-[30%] h-[50vh] md:h-[100vh] flex items-center md:justify-end justify-center">
        <div
          id="one"
          style={{ backgroundColor: '#212529' }}
          className=" block w-[60%] md:w-[65%] h-[90%] md:h-[75%] rounded-md  py-3 flex items-center justify-center ">
          {/* <img src={aboutpic3} alt="Image 1" className="" /> */}
          <img src={aboutpic2} alt="Image 2 " className="w-[80%] h-[100%]" />
        </div>
      </div>


      <div className="order-1 md:order-2 w-full md:w-3/4 min:h-[50vh] md:h-[100vh]  ">
        <div className=" w-[100%] lg:w-[80%] h-1/2  flex items-center flex-col gap-1 justify-center md:justify-end mb-3">
          <AboutDescription
            desription={"Hi, I'm Rohith Krishna, a software developer at Logiprompt Techno Solutions. I recently completed a MERN stack course, which deepened my skills in building modern, full-stack web applications. Currently, I'm working on a project involving React Native and Node.js, expanding my expertise in mobile and backend development.I'm passionate about leveraging technology to create practical, user-focused solutions. With hands-on experience in scalable app development, I’m always eager to take on new challenges, collaborate with fellow developers, and contribute to impactful projects."}
          />
        </div>
        <div className="w-[100%] lg:w-[82%] h-1/2 flex items-center md:items-start justify-center  px-2 mt-1 ">
          <div id="three" className=" w-full h-auto  flex flex-wrap items-start justify-center md:justify-start gap-1 ">
            <StatsSection />
          </div>
        </div>
      </div>

    </Box>
  );
};

export default memo(About);