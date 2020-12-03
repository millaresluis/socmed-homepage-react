import React from 'react'
import "../style/Sidebar.css";
import SidebarRow from './SidebarRow';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://img.pngio.com/one-piece-png-one-piece-chibi-png-image-564-e-free-download-one-piece-chibi-png-564_880.png' title='Luffy'/>
            <SidebarRow Icon={GroupIcon} title="Organizations"/>
            <SidebarRow Icon={SettingsIcon} title="Settings"/>
        </div>
    )
}

export default Sidebar
