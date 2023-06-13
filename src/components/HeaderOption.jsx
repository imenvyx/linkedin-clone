import React from "react";
import "./header_option.css";
import { Avatar } from "@mui/material";
function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className="header-option">
      {Icon ? <Icon className="header-option-icon" /> : null}
      {avatar ? <Avatar className="header-option-icon" src={avatar} /> : null}
      <h3 className="header-option-title"> {title}</h3>
    </div>
  );
}

export default HeaderOption;
