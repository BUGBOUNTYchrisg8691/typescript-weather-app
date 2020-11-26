import React, { ReactElement } from 'react';
import { NavLink } from "react-router-dom";

import Search from "./Search"

interface Props {
  
}

export default function Header({}: Props): ReactElement {
  return (
    <header>
      <img src="" alt="app logo" />
      <Search />
      <ul>
        <li>
          <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="nav-link" to="/daily">Daily</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="nav-link" to="/weekly">Weekly</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="nav-link" to="/tenday">Ten Day</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" className="nav-link" to="/monthly">Monthly</NavLink>
        </li>
      </ul>
    </header>
  )
}
