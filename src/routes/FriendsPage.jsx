import React from 'react'
import Friend from '../components/Friend'
import './FriendsPage.css'
import { FaSearch } from "react-icons/fa";

function FriendsPage() {
  return (
    <div className="friendsContainer">
      <div className="friendsMyBox">Znajomi</div>
      <div className="friendsAllBox"> Wszyscy</div>
      <div className="friendsSearchBox">
        <div className="friendsSearchBar">
          <input type="text" placeholder="Search.."/>
          <button><FaSearch size="18px"/></button>
        </div>
      </div>
      <div className="friendsListBox">
        <div className="friendsList">
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
        </div>
      </div>
    </div>
  )
}

export default FriendsPage