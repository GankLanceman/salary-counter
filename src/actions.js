export const RECALCULATE_SALARY = "RECALCULATE_SALARY"; 
export const SET_PAY_RATE = "SET_PAY_RATE";
export const SET_PAY_TYPE = "SET_PAY_TYPE";
export const SET_SCHEDULED_HOURS = "SET_SCHEDULED_HOURS";
export const SET_COUNTING_STATUS = "SET_COUNTING_STATUS";
export const RESET_PAY_RATE = "RESET_PAY_RATE";

export const recalculateSalary = () => ({
  type: RECALCULATE_SALARY
})

export const setPayRate = (payRate) => ({
  type: SET_PAY_RATE,
  payRate
})

export const setPayType = (payType) => {
  return {
    type: SET_PAY_TYPE,
    payType
  }
}

export const setScheduledHours = (scheduledHours) => {
  return {
    type: SET_SCHEDULED_HOURS,
    scheduledHours
  }
}

export const setCountingStatus = (status) => {
  if(!status) {
    status = false
  }

  return {
    type: SET_COUNTING_STATUS,
    status
  }
}

export const resetPayRate = () => ({
  type: RESET_PAY_RATE
})