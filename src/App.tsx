import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './components/Header';
import Daily from './components/Daily';
import Monthly from './components/Monthly';
import Weekly from './components/Weekly';
import TenDay from './components/TenDay';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      Better Weather App + Typescript
      {/* Header with Search */}
      <Header />
      {/* Selector for display type */}
      {/* Routes */}
      <Switch>
      {/* Route for daily weather */}
        <Route path="/daily" render={() => {
          return <Daily />
        }} />
      {/* Route for 7 day weather */}
        <Route path="/weekly" render={() => {
          return <Weekly />
        }} />
      {/* Route for 10 day weather */}
        <Route path="/tenday" render={() => {
          return <TenDay />
        }} />
      {/* Route for monthly weather */}
        <Route path="/monthly" render={() => {
          return <Monthly />
        }} />
      {/* Route for Home */}
        <Route path="/" render={() => {
          return <HomePage />
        }} />
      </Switch>
    </div>
  );
}

export default App;
