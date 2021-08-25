import styled from "styled-components"
import {Link} from "react-router-dom"
import {FaPizzaSlice} from "react-icons/fa"


export const  FooterContainer = styled.footer`
background:#0d0909;
width:100vw;
height:100%;
`
export const  FooterWrap = styled.div`
max-height:1300px;
max-width:1300px;
padding:2rem 5rem;
margin:0 auto;
`
export const  SocialMediaWrap= styled.div`
display:flex;
justify-content:space-between;
align-items:center;
font-size:1.5rem;


@media screen and (max-width:700px){
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
      
}


`
export const  SocialLogo = styled(Link)`
text-decoration:none;
color:#fff;
font-size:1.6rem;
font-weight:bold;
width:100px;
display:flex;
justify-content:space-between;


@media screen and (max-width:700px){
    margin-bottom:20px;
      
}


`

export const  Pizza = styled(FaPizzaSlice)`
font-size:1.7rem;
`
export const  SocialIcons = styled.div`
width:240px;
display:flex;
justify-content:space-between;


`


export const   SocialIconLink = styled.a`
color:#fff;
transition:transform 0.3ms ease-in;

&:hover{
    transform:scale(1.2)
}

`
