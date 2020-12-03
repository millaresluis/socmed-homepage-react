import React from 'react'
import "../style/Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Tooltip } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t1.15752-9/128610209_1755506157951406_4972939455930298663_n.png?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_eui2=AeHqG-Su-HUGGggCoyzo_lzYo3TWE8E-dlejdNYTwT52V9ERYz4EMsikS0Xe8_fbAZDgoFal8fpKdbiHTDkxJi6e&_nc_ohc=26S3wPyI7FYAX8mgyBa&_nc_oc=AQmygWBVdTgg6WcsvJFWadAykDvQKTlFNjqJcdMME9BGTpTMoPBYUKhblTj3O9wrqG4&_nc_ht=scontent.fmnl17-2.fna&oh=6dc24541c9383e66e99efcc43c944c75&oe=5FEC8D8C" alt="" />
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text" placeholder='Search...'/>
                </div>
            </div>
                
            <div className="header__center" >
                <div className="header__option header__option--active" >
                    <Tooltip title="Home">
                        <HomeIcon fontSize="large" aria-label="home"/>
                    </Tooltip>                 
                </div>
                <div className="header__option">
                <Tooltip title="Organizations">
                    <GroupIcon fontSize="large" aria-label="organizations"/>
                </Tooltip>                     
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar/>
                    <h4>Luffy</h4>
                </div>

                <div className="iconbutton">
                    <Tooltip className="test" title="Message">
                        <IconButton aria-label="message">
                            <ChatIcon/>
                        </IconButton>
                    </Tooltip>
                    
                    <Tooltip title="Notifications">
                        <IconButton aria-label="notification">
                            <NotificationsActiveIcon/>
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Account">
                        <IconButton aria-label="account">
                            <ArrowDropDownIcon />
                        </IconButton>
                    </Tooltip>
                </div>
                
                
            </div>
        </div>
    )
}

export default Header
