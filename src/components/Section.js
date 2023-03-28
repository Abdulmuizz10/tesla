import React from 'react'
import styled from 'styled-components'

function Section( { title, description, backgroundImg, leftBtnText, rightBtnText } ) {
  return (
   <Wrap bgImage={backgroundImg}>
    <HomeText>    
        <h1> {title} </h1>
        <p>{description}</p>
    </HomeText>

    <Buttons>
        <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
           {rightBtnText && <RightButton>{rightBtnText}</RightButton> }
        </ButtonGroup>
        <DownArrow src="/img/down-arrow.svg"/>
    </Buttons>
   </Wrap>
  )
}

export default Section


const Wrap = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${props => `url("img/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
`

const HomeText = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1 {
        margin: 0 0 -20px 0
    }
`
const Buttons = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ButtonGroup = styled.div`
    display: flex;


    @media (max-width:768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
   height: 40px;
   display: flex;
   justify-content: center;
   align-items: center;
   animation: animateDown infinite 1.5s;
   margin-top: 20px;
`

