import { PAY_TYPE } from "./constants"
import { SET_PAY_RATE, SET_PAY_TYPE, RECALCULATE_SALARY, RESET_PAY_RATE, SET_COUNTING_STATUS, SET_SCHEDULED_HOURS } from "./actions";

const initialState = {
  payRate: null,
  payType: PAY_TYPE.HOURLY,
  scheduledHours: null,
  amountEarned: 0,
  ratePerSecond: 0,
  shouldCount: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECALCULATE_SALARY:
      if (!state.shouldCount) {
        return {
          ...state,
          amountEarned: 0
        }
      }

      return {
        ...state,
        amountEarned: state.amountEarned + state.ratePerSecond
      };
    case SET_PAY_RATE:
      return {
        ...state,
        payRate: action.payRate
      };
    case SET_PAY_TYPE:
      return {
        ...state,
        payType: action.payType
      }
    case SET_SCHEDULED_HOURS:
      return {
        ...state,
        scheduledHours: action.scheduledHours
      }
    case RESET_PAY_RATE:
      return initialState;
    case SET_COUNTING_STATUS:
      if (state.payRate === null || state.scheduledHours === null) {
        return {
          ...state,
          shouldCount: false
        }
      }

      let ratePerSecond = 0;

      if (state.payType === PAY_TYPE.HOURLY) {
        ratePerSecond = (state.payRate / state.scheduledHours)/100
      }
      else {
        ratePerSecond = (((state.payRate/52)/40)/state.scheduledHours)/100
      }

      return {
        ...state, 
        shouldCount: action.status,
        ratePerSecond,
        amountEarned: 0
      }
    default:
      return state;
  }
}

export default rootReducer;