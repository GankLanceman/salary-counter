import React, { Component } from "react";

import TimeDisplay from "../components/time-display"
import DateDisplay from "../components/date-display";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    }
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date()
      })
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
}

export default Clock;