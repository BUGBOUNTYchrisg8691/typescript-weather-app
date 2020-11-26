import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import axios from "axios"

import { BASE_URL, API_KEY } from "./constants"

import Header from './components/Header';
import Daily from './components/Daily';
import Monthly from './components/Monthly';
import Weekly from './components/Weekly';
import TenDay from './components/TenDay';
import HomePage from './components/HomePage';
import Geolocation from './components/Geolocation';

interface Location {
  longitude: number,
  latitude: number
}

type HandleSetLocation = (location: Location) => void;

function App() {
  const [loc, setLoc] = useState({ latitude: '', longitude: '' })
  const [weather, setWeather] = useState('')

  const handleSetLocation: HandleSetLocation = (location: any) => {
    setLoc(location)
  }

  useEffect(() => {
    if(loc.longitude !== '') {
      axios
        .get(`${BASE_URL}/current.json?key=${API_KEY}&q=${loc.latitude},${loc.longitude}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
      }
  }, [loc])

  return (
    <div className="App">
      Better Weather App + Typescript
      {/* Header with Search */}
      <Header />
      <Geolocation handleSetLocation={handleSetLocation} />
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
