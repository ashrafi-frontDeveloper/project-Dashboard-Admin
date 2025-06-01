import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import './Topbar.css'

export default function Topbar() {
  return (
    <div className="topbar">
        {/* topbar wrapper */}
        <div className="topbarWrapper">
            {/* top left => logo */}
            <div className="topLeft">
                <span className="logo">A$hrafi ❤️</span>
            </div>

            {/* top right => icons */}
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsIcon />
                    <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <LanguageIcon />
                    <span className="topIconBadge">2</span>
                </div>

                <div className="topbarIconContainer">
                    <SettingsIcon />
                </div>

                {/* profile */}
                <img src="images/person.jpg" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
