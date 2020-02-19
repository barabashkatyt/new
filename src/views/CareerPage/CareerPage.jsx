import React, { Fragment } from 'react'
import history from '../../history'
import  './styled.scss';
import { Link } from 'react-router-dom';
import backgroundImage from '../../images/geometry2.png'
import avatar from '../../images/avatar.PNG'
import {Header, Footer, Aside} from '../../components'



class CareerPage extends React.Component {


render () {
    return (
        <Fragment >
            <Header />
            <div class = "about">
            <div className="about__center">
                <Aside />
                    <Fragment>
                        <section className="career">
                            <div className="career__career--path-name"> Карьерный путь </div>
                            <div className="career__career--path">
                            <div className="career__career--path timeline__photo">
                                <img src="/images/Layer_4.png" alt="University image"></img>
                            </div>
                                    <ul className="timeline">
                                        <li className="timeline--about">   
                                            <div className="year">2000</div>
                                            <div className="timeline__work--page">
                                                <div className="line"></div>    
                                                <a className="title" href="#">ООО «Звезды путешествий»</a><br/>
                                                <a href="#" className="career-title">Системный Администратор</a>
                                                <p className="years"> 2015 - по настоящее время </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="year">2000</div>
                                            <div className="timeline__work--page">
                                                <div className="line"></div>   
                                                <a className="title" href="#">New Web Design</a><br/>
                                                <a href="#" className="career-title">21 March, 2014</a>
                                                <p className="years">Lorem ipsum dolor sit amet,</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="year">2000</div>
                                            <div className="timeline__work--page">
                                                <div className="line"></div>   
                                                <a className="title" href="#">New Web Design</a><br/>
                                                <a href="#" className="career-title">21 March, 2014</a>
                                                <p className="years">Lorem ipsum dolor sit amet,</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="year">2000</div>
                                            <div className="timeline__work--page">
                                                <div className="line"></div>   
                                                <a className="title" href="#">New Web Design</a><br/>
                                                <a href="#" className="career-title">21 March, 2014</a>
                                                <p className="years">Lorem ipsum dolor sit amet,</p>
                                            </div>
                                        </li>
                                        </ul>
                                    </div> 
                              </section> 
                </Fragment>
              </div>
              </div>
              <Footer />
            </Fragment>            
    )
}
}

 
  export default CareerPage
  