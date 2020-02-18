import React, { Fragment } from 'react'
import history from '../../history'


import  './styled.scss';
import { Link } from 'react-router-dom';
import backgroundImage from '../../images/geometry2.png'
import avatar from '../../images/avatar.PNG'


  const CareerPage = () => {
   // window.localStorage.clear()
    return (
      
      <Fragment >
        <Fragment className="about">
            <Fragment>
            <header className="about__header">
            <div className="about__header--left">
                <img src={avatar} class="about__header--left-image" alt="Cv image"></img>
                <h3 className="about__header--left-text">Константин Константинов</h3>
            </div>
            <div className="about__header--right">
                <a href="#" className="about__header--right header--right-link" >Мои контакты </a>
                <div className="description">
                    <div className="arrow"></div>
                    <div className="text">
                        <ul>
                            <li><a href='#'>kostya@mail.ru</a></li>
                            <li><a href='#'>+7 921 887 62 37</a></li>
                            <li><a href='#'>kostik_</a></li>
                        </ul> 
                    </div>
                </div>
            </div>
        </header>
            </Fragment>
            <Fragment>
                <div className="about__center">
                    <Fragment>
                    <aside class="center--aside">
                        <ul>
                            <li><a href='/about.html'><span class="icon-user-secret"> </span>Обо мне </a></li>
                            <li class="active"><a href='/career.html'><span class="icon-rocket"> </span>Карьерный путь</a></li>
                            <li><a href='/portfolio.html'><span class="icon-suitcase"> </span>Портфолио </a></li>
                                        
                        </ul>
                    </aside>
                    </Fragment>
                    <Fragment>
                        <section className="career">

                            <div className="career__career--path-name">
                                Карьерный путь
                            </div>
                            <div className="career__career--path">
                            <div className="career__career--path timeline__photo">
                                <img src="/images/Layer_4.png" alt="University image">
                            </div>
                            
                            <ul className="timeline">
                                
                                <li className="timeline--about">
                                    
                                    <div className="year">2000</div>
                                    <div className="timeline__work--page">
                                        <div className="line"></div>    
                                    <a className="title" href="#">ООО «Звезды путешествий»
                                    </a><br>
                                    <a href="#" className="career-title">Системный Администратор</a>
                                    <p className="years"> 
                                        2015 - по настоящее время</p>
                                </div>
                                </li>
                                <li>
                                    <div className="year">2000</div>
                                    <div className="timeline__work--page">
                                        <div className="line"></div>   
                                    <a className="title" href="#">New Web Design</a><br>
                                    <a href="#" className="career-title">21 March, 2014</a>
                                    <p className="years">Lorem ipsum dolor sit amet,</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="year">2000</div>
                                    <div className="timeline__work--page">
                                        <div className="line"></div>   
                                    <a className="title" href="#">New Web Design</a><br>
                                    <a href="#" className="career-title">21 March, 2014</a>
                                    <p className="years">Lorem ipsum dolor sit amet,</p>
                                </div>
                                </li>
                                <li>
                                    <div className="year">2000</div>
                                    <div className="timeline__work--page">
                                        <div className="line"></div>   
                                    <a className="title" href="#">New Web Design</a><br>
                                    <a href="#" className="career-title">21 March, 2014</a>
                                    <p className="years">Lorem ipsum dolor sit amet,</p>
                                </div>
                                </li>
                            </ul>
                            </div> <!--/.career__career--path-->
                        </section> <!--/.Section-->
                        </Fragment>
        </div>
        </Fragment>
        <Fragment>
        <footer className="about__footer">
            <div className="about__footer--left">
                <a href="#">© Дизайн сайта был разработан в школе </a>
            </div>
            <div className="about__footer--right">
                <ul className="social-links">
                    <li className="social-links__link"><a href="#" title="facebook"></a></li>
                    <li className="social-links__link"><a href="#" title="B"></a></li>
                    <li className="social-links__link"><a href="#" title="twitter"></a></li>   
                </ul>
            </div>   
        </footer>
        </Fragment>
    </Fragment>
      </Fragment>
      
    )
  }
  
  export default CareerPage
  