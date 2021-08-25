import styled from "styled-components"
import FeImgBg from "../../Images/product-4.jpg"


export const FeatureContainer=styled.div`
background:linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1)), 
url(${FeImgBg});
height:100vh;
max-height:500px;
width:100vw;
background-position:center;
background-size:cover;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:#fff;
text-align:center;
padding:0 1rem;



h1{
   font-size:3rem;
   font-weight:bolder;
    text-transform:capitalize;   };
p{
  font-size:1.5rem;
  margin-bottom:4px;
}
`
export const FeatureBtn=styled.button`
background:#e9ba23;
padding:1rem 4rem;
font-size:1rem;
border:none;
font-weight:bold;
transition:background,color,cursor,0.3s ease-out;


&:hover{
    background:#e31837;
    color:#fff;
    cursor:pointer;
}
`
