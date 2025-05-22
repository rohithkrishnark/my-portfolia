import React from 'react'

const ContactHolder = ({ place, icon }) => {
    return (
        <div className='md:w-[320px] w-full h-[40px] bg-gray-800 shadow-lg flex px-1 py-1 rounded-md'>
            <div className='w-[10%] h-[100%] flex items-center bg-green-1   00 rounded-lg justify-center mr-1'>
                {icon}
            </div>
            <div className='w-[85%] h-[100%] flex items-center text-white font-robotoMono sm:text-xs text-[10px]'>
                {place}
            </div>
            <div></div>

        </div>
    )
}

export default ContactHolder
