import React from "react";
import "./sidebar.css";
import { Avatar } from "@mui/material";
function Sidebar() {

    const recentItem=(topic)=>( <div className="sidebar-recent-item">
        <span className="sidebar-hash">#</span>
        <p>{topic}</p>
    </div> )

    
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src="https://images.unsplash.com/photo-1570051008600-b34baa49e751?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1185&q=80" alt="" />
        <Avatar className="sidebar-avatar" />
        <h2>Im Envyx</h2>
        <h4>imdj9003@gmail.com</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p> Who viewed you</p>
          <p className="sidebar-stat-number">2.543</p>
        </div>
        <div className="sidebar-stat">
          <p> Views on post</p>
          <p className="sidebar-stat-number">2.448</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  );
}

export default Sidebar;
