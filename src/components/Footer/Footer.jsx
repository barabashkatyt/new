import React from 'react'

import { AboutFooter } from './styled.js';



const Footer = () => {
  
  return (
    <AboutFooter>
        <AboutFooter.Left>
        <a href="#">© Дизайн сайта был разработан в школе </a>
        </AboutFooter.Left>
        <AboutFooter.Right>
        <div class="about__footer--right">
                <ul class="social-links">
                    <li class="social-links__link"><a href="#"  title="facebook"></a></li>
                    <li class="social-links__link"><a href="#"  title="B"></a></li>
                    <li class="social-links__link"><a href="#"  title="twitter"></a></li>   
                </ul>

            </div>   
        </AboutFooter.Right>    
    </AboutFooter>
  )
}

export default Footer
