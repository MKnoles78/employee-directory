import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Shared/NavBar";
import Home from "./components/containers/Home";
import EmployeeDirectory from "./components/containers/EmployeeDirectory";
// import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/directory" component={EmployeeDirectory} />
    </Router>
  );

}

export default App;
