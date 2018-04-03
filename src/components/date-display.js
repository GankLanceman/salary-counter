import React from "react"

import "../app.css"

const DateDisplay = ({ currentDate }) => {

  return (
    <div className="time-text">
      {currentDate.toLocaleDateString()}
    </div>
  )
}

export default DateDisplay;