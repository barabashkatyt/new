import React from 'react'
import {IndexPage, AboutPage ,CareerPage, PortfolioPage} from '../../views'
import { CenterAside } from './styled.js';
import { Link } from "react-router-dom";
import { AboutFooter } from '../Footer/styled';
//import { Component } from 'react';

const Aside = () => {
  return (
    <CenterAside>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/">Обо мне</Link>
        </li>
        <li>
          <Link  to="/career">Карьерный путь</Link>
        </li>
        <li>
          <Link to="/portfolio">Портфолио</Link>
        </li>
      </ul>
    </CenterAside>
  )
}

export default Aside
