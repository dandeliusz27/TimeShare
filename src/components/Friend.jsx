import React from 'react'
import './Friend.css'

function Friend() {
  return (
    <div className='friendContainer'>
      <div className="friendProfileBox">
        <div className="friendProfilePic"></div>  
      </div>
      <div className="friendTextBox">
        <div className="friendTextName">Gracjan Push Wołodyjowski</div>
        <div className="FriendTextState">Chętny na spotkanie!</div>
        </div>
      <div className="friendLocationBox">Nowogard</div>
    </div>
  )
}

export default Friend