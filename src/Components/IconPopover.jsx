import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';

export default function IconPopover({ tabs }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };



    const open = Boolean(anchorEl);
    const id = open ? 'icon-popover' : undefined;

    return (
        <div>
            <DashboardTwoToneIcon
                aria-describedby={id}
                onClick={handleClick}
                sx={{
                    color: 'white',
                    fontSize: 20,
                    cursor: 'pointer'
                }}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',

                }}
                sx={{
                    mt: 2
                }}
            >
                <div className="w-fit max-w-[300px] bg-black border border-gray-500 rounded-md flex flex-wrap gap-2 p-3">
                    {tabs.map((tab, index) => (
                        <a href={tab.path} onClick={handleClose} key={index}>
                            <div
                                key={index}
                                className="w-[60px] h-[60px] flex items-center justify-center bg-gray-800 text-white text-[8px] font-robotoMono rounded-md flex-col"
                            >
                                {tab.icon}
                                {tab.name}
                            </div>
                        </a>
                    ))}
                </div>

            </Popover>
        </div>
    );
}
