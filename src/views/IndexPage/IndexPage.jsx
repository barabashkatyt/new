import React, { Fragment } from 'react'
import history from '../../history'


import  './styled.scss';
import { Link } from 'react-router-dom';
import backgroundImage from '../../images/geometry2.png'
import avatar from '../../images/avatar.PNG'
import { Button } from '../../components';
import { Btn } from '../../components/Button/styled';


  const IndexPage = () => {
   // window.localStorage.clear()
    return (
      
      <Fragment >
        <div className = 'cardwrapper' 
          style ={{  backgroundImage: "url(" + backgroundImage + ")"}}>
         
          <div className = 'card'>

          <img src = {avatar} class="card__image" alt="Profile Image"></img>

            <h2 class="card__name">Константин  <br /> Константинов</h2>

            <div class="card__footer">
              <Btn.Card>Перейти на сайт</Btn.Card>
                
            </div>
          </div>            
        </div>
      </Fragment>
      
      
    )
  }
  
  export default IndexPage
  