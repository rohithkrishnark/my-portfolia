import React, { memo, useCallback, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconPopover from '../Components/IconPopover';
import HomeTwoTone from '@mui/icons-material/HomeTwoTone';
import InfoTwoTone from '@mui/icons-material/InfoTwoTone';
import BuildTwoTone from '@mui/icons-material/BuildTwoTone';
import FolderOpenTwoTone from '@mui/icons-material/FolderOpenTwoTone';
import ContactMailTwoTone from '@mui/icons-material/ContactMailTwoTone';
const Header = () => {
    const [activetab, setActiveTab] = useState('Home');
    const isBelowMd = useMediaQuery('(max-width:767px)');
    const tabs = [
        { name: "Home", path: "#home", icon: <HomeTwoTone sx={{ color: '#4caf50',fontSize:17 }} /> },        // Green
        { name: "About", path: "#about", icon: <InfoTwoTone sx={{ color: '#2196f3',fontSize:17 }} /> },      // Blue
        { name: "Skills", path: "#skills", icon: <BuildTwoTone sx={{ color: '#ff9800',fontSize:17 }} /> },   // Orange
        { name: "Projects", path: "#projects", icon: <FolderOpenTwoTone sx={{ color: '#9c27b0',fontSize:17 }} /> }, // Purple
        { name: "Contact", path: "#contact", icon: <ContactMailTwoTone sx={{ color: '#f44336',fontSize:17 }} /> }  // Red
    ];

    const handleTabSwitch = useCallback((tab) => {
        setActiveTab(tab);
    }, []);

    return (
        <div className="bg-black px-8 py-3 sm:py-6 sticky  top-0 z-50">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <h3 className="font-roboto text-white font-bold text-lg">Rohit(Rk)</h3>
                {
                    !isBelowMd ? <nav className="hidden md:flex space-x-6 text-sm">
                        {
                            tabs.map((tab, index) => (
                                <a
                                    key={index}
                                    onClick={() => handleTabSwitch(tab)}
                                    href={tab.path}
                                    className={`font-robotoMono hover:text-green-200 text-white pb-1 transition-all duration-300 ease-in-out ${activetab === tab ? 'border-b-2 border-green-500 text-green-800 font-bold' : 'border-transparent'}`}
                                >
                                    {tab.name}
                                </a>
                            ))
                        }
                    </nav> : <IconPopover tabs={tabs} />
                }

            </div>
        </div>
    );
}

export default memo(Header);
