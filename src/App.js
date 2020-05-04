// import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from "./components/Shared/NavBar";
// import Home from "./components/containers/Home";
// import EmployeeDirectory from "./components/containers/EmployeeDirectory";
// // import './App.css';

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Route exact path="/" component={Home} />
//       <Route exact path="/directory" component={EmployeeDirectory} />
//     </Router>
//   );

// }
import React from "react";
import Home from "./components/containers/Home";
import NavBar from "./components/Shared/NavBar";

const employees = [
  {
    id: 1,
    firstName: "Scott",
    lastName: "Summers",
    codename: "Cyclops",
    "email": "scott.summers@xmen.com"
  },
  {
    id: 2,
    firstName: "Jean",
    lastName: "Grey",
    codename: "Phoenix",
    "email": "jean.grey@xmen.com"
  },
  {
    id: 3,
    firstName: "Bobby",
    lastName: "Drake",
    codename: "Iceman",
    "email": "bobby.drake@xmen.com"
  },
  {
    id: 4,
    firstName: "Warren",
    lastName: "Worthington III",
    codename: "Angel",
    "email": "warren.worthington@xmen.com"
  },
  {
    id: 5,
    firstName: "Henry",
    lastName: "McCoy",
    codename: "Beast",
    email: "henry.mccoy@xmen.com"
  },
  {
    id: 6,
    firstName: "Logan",
    lastName: "Howlett",
    codename: "Wolverine",
    email: "logan.howlett@xmen.com"
  },
  {
    id: 7,
    firstName: "Ororo",
    lastName: "Munroe",
    codename: "Storm",
    email: "ororo.munroe@xmen.com"
  },
  {
    id: 8,
    firstName: "Piortr",
    lastName: "Rasputin",
    codename: "Colossus",
    email: "piortr.rasputin@xmen.com"
  },
  {
    id: 9,
    firstName: "Kurt",
    lastName: "Wagner",
    codename: "Nightcrawler",
    email: "kurt.wagner@xmen.com"
  },
  {
    id: 10,
    firstName: "Sean",
    lastName: "Cassidy",
    codename: "Banshee",
    email: "sean.cassidy@xmen.com"
  },
  {
    id: 11,
    firstName: "Alex",
    lastName: "Summers",
    codename: "Havok",
    email: "alex.summers@xmen.com"
  },
  {
    id: 12,
    firstName: "Charles",
    lastName: "Xavier",
    codename: "Professor X",
    email: "charles.xavier@xmen.com"
  }
]

function App() {
  return (
  <div>
    <NavBar />
    <Home employees={employees}/>


  
  </div>
  );
}


export default App;
