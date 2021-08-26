import React from "react"
import {
    SweetContainer,
    SweetHeading,
    SweetWrapper,
    SweetCard,
    SweetImg,
    SweetInfo,
    SweetTitle,
    SweetDesc,
    SweetPrice,
    SweetBtn
} from "./SweetsElements"



const Sweets =({heading,dataTwo})=>{
    return(
        
        <SweetContainer>
            <SweetHeading>
            {heading}
            </SweetHeading>
            <SweetWrapper>
                {dataTwo.map((sweet,index)=>{
                return(
                    <SweetCard key={index}>
                        <SweetImg src={sweet.img} alt={sweet.alt}/>
                        <SweetInfo>
                        <SweetTitle>{sweet.name}</SweetTitle>
                        <SweetDesc>{sweet.desc}</SweetDesc>
                        <SweetPrice>{sweet.price}</SweetPrice>
                        <SweetBtn>{sweet.button}</SweetBtn>
                        </SweetInfo>
                    </SweetCard>
                )

            })}</SweetWrapper>
            
        </SweetContainer>
        
    )


}

export default Sweets;