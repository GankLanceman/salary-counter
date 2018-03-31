import React from "react";

import { PAY_TYPE } from "../constants"

const CalculationForm = ({ submitClicked = () => null }) => {
  return (
    <div>
      <p>
        Enter your pay information to start calculation
      </p>
      <input type="text" placeholder="Pay Rate" />
      <select name="Pay Type" id="pay-type-select">
        <option value={PAY_TYPE.HOURLY}>Hourly</option>
        <option value={PAY_TYPE.SALARY}>Salary</option>
      </select>
      <input type="text" placeholder="Scheduled Hours Today" />
      <div>
        <button onClick={submitClicked}>Start Counting</button>
      </div>
    </div>
  )
}

export default CalculationForm;