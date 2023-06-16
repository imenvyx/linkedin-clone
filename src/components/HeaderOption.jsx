import React from "react";
import "./header_option.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="header-option">
      {Icon ? <Icon className="header-option-icon" /> : null}
      {avatar ? (
        <Avatar className="header-option-icon" src={user?.photoUrl}>
          {user.email[0]}{" "}
        </Avatar>
      ) : null}
      <h3 className="header-option-title"> {title}</h3>
    </div>
  );
}

export default HeaderOption;
