import React, { memo } from 'react'

const AboutDescription = ({desription}) => {
    return (
        <>
            <div id="two" className="w-[90%] h-[20%]  block flex items-center  justify-center md:justify-start">
                <h2 className="font-robotoMono text-4xl md:text-6xl text-white font-bold ">AB<span className="text-green-400">O</span>UT ME</h2>
            </div>
            <div id="two" className="w-[90%] h-[50%]  block px-2 md:px-0">
                <p className="font-robotoMono text-xs md:text-sm text-white text-justify">
                    {desription}
                </p>
            </div>
        </>
    )
}

export default memo(AboutDescription)