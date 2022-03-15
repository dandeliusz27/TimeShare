import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";



function navbar() {
  return (
    <div className="navbarContainer">
        <Link to='friends' className="navFriends">
          <div className="navFriendsIcon"><FaUserFriends size="23px"/></div>
          <p className="navFriendsText">Friends</p>
        </Link>
        <Link to='/' className="navHome">
          <div className="navHomeIcon"><FaHome size="23px"/></div>
          <p className="navHomeText">Home</p>
        </Link>
        <Link to='profile' className="navProfile">
          <div className="navProfileIcon"><FaRegSun size="23px"/></div>
          <p className="navProfileText">Profile</p>
        </Link>
    </div>
  )
}

export default navbar