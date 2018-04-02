import { connect } from "react-redux";
import React from "react";

const Salary = ({ amountEarned }) => {
  return (
    <div className="salary-text">
      {amountEarned.toFixed(2)}
    </div>
  )
}

const mapStateToProps = ({ amountEarned }) => ({
  amountEarned
})

export default connect(mapStateToProps)(Salary);