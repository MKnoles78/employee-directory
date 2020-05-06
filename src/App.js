
import React from "react";
import Home from "./components/containers/Home";
import NavBar from "./components/Shared/NavBar";
import employees from "./employees.json";



function App() {
  return (
  <div>
    <NavBar />
    <Home employees={employees}/>


  
  </div>
  );
}


export default App;
