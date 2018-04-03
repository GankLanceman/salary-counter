import React from "react";
import { Provider } from "react-redux";

import Clock from "./containers/clock";
import Salary from "./containers/salary";
import CalculationForm from "./containers/calculation-form";

import './styles/app.css';


const App = ({store}) => {
  return (
    <Provider store={store}>
      <div className="app">
        <h1 className="app-title">Salary Counter</h1>
        <Clock />
        <Salary />
        <CalculationForm />
      </div>
    </Provider>
  );
}

export default App;
