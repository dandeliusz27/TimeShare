import React from 'react';
import './Event.css';

function Event() {
  return (
    <div className="eventContainer">
        {/* <div className="eventDate">
          <div className="eventDateDay">19</div>
          <div className="eventDateMonth">LUT</div>
        </div>
        <div className="eventPeople">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="eventText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, hic?
        </div> */}

        <div className="box1">
          <div className="profilePic"></div>  
        </div>
        <div className="box2">
          <div className="eventText">
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          <div className="friends">
            <div className="friend1"></div>
            <div className="friend1"></div>
            <div className="friend1"></div>
          </div>
          <div className="time">
            <p>12:30</p>
          </div>
        </div>
        <div className="box3">
          <p className="month">STY</p>
          <p className="day">03</p>
        </div>
    </div>
  )
}

export default Event;