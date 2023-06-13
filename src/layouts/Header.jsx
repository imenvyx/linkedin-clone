import React from "react";
//Icons
import  SearchIcon  from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

//Styles
import "./header.css";
import HeaderOption from "../components/HeaderOption";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt=""
        />
        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header-right">
        <HeaderOption  Icon={HomeIcon} title="Home"  />
        <HeaderOption  Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption  Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption  Icon={ChatIcon} title="Messaging" />
        <HeaderOption  Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption  avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuvtvRUfPWjzZJqWm9UCLzEt6vzbgEZZPCPU-qC7Cle2kt4eDQq1vEvEkP5QjOoG4TKQ&usqp=CAU" title="me" />
      </div>
    </div>
  );
}

export default Header;
