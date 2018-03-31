import React from "react"

import "../styles/app.css"

const DateDisplay = ({ currentDate }) => {

  return (
    <div className="time-text">
      {currentDate.toLocaleDateString()}
    </div>
  )
}

export default DateDisplay;