import React, { Fragment, useImperativeHandle } from 'react'
import history from '../../history'


import  './styled.scss';
import { Link } from 'react-router-dom';
import backgroundImage from '../../images/geometry2.png'
import avatar from '../../images/avatar.PNG'
import { Button } from '../../components';
import { Btn } from '../../components/Button/styled';

class IndexPage extends React.Component {

HandleClick = () => {
  history.push("/about");
}


  render () {
    // window.localStorage.clear()
     return (
       
       <Fragment >
         <html style ={{  backgroundImage: "url(" + backgroundImage + ")" }}>
         <div className = 'cardwrapper' 
           >
          
           <div className = 'card'>
 
           <img src = {avatar} class="card__image" alt="Profile Image"></img>
 
             <h2 class="card__name">Константин  <br /> Константинов</h2>
 
             <div class="card__footer">
               <Btn.Card onClick = {this.HandleClick}>Перейти на сайт</Btn.Card>
                 
             </div>
           </div>            
         </div>
         </html>
       </Fragment>
       
       
     )
   }
}
  
  
  export default IndexPage
  