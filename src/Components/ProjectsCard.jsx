import React from 'react'

const ProjectsCard = ({ name, type, des, stack, socailmedio, link, reason }) => {
    return (
        <div className="lg:w-[48%] w-full h-[50%] bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm sm:text-xl font-semibold text-white font-robotoMono">
                   🗂️  {name}
                </h2>
                <span className="bg-gray-300 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                    {type}
                </span>
            </div>
            <div className='h-[50%]'>
                <p className="text-white mb-3 text-[10px] md:text-xs  font-robotoMono font">{des}</p>
            </div>
            <p className="sm:text-sm text-white mb-2 font-robotoMono text-[10px]">
                <strong className='text-green-400 '>Tech Stack:</strong> {stack}
            </p>
            <p className={`${reason ? 'text-red-500' : 'text-white '} text-[10px] font-robotoMono sm:text-xs `}>

                {/* {
                    reason ? "🔒" : "🔓 "
                } */}
                {
                    reason ? reason : "The Source-code is Available in my "
                } {" "}
                <a
                    href={`${link}`}
                    className="text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {socailmedio}
                </a>.
            </p>
        </div>


    )
}

export default ProjectsCard
