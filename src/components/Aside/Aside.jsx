import React from 'react'
import {IndexPage, AboutPage ,CareerPage, PortfolioPage} from '../../views'
import { CenterAside } from './styled.js';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Component } from 'react';


const routes = [
  {
    path: "/about",
    exact: true,
   // sidebar: () => <div>Обо мне</div>,
    main: () => AboutPage
  },
  {
    path: "/",
    exact: true,
   // sidebar: () => <div>Обо мне</div>,
    main: () => IndexPage
  },
  {
    path: "/carrer",
    exact: true,
    //sidebar: () => <div>Кный путь</div>,
    main: () => CareerPage
  },
 
  {
    path: "/portfolio",
    //sidebar: () => <div>Портфолио</div>,
    main: () => PortfolioPage
  }
];

const Aside = () => {

  return (

<Router>
    <div >
    <div >
      <CenterAside>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/about">Обо мне</Link>
        </li>
        <li>
          <Link to="/career">Карьерный путь</Link>
        </li>
        <li>
          <Link to="/portfolio">Портфолио</Link>
        </li>
      </ul>
      </CenterAside>
    </div>

      <div style={{ flex: 1, padding: "10px" }}>
      <Switch>
        {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          children={<route.main />}
      />
      ))}
      </Switch>
      </div>
      </div>
    </Router>
  )
}

export default Aside
