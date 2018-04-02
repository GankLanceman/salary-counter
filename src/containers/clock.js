import React, { Component } from "react";
import { connect } from "react-redux";

import { recalculateSalary } from "../actions";
import TimeDisplay from "../components/time-display";
import DateDisplay from "../components/date-display";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    }

    this.timerCallback = this.timerCallback.bind(this);
  }

  componentWillMount() {

    this.timer = setInterval(() => {
      this.timerCallback();
    },
      1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <DateDisplay currentDate={this.state.currentTime} />
        <TimeDisplay currentTime={this.state.currentTime} />
      </div>
    )
  }

  timerCallback() {
    this.props.recalculateSalary();

    this.setState({
      currentTime: new Date()
    });
  }
}

const mapDispatchToProps = {
  recalculateSalary
}

export default connect(null, mapDispatchToProps)(Clock);