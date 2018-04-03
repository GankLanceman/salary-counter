import { connect } from "react-redux";

import DollarDisplay from "../components/dollar-display"

const mapStateToProps = ({ amountEarned }) => ({
  dollarAmount: amountEarned
})

export default connect(mapStateToProps)(DollarDisplay);