import styled from "styled-components"


export const SweetContainer=styled.div`
width:100vw;
min-height:100vh;
background:#150f0f;
color:#fff;

` 
export const SweetHeading=styled.h1`
text-align:center;
text-transform:capitalize;
font-size:2rem;
margin-bottom:5rem;
position:relative;
top:25px;
letter-spacing:5px;

` 
export const SweetWrapper=styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto;



` 
export const SweetCard=styled.div`
width:300px;
margin: 0 2rem;
line-height:2;

` 
export const SweetImg=styled.img`
max-width:100%;
min-width:320px;
height:350px;
box-shadow:8px 8px #fdc500;
cursor:pointer;

&:hover{
    transform:scale(1.1);
    transition:0.3s all linear;
}

` 
export const SweetInfo=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding:2rem;

` 
export const SweetTitle=styled.h2`
font-weight:400;
font-size:1.5rem;
` 
export const SweetDesc=styled.p`
font-size:1rem;
margin-bottom:1rem;
` 
export const SweetPrice=styled.div`
font-size:1.5rem` 

export const SweetBtn=styled.button`
background:#e31837;
font-size:1rem;
padding:1rem 4rem;
border:none;
color:#fff;
cursor:pointer;


&:hover{
    color:#000;
    background:#ffc500;
    transition:0.2s ease-out;
}

` 