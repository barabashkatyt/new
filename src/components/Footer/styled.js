import styled from 'styled-components'
//import { styleguide } from '../../constants'

const AboutFooter = styled.footer`
        list-decoration: none;
        position: fixed;
        margin: 0 auto;
        width: 100%;
        height: 50px;
        background-color: #414141;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        left: 0;
        bottom: 0;
    `
    AboutFooter.Left = styled.div`
        width:50%;
        height: 100%;
        min-width: 337px;
        height: 14px;
        color: #9c9c9c;
        text-decoration: none;
        font-size: 14px;
        font-weight: 300;
        line-height: 40px;
        margin-left: 15%;
        margin-bottom: 30px;
            a{
                color: inherit;
                text-decoration: inherit;
            }
        }
    `

    AboutFooter.Right = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        min-width: 300px;
        list-decoration:none;
        
            ul {
                display:flex;
                
        
            }
            .social-links__link{
                width: 30px;
                height: 30px;
                margin-left: 8px;
                background-color: #9c9c9c;
                border-radius: 50%;
                margin-top: 10px;    
            
                &:hover{
                    background-color: #33c1e3;
                }
            }
        }
    `

export {
    AboutFooter
  }
  