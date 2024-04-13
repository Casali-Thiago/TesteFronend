"use client"

import styled from "styled-components"
import { Montserrat, Nunito, Nunito_Sans } from "next/font/google";
import { CartControl } from "./cart-control";

const montserrat = Montserrat({ 
  weight: ['300','600'],
  subsets: ["latin"] 
});



interface HeaderProps{

}

const TagHeader = styled.header `
    display: flex;
    aling-items: center;
    justify-content : space-between;
    padding: 20px 160px;
    background-color: var(--bg2-color);
`
const Logo = styled.div`
    
    a{
        font-size: 30px;
        font-weight: 600;
        font-size: 44px;
        color: var(--logo-color);

    }

    span{
        font-size: 20px;
        font-weight: 300;
        color: var(--logo-color);
    }
`
const Cart = styled.div`
    display: flex;
    width:90px;
    height: 45px;
    background-color: var(--logo-color);
    border-radius: 8px;
    align-items: center;
    justify-content : space-evenly;

    img{
        height: 18px;
        width:19px;
      }
    
      span{
        font-size:18px;
        font-weight: 700px

      }

`


export function Header(props: HeaderProps){
    return(
        <TagHeader>
            <Logo className={montserrat.className}>
            <a>MKS</a>
            <span>Sitemas</span>
            </Logo>
            <Cart>
                <CartControl/>
            </Cart>
        </TagHeader>
    )
}