import React from 'react'
import Calendar from '../components/Calendar'
import './Home2.css'
import Event from '../components/Event'
import Button from "../components/Button";

function HomePage() {
  return (
      <div className="homeBox">
        <div className="homeBoxCalendar">
          <Calendar/>  
        </div>
        <div className="homeboxButton">
          <Button/>
        </div>
        <div className="homeBoxEvent">
          {/* <p className='homeBoxEventText'>Nadchodzące wydarzenia:</p> */}
          <div className="homeBoxEventList">
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
          </div>
        </div>
      </div>
  )
}

export default HomePage