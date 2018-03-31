import { PAY_TYPE } from "../constants"

const initialState = {
  rate: 0,
  type: PAY_TYPE.HOURLY,
  hours: 0,
  amountEarned: 0,
  time: new Date()
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "":
      return state;      
    default:
      return state;
  }

}

export default rootReducer;