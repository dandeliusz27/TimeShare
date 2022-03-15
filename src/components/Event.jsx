import React from 'react';
import './Event.css';

function Event() {
    return (
        <div className="eventContainer">
                <div className="eventProfileBox">
                    <div className="profilePic"></div>  
                </div>
                <div className="eventTextBox">
                    <div className="eventText">
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="eventFriendsBox">
                        <div className="friend1"></div>
                        <div className="friend1"></div>
                        <div className="friend1"></div>
                    </div>
                    <div className="eventTimeBox">
                        <p>12:30</p>
                    </div>
                </div>
                <div className="eventDateBox">
                    <p className="month">STY</p>
                    <p className="day">03</p>
                </div>
        </div>
    )
}

export default Event;