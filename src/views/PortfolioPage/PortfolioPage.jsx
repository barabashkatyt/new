import React, { Fragment } from 'react'
import history from '../../history'
import  './styled.scss';
import { Link } from 'react-router-dom';


import exampleImage from '../../images/ex1_top.PNG'
import exampleImage2 from '../../images/ex2_top.PNG'

const cards = [
    {
        title: 'Deals app0',
        description: 'description',
        type: 'type',
        img: exampleImage
    },
    {
        title: 'Deals app1',
        description: 'description',
        type: 'type',
        img: exampleImage
    },
    {
        title: 'Deals app2',
        description: 'description',
        type: 'type',
        img: exampleImage
    },
    {
        title: 'Deals app3',
        description: 'description',
        type: 'type',
        img: exampleImage
    }
]


class PortfolioPage extends React.Component {


render () {
    return (
    <Fragment >
    <div class = "about">
    <div className="about__center">
    <Fragment>
        <section class="portfolio">
        <div class="portfolio__text">Портфолио</div>
        <div class="portfolio__example">
        {cards.map((card, idx) => (
            <div class="portfolio__example--page" key={idx}>
                <img class="portfolio__example--page-image" src={card.img} alt="image"></img>
                <div class="portfolio__example--page-info">
                    <div class="info__title">{card.title}</div>
                    <div class="info__page_about">{card.description}</div>
                    <div class="info__page_type">{card.type}</div>
                </div>
            </div>
        ))}        
    </div>
    </section>
        </Fragment>
    </div>
    </div>
            
    </Fragment>            
    )
}
}

 
  export default PortfolioPage
  