import React from 'react'
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';

const OwnerDetails = ({ desgination, Name, Description, cv ,icons}) => {
    return (
        <>
            <p className='font-robotoMono text-white text-xs sm:text-sm'>{desgination}</p>
            <h2 className='font-robotoMono text-white text-2xl sm:text-6xl font-bold'>Hello I'm</h2>
            <h2 className='font-robotoMono text-green-400 text-3xl sm:text-6xl font-bold'>{Name}</h2>
            <p className='font-robotoMono text-white text-xs sm:text-sm'>{Description}</p>
            <div className='w-full sm:w-[60%] h-[60px]  flex flex flex-col sm:flex-row items-center justify-between '>
                <div className='w-[35%]  h-full flex items-center justify-center cursor-pointer mt-2'>
                    <div className='w-full h-[40px]  rounded-[10px] flex items-center justify-center border border-[2px] border-white-400 hover:border-[1px] gap-1 '>
                        <p className='font-robotoMono text-green-400 font-bold text-xs '>DOWNLOAD CV</p>
                        <DownloadTwoToneIcon    
                            sx={{
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: 19
                            }} />
                    </div>
                </div>
                <div className='w-[60%] h-full mt-2 flex items-center justify-around'>
                    {
                        icons?.map((item) => (
                            <div style={{width:'30px',height:'30px'}} className=' flex items-center justify-center cursor-pointer border-[1px] border-green-700  p-2 rounded-full'>{item?.icon}</div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default OwnerDetails
