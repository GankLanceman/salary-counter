import React from "react";
import { connect } from "react-redux";

import { PAY_TYPE } from "../constants"
import { setPayRate, setPayType, setScheduledHours, setCountingStatus, resetPayRate } from "../actions"

const CalculationForm = ({ payRate, payType, scheduledHours, setPayRate, setPayType, setScheduledHours, setCountingStatus, resetPayRate }) => {
  return (
    <div>
      <p>
        Enter your pay information to start calculation
      </p>
      <input type="text" placeholder={payRate ? payRate : "Pay Rate"} value={payRate ? payRate : ""} onChange={(e) => setPayRate(Number(e.target.value))} />
      <select name="Pay Type" id="pay-type-select" value={payType} onChange={(e) => setPayType(Number(e.target.value))}>
        <option value={PAY_TYPE.HOURLY}>Hourly</option>
        <option value={PAY_TYPE.SALARY}>Salary</option>
      </select>
      <input type="text" placeholder="Scheduled Hours Today" value={scheduledHours ? scheduledHours : ""} onChange={(e) => setScheduledHours(Number(e.target.value))} />
      <div>
        <button onClick={() => setCountingStatus(true)}>Start Counting</button>
        <button onClick={() => resetPayRate()}>Reset</button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ payRate, payType, scheduledHours }) => ({
  payRate,
  payType,
  scheduledHours
})

const mapDispatchToProps = {
  setPayRate,
  setPayType,
  setScheduledHours,
  setCountingStatus,
  resetPayRate
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculationForm);