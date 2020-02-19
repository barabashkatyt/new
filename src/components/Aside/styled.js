import styled from 'styled-components'
//import { styleguide } from '../../constants'

const CenterAside = styled.aside`
        width: 30%;
        height: 100%;
        color: #414141;
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        text-decoration: none;
        font-weight: 400;
        display: flex;
        justify-content: flex-end;
        background-color: #f6f6f6;
        text-align: end;
        padding-right: 10px;

        margin-top: 2px;
        padding-bottom: 20px;
        margin-left: 2px;
        ul {
            width: 100%;
            text-align: end;
            padding: 20px;
            margin: 20px;
        }

        img {
            width: 20px ;
            height: 15px;
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
  