import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Cal.css'
// import 'react-calendar/dist/Calendar.css';

function Cal() {
    const [value, setValue] = useState(new Date());

    function onChange(nextValue) {
      setValue(nextValue);
    }
  
    return (
        <Calendar
        onChange={onChange}
        value={value} />
    );
}

export default Cal