import React from "react";

import "../app.css"

const DollarDisplay = ({ dollarAmount }) => {
  return (
    <div className={`salary-text ${dollarAmount > 0 ? "green-text" : ""}`}>
      {dollarAmount.toFixed(2)}
    </div>
  )
}

export default DollarDisplay;