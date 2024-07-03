import React from "react";
import Logo from "../../Logo.png";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

function Header() {
  return (
    <nav className="header">
      <img src={Logo} alt="Logo"></img>
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recentlyadded">Recently Added</Link>
        <Link to="/mylists">My Lists</Link>
      </div>
      <IoSearchSharp />
    </nav>
  );
}

export { Header };
