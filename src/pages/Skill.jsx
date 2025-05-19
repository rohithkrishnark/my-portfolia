import { Box } from '@mui/joy'
import React from 'react'
import TypewriterText from '../Components/TypewriterText'

const Skill = () => {
    return (
        <Box className="flex md:flex-row flex-col items-center justify-center bg-black text-white" sx={{ width: "100%", height: "100vh" }}>
            <div className='w-[80%] h-[80%] flex '>
                <div className='w-1/2 h-full flex items-start flex-col justify-center'>
                    <h2 className="font-robotoMono text-4xl text-white font-bold ">
                        ✨My Engin<span className="text-green-400">ee</span>ring Kit
                    </h2>
                    <TypewriterText/>
                </div>
                <div className='w-1/2 h-full flex items-center justify-center bg-blue-700'>
                </div>
            </div>
        </Box>
    )
}

export default Skill
