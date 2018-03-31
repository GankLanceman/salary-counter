import { connect } from "react-redux";
import React from "react";

import CalculationForm from "../components/calculation-form"

const Salary = ({ type }) => {
  return (
    <div>
      <CalculationForm submitClicked={(e) => console.log(e)}/>
    </div>
  )
}

const mapStateToProps = ({ rate, type, hours }) => ({
  rate,
  type,
  hours
})

export default connect(mapStateToProps)(Salary);