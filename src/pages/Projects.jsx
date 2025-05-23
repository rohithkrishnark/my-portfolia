import { Box } from '@mui/joy'
import React from 'react'
import ProjectsCard from '../Components/ProjectsCard'

const Projects = () => {
    return (
        <Box className="flex md:flex-row flex-col items-center justify-center bg-black"
            sx={{ width: "100%", height: "100vh" }}>
            <div className='w-[80%] h-[95%]  '>
                <div className=" w-[100%]  h-[20%] ">
                    <h2 className="font-robotoMono text-2xl md:text-5xl text-white font-bold mb-2 text-center md:text-start ">PRO<span className="text-green-400">J</span>ECT </h2>
                    <p className="font-robotoMono text-xs sm:text-sm font-bold text-white text-justify mb-1 italic">" 🌟Some of my key projects are developed as part of my current role at LG and are not open-source due to company policy. However, a brief description and tech stack are provided. More information is available on my <a className='text-pink-400 not-italic' href="https://www.linkedin.com/in/rohithkrishna13">LinkedIn 🌟"</a></p>
                </div>
                <div className=" w-[100%]  h-[80%] flex flex-wrap gap-2 justify-around overflow-y-scroll lg:overflow-y-visible">
                    <ProjectsCard
                        name={"Real Estate Management System"}
                        type={"Private"}
                        stack={" React, Node.js, MongoDB, Bootstrap, Google Places API"}
                        des={"A full-stack real estate web application that allows users to post properties with images, search by location using the Google Places API, and connect directly with agents. It includes dedicated admin and agent panels for efficient listing management, approvals, and communication."}
                        link={"https://github.com/rohithkrishnark"}
                        socailmedio={"Github"}
                        reason={" This project is private due to sensitive credentials"}
                    />
                    <ProjectsCard
                        name={"Feedback System"}
                        type={"Private"}
                        stack={" React, Node.js, Mysql, Tailwind"}
                        link={"https://www.linkedin.com/in/rohithkrishna13"}
                        socailmedio={"LinkedIn"}
                        reason={" This project is not open-source due to company policy."}
                        des={"Feedback is a user-friendly and efficient Hospital Management System designed to streamline daily hospital operations. This web-based solution enables staff and administrators to manage hospital resources, monitor bed availability, track patient feedback, and coordinate inter-departmental tasks"} />
                    <ProjectsCard
                        name={"MedValet Parking Management System"}
                        type={"Private"}
                        stack={" React, Node.js, Mysql, Tailwind"}
                        des={"A full-stack web application for seamless parking space booking and management. Users can search, reserve, and pay for spots, while space owners can list and manage their availability. The platform ensures efficient coordination with a user-friendly interface."}
                        socailmedio={"LinkedIn"}
                        link={"https://www.linkedin.com/in/rohithkrishna13"}
                        reason={" This project is not open-source due to company policy."}
                    />

                    <ProjectsCard name={"Ecommerse Website"} type={"public"}
                        stack={" Node.js, Mongodb, Bootstrap,Hbs"}
                        des={"A Node.js and Handlebars-based hospital management website that streamlines workflows like bed tracking, patient feedback, and interdepartmental task coordination through a responsive and user-friendly interface"}
                        link={"https://github.com/rohithkrishnark"}
                        socailmedio={"Github"}
                    />

                </div>

            </div>
        </Box>
    )
}

export default Projects
