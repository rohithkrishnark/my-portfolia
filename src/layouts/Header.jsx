import React, { memo, useCallback, useState } from 'react';

const Header = () => {
    const [activetab, setActiveTab] = useState('Home');
    const tabs = ["Home", "About", "Stacks", "Contact", "Resume"];

    const handleTabSwitch = useCallback((tab) => {
        setActiveTab(tab);
    }, []);

    return (
        <div className="bg-black px-8 py-6 sticky top-0 z-50">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <h3 className="font-roboto text-white font-bold text-lg">Rohit(Rk)</h3>
                <nav className="hidden md:flex space-x-6 text-sm">
                    {
                        tabs.map((tab, index) => (
                            <a
                                key={index}
                                onClick={() => handleTabSwitch(tab)}
                                href="#"
                                className={`font-robotoMono hover:text-green-200 text-white pb-1 transition-all duration-300 ease-in-out ${activetab === tab ? 'border-b-2 border-green-500 text-green-800 font-bold' : 'border-transparent'}`}
                            >
                                {tab}
                            </a>
                        ))
                    }
                </nav>
            </div>
        </div>
    );
}

export default memo(Header);
