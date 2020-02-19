import React, { Fragment } from 'react'
import history from '../../history'
import  './styled.scss';
import { Link } from 'react-router-dom';

import avatar from '../../images/avatar.PNG'
import {Header, Footer, Aside} from '../../components'
import exampleImage from '../../images/ex1_top.PNG'
import exampleImage2 from '../../images/ex2_top.PNG'



class PortfolioPage extends React.Component {


render () {
    return (
        <Fragment >
            <Header />
            <div class = "about">
            <div className="about__center">
                <Aside />
                    <Fragment>
                    <section class="portfolio">
                <div class="portfolio__text">Портфолио</div>
                <div class="portfolio__example">
                <div class="portfolio__example--page">
                    <img class="portfolio__example--page-image" src={exampleImage} alt="image"></img>
                    <div class="portfolio__example--page-info">
                        <div class="info__title">Deals app</div>
                        <div class="info__page_about">Продажа одежды</div>
                        <div class="info__page_type">Продажа одежды</div>
                    </div>
                </div>
                <div class="portfolio__example--page">
                    <img class="portfolio__example--page-image" src={exampleImage2} alt="image"></img>
                    <div class="portfolio__example--page-info">
                        <div class="info__title">Deals app</div>
                        <div class="info__page_about">Продажа одежды</div>
                        <div class="info__page_type">Продажа одежды</div>
                    </div>
                </div>
                <div class="portfolio__example--page">
                    <img class="portfolio__example--page-image" src={exampleImage} alt="image"></img>
                    <div class="portfolio__example--page-info">
                        <div class="info__title">Deals app</div>
                        <div class="info__page_about">Продажа одежды</div>
                        <div class="info__page_type">Продажа одежды</div>
                    </div>
                </div>
                <div class="portfolio__example--page">
                    <img class="portfolio__example--page-image" src={exampleImage2} alt="image"></img>
                    <div class="portfolio__example--page-info">
                        <div class="info__title">Deals app</div>
                        <div class="info__page_about">Продажа одежды</div>
                        <div class="info__page_type">Продажа одежды</div>
                    </div>
                </div>
                <div class="portfolio__example--page">
                    <img class="portfolio__example--page-image" src={exampleImage} alt="image"></img>
                    <div class="portfolio__example--page-info">
                        <div class="info__title">Deals app</div>
                        <div class="info__page_about">Продажа одежды</div>
                        <div class="info__page_type">Продажа одежды</div>
                    </div>
                </div>
                
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

 
  export default PortfolioPage
  