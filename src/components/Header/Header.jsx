import React from 'react'
import { AboutHeader } from './styled.js';
import avatar from '../../images/avatar.PNG'
import 'antd/dist/antd.css';
import {Popover,Contacts} from '../../components'


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
        <Popover content={<Contacts />}>
          <AboutHeader.RightLink>
            Мои контакты 
          </AboutHeader.RightLink>
        </Popover>
            
        </AboutHeader.Right>    
    </AboutHeader>
  )
}

export default Header
