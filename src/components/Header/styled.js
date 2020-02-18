import styled from 'styled-components'
//import { styleguide } from '../../constants'

const AboutHeader = styled.header`
    width: 100%;
    height: 80px;
    margin: 0 auto;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `
AboutHeader.Left = styled.div`
    width:50%;
    height:100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-left: 10%;
    `
AboutHeader.LeftImage = styled.div`
    width: 60px;
    height: 60px;
    border: 1px solid gray;
    border-radius: 100%;
    margin-left: 20%;
    `
AboutHeader.LeftText = styled.div`
    width: 220px;
    height: 14px;
    color: #414141;
    font-size: 17px;
    font-weight: 500;
    line-height: 28px;
    margin-left: 10px;
    margin-bottom: 10px;
    `
AboutHeader.Right = styled.div`
    width:50%;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 20%; 
    `

AboutHeader.RightLink = styled.div`
    color: #33c1e3;
    width: 150px;
    height: 20px;
    font-size: 16px;
    font-weight: 550;
    line-height: 22px;
    font-family: "Fira Sans","Font Awesome",sans-serif;
    margin-top: 28px; 
    justify-content: center;
    padding-left: 17px;
    padding-bottom: 20px;        
    border-bottom: 2px dotted #5ac7e5;
    position:relative;
        &:hover{
          color: #e85f61;
          border-bottom:2px dotted #e85f61;
        }
    `



export {
  AboutHeader
}
