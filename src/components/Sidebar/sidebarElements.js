import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import { Link} from "react-router-dom";

export const SidebarContainer=styled.aside`
position:fixed;
top:0;
right:${({isOpen})=>isOpen? "0":"-1000px"};
z-index:999;
width:350px;
background:#ffc500;
height:100%;
display:grid;
align-items:center;
transition:0.3s ease-in-out;

@media screen and (max-width:500px){
    width:100%;
} 
`
export const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
border:transparent;
font-size:2rem;
cursor:pointer;
outline:none;

`

export const CloseIcon=styled(FaTimes)`
color:#000;
`

export const SidebarMenu = styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows:repeat(3, 80px);
text-align:center;

 @media screen and (max-width:480px){
    grid-template-rows:repeat(3, 60px);  
} 
`

export const SidebarLink = styled(Link)`
display:flex;
align-items:center;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
color:#000;
cursor:pointer;
transition:color 0.2s ease-in-out;

&:hover{
color:#e31837;
}
`

export const SideBtnWrap=styled.div`
display:flex;
justify-content:center;

`
export const SideBtnLink = styled(Link)`
background:#e31837;
white-space:nowrap;
padding:16px 64px;
color:#fff;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
text-decoration:none;
transition:color 0.2s ease-in-out;

&:hover{
    background:#fff;
    color:#010606;
}
`

