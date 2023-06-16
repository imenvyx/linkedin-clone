import React from "react";

//Icons
import { FiberManualRecord, Info } from "@mui/icons-material";
//Styles
import "./widgets.css";

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets-article">
      <div className="widgets-article-left">
        <FiberManualRecord style={{ fontSize: "15px" }} />
      </div>
      <div className="widgets-article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newArticle("Esto es un Prueba", "Top news- 999 readers")}
      {newArticle("Esto es un Prueba", "Top news- 999 readers")}
      {newArticle("Esto es un Prueba", "Top news- 999 readers")}
      {newArticle("Esto es un Prueba", "Top news- 999 readers")}
      {newArticle("Esto es un Prueba", "Top news- 999 readers")}
      {newArticle("Esto es un Prueba", "Top news- 999 readers")}
      {newArticle("Esto es un Prueba", "Top news- 999 readers")}
    </div>
  );
}

export default Widgets;
