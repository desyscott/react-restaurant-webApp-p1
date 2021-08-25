import React,{useState,useEffect} from 'react';
import {Nav,NavLogo,NavIcon,Bars} from "./NavbarElements";

const Navbar = ({toggle}) => {
    const [scroll,setScroll] = useState(false);

    const ChangeNav = () => {
        if(window.scrollY >= 200){
            setScroll(true)
        }else{
            setScroll(false) 
        } 
    }

    useEffect(() => {
        window.addEventListener("scroll",ChangeNav)
    },[])
   

    return (
        <Nav active ={scroll}>
        <NavLogo to='/'>Pizza</NavLogo>
           <NavIcon onClick={toggle}>
           <p>Menu</p>
            <Bars/>
           </NavIcon>
        </Nav>
    )
}

export default Navbar
