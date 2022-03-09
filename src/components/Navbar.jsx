import React from 'react';
import './Navbar.css';
import { FaUserFriends } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";



function navbar() {
  return (
    <div className="navbarContainer">
        <div className="navFriends">
          <div className="navFriendsIcon"><FaUserFriends size="23px"/></div>
          <p className="navFriendsText">Friends</p>
        </div>
        <div className="navHome">
          <div className="navHomeIcon"><FaHome size="23px"/></div>
          <p className="navHomeText">Home</p>
        </div>
        <div className="navProfile">
          <div className="navProfileIcon"><FaRegSun size="23px"/></div>
          <p className="navProfileText">Profile</p>
        </div>
    </div>
  )
}

export default navbar