import React from "react"
import padStart from "lodash.padstart"

import '../app.css';

const TimeDisplay = ({ currentTime }) => {
  
  // Determine the current hour
  let hours = currentTime.getHours();
  hours = hours > 12 ? hours - 12 : hours
  hours = padStart(hours, 2, "0");

  // Determine the minutes and seconds
  const minutes = padStart(currentTime.getMinutes(), 2, "0");
  const seconds = padStart(currentTime.getSeconds(), 2, "0");

  return (
    <div className="time-text">
      {hours}:{minutes}:{seconds}
    </div>
  )
}

export default TimeDisplay;