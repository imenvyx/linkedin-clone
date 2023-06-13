import React from "react";

import "./App.css";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Feed from "./layouts/Feed";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App body */}
      <div className="app-body">
        <Sidebar />
        <Feed />
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
