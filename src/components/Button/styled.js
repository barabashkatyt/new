import styled from 'styled-components'



const Btn = styled.button`
  width: 100%;
  display: inline-flex;
  color: #e85f61;
  font-weight: 600;
  font-size: 14px;
  line-height: 28px;                    
  background-color: #ffffff; 
  padding: 3px;
  padding-left: 25px;
  border: 2px solid #e85f61;
  border-radius: 25px;
  width: 173px;
  height: 40px;
  text-decoration: none;
  
`

Btn.Card = styled.button`
    position: absolute;
    color: #ffffff;
    background-color: #33c1e3; 
    font-weight: bold;
    line-height: 28px;
    text-decoration: none;
    padding: 3px;
    border: 2px solid #ffffff;
    border-radius: 25px;
    width: 138px;
    height: 40px;
    position: absolute;
    left: 50%;
    top: 68%;
    transform: translate(-50%, 50%);
    text-align: center;


    &:hover{
        
    color: #33c1e3;
    border: 2px solid #33c1e3;
    background-color: #ffffff;
    }
`

export {
  Btn
}
