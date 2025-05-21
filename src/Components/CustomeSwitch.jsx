import React, { memo } from 'react'

const CustomeSwitch = ({ name ,color ,id,onclick }) => {
    return (
        <div onClick={()=>onclick(id)} className={`w-[30%] block h-[30px] mid:h-[20px] bg-black border-[1px] ${color} rounded-2xl flex items-center justify-center cursor-pointer hover:border-[2px] text-xs md:text-sm`}>
            {name}
        </div>
    )
}

export default memo(CustomeSwitch)
