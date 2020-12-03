import React from "react";
import './App.css';
import Header from "./scripts/Header.js";
import Sidebar from "./scripts/Sidebar.js";
import Timeline from "./scripts/Timeline.js"
function App() {
  

  return (
    <div className="app">
      
      <Header/>

      <div className="app__body">
        <Sidebar/>
        <Timeline/>
      </div>

    </div>

    
  );
}

export default App;
