import React from 'react'

import { CenterAside } from './styled.js';




const Aside = () => {
  
  return (
    <CenterAside>
      <ul>
        <li class="active"><a href='/about.html'><span class="icon-user-secret"> </span>Обо мне</a></li>
        <li><a href='/career.html'><span class="icon-rocket"> </span>Карьерный путь</a></li>
        <li><a href='/portfolio.html'><span class="icon-suitcase"> </span>Портфолио </a></li>
      </ul>
    </CenterAside>
  )
}

export default Aside
