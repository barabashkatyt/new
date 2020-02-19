import React, { Fragment } from 'react'
import history from '../../history'


import  './styled.scss';
import { Link } from 'react-router-dom';

import profileImage from '../../images/cv_img.PNG'
import { Header , Footer, Aside , Button} from '../../components';
import {CenterAside} from '../../components/Aside/styled';
import { ThemeConsumer } from 'styled-components';
import { AntMenu } from '../../components/Menu/styled';



class AboutPage extends React.Component {
    handleClick = () => {
        history.push("/");
    }
    
     // const AboutPage = () => {
    
    render () {
        return (
          
            <Fragment>
                    <Header/>
                    <div class="about">
                    <div class="about__center">
                        <Aside />
                      
                        
                        <div class="center--section">
                            <img src={profileImage} class="center--section-image" alt="Profile image"></img>
                            <article class="about__article">
                            <div class="center--section-text">
                                <span> Обо мне </span> <br></br>
                                <div class="text">
                                    
                                    Меня зовут Костя. Проживаю на Юге Башкортостана, с появлением интернета, 
                                    c головой увлёкся этой темой, и теперь уже почти живу Он-Лайн.
                                    С недавних пор (уже года два), это уже не просто увлечение, но 
                                    и нормальный заработок для меня и моей семьи, на этом конечно не собираюсь останавливаться, 
                                    а буду стараться добиться ещё больших результатов!
                                    Интернет сообщество очень интересно и многогранно , почти каждый день
                                    С недавних пор (уже года два), это уже не просто увлечение, но 
                                    и нормальный заработок для меня и моей семьи, на этом конечно не собираюсь останавливаться, 
                                    а буду стараться добиться ещё больших результатов!
                                    Интернет сообщество очень интересно и многогранно , почти каждый день
                                </div>
                            </div>
                            
            
                            <Button onClick = {this.handleClick}>Скачать резюме</Button>
                            </article> 
                        </div>
                    </div>
                    <Footer />
                    </div>
                  </Fragment>
                )
              }
    }
         
       // window.localStorage.clear()
        




  
  export default AboutPage
  