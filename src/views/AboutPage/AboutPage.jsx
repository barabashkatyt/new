import React, { Fragment } from 'react'
import history from '../../history'


import  './styled.scss';
import { Link } from 'react-router-dom';

import avatar from '../../images/avatar.PNG'
import profileImage from '../../images/cv_img.PNG'



  const AboutPage = () => {
   // window.localStorage.clear()
    return (
      
<Fragment>
    <div class="about">
        <header class="about__header">
            <div class="about__header--left">
            <img src={avatar} class="about__header--left-image" alt="Cv image"></img>
                <h3 class="about__header--left-text">Константин Константинов</h3>
            </div>
            <div class="about__header--right">
                <a href="#" class="about__header--right header--right-link" >Мои контакты </a>
                <div class="description">
                    <div class="arrow"></div>
                    <div class="text">
                        <ul>
                            <li><a href='#'>kostya@mail.ru</a></li>
                            <li><a href='#'>+7 921 887 62 37</a></li>
                            <li><a href='#'>kostik_</a></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </header>
        <div class="about__center">
            <aside class="center--aside">
                <ul>
                    <li class="active"><a href='/about.html'><span class="icon-user-secret"> </span>Обо мне</a></li>
                    <li><a href='/career.html'><span class="icon-rocket"> </span>Карьерный путь</a></li>
                    <li><a href='/portfolio.html'><span class="icon-suitcase"> </span>Портфолио </a></li>
                </ul>
            </aside>
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
                

                <a href="" class="download-cv">Скачать резюме</a>
                </article> 
            </div>
        </div>
        <footer class="about__footer">
            <div class="about__footer--left">
                <a href="#">© Дизайн сайта был разработан в школе </a>
            </div>
            <div class="about__footer--right">
                <ul class="social-links">
                    <li class="social-links__link"><a href="#"  title="facebook"></a></li>
                    <li class="social-links__link"><a href="#"  title="B"></a></li>
                    <li class="social-links__link"><a href="#"  title="twitter"></a></li>   
                </ul>

            </div>   

        </footer>
      </div>
      </Fragment>
    )
  }
  
  export default AboutPage
  