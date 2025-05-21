import { Box } from '@mui/joy'
import React, { useCallback, useState } from 'react'
import TypewriterText from '../Components/TypewriterText'
import SkillHolders from '../Components/SkillHolders'
import CustomeSwitch from '../Components/CustomeSwitch'

const Skill = () => {

    const [selecteditem, setSelectedItem] = useState(1);

    const handleSelectItem = useCallback((number) => {
        setSelectedItem(number)
    }, [setSelectedItem])
    

    return (
        <Box className="flex md:flex-row flex-col items-center justify-center bg-black text-white" sx={{ width: "100%", height: "100vh" }}>
            <div className='w-[80%] h-[80%] flex flex-col items-center md:flex-row justify-center  '>
                <div className=' w-full md:w-1/2 h-[50%] md:h-full flex items-center md:items-start flex-col justify-center block '>
                    <h2 className="font-robotoMono text-xl md:text-4xl text-white font-bold ">
                        ✨My Engin<span className="text-green-400">ee</span>ring Kit
                    </h2>
                    <TypewriterText />
                </div>
                <div className='w-full md:w-1/2  h-[50%] md:h-auto'>
                    <div className='w-full h-[40px]  flex items-center justify-center gap-3 mb-5'>
                        <CustomeSwitch
                            id={1}
                            name={"Skills"}
                            color={"border-pink-900"} setSelectedItem={setSelectedItem}
                            onclick={handleSelectItem} />
                        <CustomeSwitch
                            id={2}
                            name={"Tools"}
                            color={"border-green-900"} setSelectedItem={setSelectedItem}
                            onclick={handleSelectItem}
                        />
                        <CustomeSwitch
                            id={3}
                            name={"Learning"}
                            color={"border-orange-900"} setSelectedItem={setSelectedItem}
                            onclick={handleSelectItem}
                        />
                    </div>
                    <div className='w-full min:h-[200px]  flex items-center justify-center flex-wrap gap-4'>
                        <SkillHolders selecteditem={selecteditem} />
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Skill
