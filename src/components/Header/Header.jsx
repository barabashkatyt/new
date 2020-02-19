import React from 'react'

import { AboutHeader } from './styled.js';

import avatar from '../../images/avatar.PNG'

import 'antd/dist/antd.css';
import {Popover} from 'antd'



const Header = () => {

 

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  
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
        <Popover content={content} >
          <AboutHeader.RightLink>
            Мои контакты 
          </AboutHeader.RightLink>
        </Popover>
            
        </AboutHeader.Right>    
    </AboutHeader>
  )
}

export default Header
