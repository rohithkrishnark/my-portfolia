import React from 'react';
import { Box } from "@mui/joy";
import ContactHolder from '../Components/ContactHolder';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import MarkEmailReadTwoToneIcon from '@mui/icons-material/MarkEmailReadTwoTone';
import PermPhoneMsgTwoToneIcon from '@mui/icons-material/PermPhoneMsgTwoTone';

const Contact = () => {
    return (
        <Box className="flex md:flex-row flex-col items-center justify-center bg-black"
            sx={{ width: "100%", height: "100vh" }}>
            <div className='w-[80%] h-[80%] flex-col md:flex-row flex'>
                <div className=" w-full md:w-[40%] h-[50%] md:h-[100%] flex flex-col justify-center ">
                    <h2 className="font-robotoMono text-4xl md:text-5xl text-white font-bold mb-2 ">CON<span className="text-green-400">T</span>ACT ME</h2>
                    <p className="font-robotoMono text-xl font-bold text-white text-justify mb-1">Let's work together</p>
                    <p className="font-robotoMono md:text-sm text-[11px] text-white text-justify">Have an idea or project in mind? Let’s team up and build something great. I’m just a message away!</p>
                    <div className='flex flex-col gap-2 my-2'>
                        <ContactHolder place={"Thiruvanthapuram-keral-India"} icon={<LocationOnTwoToneIcon sx={{ color: 'orange', fontSize: 18 }} />} />
                        <ContactHolder place={"rohithkrishnaofficalwk@gmail.com"} icon={<MarkEmailReadTwoToneIcon sx={{ color: 'orange', fontSize: 18 }} />} />
                        <ContactHolder place={"+91 9789987076 / +91 78658708**"} icon={<PermPhoneMsgTwoToneIcon sx={{ color: 'orange', fontSize: 18 }} />} />
                    </div>
                </div>
                <div className=" w-full md:w-[60%] h-[50%] md:h-[100%] border-t-2 border-white sm:border-t-2 sm:border-white md:border-none lg:border-none  flex items-center justify-center py-2">
                    <div className='md:w-[70%] md:h-[90%] w-[100%] h-[100%]  flex flex-col items-center justify-center'>
                        <input type="text" placeholder='Your Name' className='w-[100%] h-[45px] md:h-[12%] rounded-md bg-gray-800 shadow-lg px-2 text-xs font-robotoMono font-bold text-white '/> <br />
                        <input type="text" placeholder='Email Address' className='w-[100%]  h-[45px] md:h-[12%] rounded-md bg-gray-800 shadow-lg px-2 text-xs font-robotoMono font-bold text-white'  /> <br />
                        <input type="text" placeholder='Subject' className='w-[100%]  h-[45px] md:h-[12%] rounded-md bg-gray-800 shadow-lg px-2 text-xs font-robotoMono font-bold text-white' /><br />
                        <textarea type="text" placeholder='message' className='w-[100%] h-[60px] md:h-[20%] rounded-md bg-gray-800 shadow-lg px-2 text-xs font-robotoMono font-bold text-white' /> <br />
                        <input type='submit' value='Send' className='w-[100%]  h-[40px] rounded-md bg-green-300 shadow-lg px-2 text-xs font-robotoMono font-bold  ' />
                    </div>

                </div>
            </div>

        </Box>
    )
}

export default Contact
