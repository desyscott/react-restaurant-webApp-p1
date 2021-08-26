import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import {FaPizzaSlice} from "react-icons/fa";

export const Nav = styled.nav`
background:${({active}) => active ? "#e31837" : "transparent"};
transition:background 0.3s  ease-in;
height:85px;
width:100%;
position:fixed;
z-index:999;
display:flex;
justify-content:center;
align-items:center;
font-size:2rem;
`;


export const NavLogo = styled(Link)`
color:#fff;
text-decoration:none;
font-weight:bold;
`;

export const NavIcon = styled.div`
display:block;
cursor:pointer;
color:#fff;
font-size:1rem;
position:absolute;
top:0;
right:0;

        p {
        transform:translate(-75px,30px);
        font-weight:bold;
         }
         @media screen and (max-width:450px){
            position:absolute;
            top:0;
           right:-8%;
        
         }
`

export const Bars = styled (FaPizzaSlice)`
font-size:1.9rem;
transform:translate(-25px,4px);
`


    