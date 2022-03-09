import React from 'react'
import './Calendar.css'
import  {FaChevronLeft}  from "react-icons/fa";
import  {FaChevronRight}  from "react-icons/fa";

function Calendar() {
  let days = [];
  for (let i = 0; i < 35; i++) {
    days[i] = i + 1;
  }

  
  return (
    <div className="calendarContainer">
      <div className="calendarDate">
        <FaChevronLeft/>
        <div>
          <p className='calendarMonth'>Styczeń</p>
          <p className='calendarYear'>2022</p>
        </div>
        <FaChevronRight/>
      </div>
      <div className="calendarBox">
        <div className="calendarWeek">
          <div>P</div>
          <div>W</div>
          <div>Ś</div>
          <div>Cz</div>
          <div>P</div>
          <div>S</div>
          <div>N</div>
        </div>
        <div className="calendarDays">
          {days.map((item,index)=>{
            return <div key={index}>{item}</div>
          })}
        </div>
      </div>
      
    </div>
  )
}

export default Calendar