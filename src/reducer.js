import { PAY_TYPE } from "./constants"
import { SET_PAY_RATE, SET_PAY_TYPE, RECALCULATE_SALARY, RESET_PAY_RATE, SET_COUNTING_STATUS } from "./actions";

const initialState = {
  payRate: null,
  payType: PAY_TYPE.HOURLY,
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
    case RESET_PAY_RATE:
      return {
        ...initialState
      };
    case SET_COUNTING_STATUS:
      if (state.payRate === null) {
        return {
          ...state,
          shouldCount: false
        }
      }

      let ratePerSecond = 0;

      if (state.payType === PAY_TYPE.HOURLY) {
        ratePerSecond = (state.payRate/60)/60
      }
      else {
        ratePerSecond = (((state.payRate/52)/40)/60)/60
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