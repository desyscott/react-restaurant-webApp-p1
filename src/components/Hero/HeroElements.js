import styled from "styled-components";
import ImgBg from "../../Images/pizza-8.jpg";


export const HeroContainer =styled.div`
background:linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1)),url(${ImgBg});
height:100vh;
width:100vw;
background-position:center;
background-size:cover;
z-index:1;

`
export const HeroContent =styled.div`
height:100%;
width:100%;
padding:0rem calc((100vw-1300px)/2);

@media screen and (max-width:900px) and (min-width:280px){ 
    width:100%; 
    display:flex;
    justify-content:center;
}

`

export const HeroItems =styled.div`
width:650px;
height:100vh;
color:#fff;
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction:column;
font-size:2rem;
font-weight:bold;
text-transform:uppercase;
padding:0 2.2rem;


@media screen and (max-width:900px) and (min-width:280px){
    width:100%;

}

`

export const HeroH1 =styled.h1`
font-size:clamp(2.5rem,10vw,5rem);
margin-bottom:1rem;
box-shadow:3px 5px #e9ba23;
letter-spacing:3px;

`

export const HeroP =styled.p`
margin-bottom:1rem;

`

export const HeroBtn =styled.button`
padding:1rem 3rem;
cursor:pointer;
background:#e31837;
border:none;
color:#fff;
font-size:1.2rem;
transition:color,background 0.3s ease-in;


&:hover{
    background:#e9ba23;
    color:#000;
}



@media screen and (max-width:900px) and (min-width:280px){ 
    display:flex;
    justify-content:center;
}

`