import React from "react";

function NavBar() {
  return (
    <nav className="nav">
    <a className="nav-link active" href="/">
        Home
    </a>
    <a className="nav-link" href="directory">                 
        Directory
    </a>
</nav>
  );
}

export default NavBar;