import styled from "styled-components"


export const ProductsContainer = styled.div`
width:100vw;
min-height:100vh;
padding:5rem calc((100vw-1300px)/2);
background:#150f0f;
color:#fff;


`
export const ProductsHeading = styled.h1`
font-size:clamp(2rem, 2.5vw, 3rem);
text-align:center;
position:relative;
top:20px;
font-weight:1000;
margin-bottom:5rem;
letter-spacing:5px;
`
export const  ProductWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto;
`

export const  ProductCard = styled.div`
margin:0 2rem;
line-height:2;
width:300px;


`
export const  ProductImg = styled.img`
height:300px;
min-width:300px;
max-width:100%;
box-shadow:8px 8px #fdc500;
cursor:pointer;
transition:transform 0.3s ease-in;


&:hover{
    transform:scale(1.1);   
}

`
export const  ProductInfo = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem;
text-align:center;

`
export const  ProductTitle  = styled.h2`
font-weight:400;
font-size:1.5rem;
`
export const ProductDesc  = styled.p`
margin-bottom:1rem;

`
export const ProductPrice = styled.p`
margin-bottom:1rem;
font-size:2rem;
font-weight:500;
`
export const  ProductBtn = styled.button`
font-size:1rem;
padding:1rem 4rem;
border:none;
font-weight:500;
background:#e31837;
color:#fff;
transition:background,color,cursor,0.2s ease-out;


&:hover{
    background:#ffc500;
    cursor:pointer;
    color:#000; 

}

`