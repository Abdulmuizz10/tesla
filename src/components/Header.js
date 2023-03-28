import React from 'react'
import styled from "styled-components"
import { useState } from 'react'

function Header() {

  const [BurgerStatus, SetBurgerStatus] = useState(false) 

  return (
    <Container>
        <Icon src="/img/logo.svg" />

        <MenuBar>
            <a href="#">MODEL S</a>
            <a href="#">MODEL 3</a>
            <a href="#">MODEL X</a>
            <a href="#">MODEL Y</a>
        </MenuBar>

        <Rightmenu>
            <a href="#">SHOP</a>
            <a href="#">TESLA ACCOUNT</a>
            <i className='bx bx-menu' onClick={() => SetBurgerStatus(true)}></i>
        </Rightmenu>

        <BurgerNav show={BurgerStatus}>
            <Close>
                <i className='bx bx-x' onClick={() => SetBurgerStatus(false)}></i>
            </Close>
            <li><a href="#">MODEL S</a></li>
            <li><a href="#">MODEL 3</a></li>
            <li><a href="#">MODEL X</a></li>
            <li><a href="#">MODEL Y</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">cyber Truck</a></li>
            <li><a href="#">Roadaster</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Existing Inventory</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header


const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const Icon = styled.img`
    width: 135px;
    height: 30px;
`

const MenuBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;


    a {
        font-size: 1.2rem;
        font-weight: 600;
        padding: 0 5px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const Rightmenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


    a {
        font-size: 1.2rem;
        font-weight: 600;
        padding: 0 3.5px;
    }

    i {
        font-size: 30px;
        padding-top: 5px;
        cursor: pointer;
    }
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    text-aling: start;
    justify-content: flex-start;
    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
    transition: 0.2s;

    li {
        padding: 13px 0;
        border-bottom: 2px solid rgba(0, 0, 0, .2);


        a {
            font-weight: 600;

        }
    }
    z-index: 1000;

`

const Close = styled.div`
    display: flex;
    justify-content: flex-end;

    i {
        font-size: 30px;
        cursor: pointer;
    }
`