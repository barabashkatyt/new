import React from 'react'

import { AboutHeader } from './styled.js';

import avatar from '../../images/avatar.PNG'

const Header = () => {
  
  return (
    <AboutHeader>
        <AboutHeader.Left>
            <AboutHeader.LeftImage src={avatar}>
            <img src={avatar} alt="Avatar image"></img>
            </AboutHeader.LeftImage>
            <AboutHeader.LeftText>
            Константин Константинов
            </AboutHeader.LeftText>
        </AboutHeader.Left>
        <AboutHeader.Right>
            <AboutHeader.RightLink>
            Мои контакты 
            </AboutHeader.RightLink>
        </AboutHeader.Right>    
    </AboutHeader>
  )
}

export default Header
