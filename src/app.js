import React from "react";
import { Provider } from "react-redux";

import logo from './logo.svg';
import Clock from "./containers/clock";
import Salary from "./containers/salary";
import CalculationForm from "./containers/calculation-form";

import './styles/app.css';


const App = ({store}) => {
  return (
    <Provider store={store}>
      <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Salary Counter</h1>
        <Clock />
        <Salary />
        <CalculationForm />
      </div>
    </Provider>
  );
}

export default App;
