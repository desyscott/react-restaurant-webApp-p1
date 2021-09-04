import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SideBtnLink} from "./sidebarElements"

const Sidebar=({isOpen,toggle})=>{
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
               <Icon onClick={toggle}>
             <CloseIcon/>
             </Icon>
           <SidebarMenu> 
           <SidebarLink to="/">Pizzas</SidebarLink>
           <SidebarLink to="/">Desserts</SidebarLink>
           <SidebarLink to="/">Full Menu</SidebarLink>
           </SidebarMenu>
           <SideBtnWrap>
           <SideBtnLink to="/">Order Now</SideBtnLink>
           </SideBtnWrap>
        </SidebarContainer>
    )


}

export default Sidebar