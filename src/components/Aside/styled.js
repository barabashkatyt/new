import styled from 'styled-components'
//import { styleguide } from '../../constants'

const CenterAside = styled.aside`
    width: 30vw;
    color: #414141;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    text-decoration: none;
    background-color: #f6f6f6;
    text-align: end;
    margin-top: 2px;
    margin-left: 2px;
    padding-bottom: 20px;
    padding-right: 10px;
    margin-right: 0px;
    ul {
        list-style-type: none;
        width: 100%;
        text-align: end;
        padding: 20px;
        margin: 20px;
    }
    li {
        border-right: 6px solid transparent;
    }

    a {
        color: inherit;
        text-decoration: inherit;
        padding-right: 20px;
    }
    .active{
        border-right: 6px solid #33c1e3;
        color: #33c1e3;
    }
    li:hover{ 
        border-right: 6px solid #33c1e3;
        color: #33c1e3;
    }


    `


export {
    CenterAside
  }
  