import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import  './styled.scss';
import { Row, Col } from 'antd';
import universityImage from '../../images/Layer_4.png'


const examples = [
    {
        year: '2020',
        line: '',
        title: 'Page title',
        description: '',
        duration: ''
    },
    {
        year: '2020',
        line: '',
        title: 'Page title',
        description: '',
        duration: ''
    },
    {
        year: '2020',
        line: '',
        title: 'Page title',
        description: '',
        duration: ''
    },
    {
        year: '2020',
        line: '',
        title: 'Page title',
        description: '',
        duration: ''
    },
    {
        year: '2020',
        line: '',
        title: 'Page title',
        description: '',
        duration: ''
    }
]



class CareerPage extends React.Component {



render () {
    return (
        <Fragment >
        
        <div class = "about">
        <div className="about__center">
            
        <Fragment>
    <section className="career">
        <div className="career__career--path-name">Карьерный путь</div>
        <div className="career__career--path">
        <div className="career__career--path timeline__photo">
            <img src={universityImage} alt="University image"></img>
        </div>
    <ul className="timeline">
        {examples.map((example, id)=>(
            <li className="timeline--about" key={id}>   
            <div className="year">{example.year}</div>
            <div className="timeline__work--page">
                <div className="line"></div>    
                <a className="title" href="#" >{example.title}</a><br/>
                <a href="#" className="career-title">{example.description}</a>
                <p className="years"> {example.duration} </p>
            </div>
        </li>
        ))}
        </ul>
            </div> 
            </section> 
            </Fragment>
              </div>
              </div>
        
            </Fragment>            
    )
}
}

 
  export default CareerPage
  